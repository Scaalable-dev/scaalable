/* ==========================================================================
   SERVER ENTRY — build-time only

   Nothing in the browser bundle imports this file; it exists so that
   scripts/prerender.mjs can render each route to static HTML at build time.
   Vite compiles it separately (`vite build --ssr`), so importing the page
   data modules here does not pull them into the client's eager chunk.

   Why prerender at all: the app sets its title, canonical and JSON-LD from
   effects, which only run once JavaScript has executed. Google renders pages
   before indexing them, but the answer-engine crawlers this site invites in
   robots.txt largely do not — to them every route was the same near-empty
   index.html. This gives them the real markup.
   ========================================================================== */

import { StrictMode } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { LazyMotion, domMax } from "framer-motion";
import { Writable } from "node:stream";

import App from "./App.jsx";

/* Re-exported so the prerender script has one module to import: these
   serialise the very tag set the running app applies to the DOM, and going
   through the SSR bundle means the script never has to resolve JSX, images or
   bare CSS specifiers itself. */
export { renderPageMetaHtml } from "./lib/pageMeta";
export { renderPageJsonLdHtml } from "./lib/structuredData";

import { HOME_PATH, homeSeo } from "./pages/HomePage/homeData";
import { ABOUT_PATH, aboutSeo } from "./pages/AboutPage/aboutData";
import { CONTACT_PATH, contactSeo } from "./pages/ContactPage/contactData";
import { SERVICES_PATH, servicesSeo } from "./pages/ServicePage/servicesData";
import { notFoundSeo } from "./pages/notFoundData";

/* Each route, and the file it is written to. `out` is relative to dist/ and
   directory-style for the real pages, because a static host serves a matching
   file before it falls back to the single-page rewrite.

   The 404 is prerendered too, to a flat 404.html rather than a directory: the
   route matches nothing in particular, so there is no path to place it at —
   it exists for the host to serve when a URL matches no file. */
export const routes = [
  { path: HOME_PATH, out: "index.html", seo: homeSeo },
  { path: SERVICES_PATH, out: "services/index.html", seo: servicesSeo },
  { path: ABOUT_PATH, out: "about/index.html", seo: aboutSeo },
  { path: CONTACT_PATH, out: "contact/index.html", seo: contactSeo },
  { path: "/404", out: "404.html", seo: notFoundSeo },
];

/* domMax directly rather than main.jsx's dynamic import: the split exists to
   keep features out of the browser's eager bundle, and there is no such
   budget here. `strict` is dropped for the same reason it is set there — it
   guards development, and this runs once at build time.

   Toaster is not rendered: it is an empty container until something fires a
   toast, so it would only add markup a crawler has to skip past. */
const app = (path) => (
  <StrictMode>
    <StaticRouter location={path}>
      <LazyMotion features={domMax}>
        <App />
      </LazyMotion>
    </StaticRouter>
  </StrictMode>
);

/* renderToPipeableStream rather than renderToString: three of the four routes
   are React.lazy chunks behind a Suspense boundary, and renderToString does
   not wait for them — it would emit the loading spacer and nothing else.
   onAllReady fires once every boundary has resolved, which is exactly the
   complete-document guarantee a prerender needs. */
export const render = (path) =>
  new Promise((resolve, reject) => {
    let html = "";

    const sink = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString("utf8");
        callback();
      },
    });

    sink.on("finish", () => resolve(html));

    const { pipe, abort } = renderToPipeableStream(app(path), {
      onAllReady() {
        pipe(sink);
      },

      /* A shell error means the render never produced usable markup. Failing
         the build is the right response: silently shipping a page whose body
         is empty would be indistinguishable from not prerendering at all. */
      onShellError: reject,
      onError: reject,
    });

    /* Backstop for a render that never settles — a component suspending on a
       promise that only resolves in a browser would otherwise hang the build
       with no output to explain why. */
    setTimeout(() => {
      abort();
      reject(new Error(`Timed out prerendering ${path}`));
    }, 20000).unref();
  });
