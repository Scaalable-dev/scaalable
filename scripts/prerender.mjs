/* ==========================================================================
   PRERENDER

   Runs after both Vite builds. Renders each real route with the SSR bundle
   and writes a complete static HTML file for it, so a crawler that does not
   execute JavaScript sees the page's actual content, title, canonical and
   structured data rather than the empty shell every route used to serve.

   Output is directory-style — dist/about/index.html — because static hosts
   serve a matching file before falling back to the single-page rewrite. The
   rewrite still handles everything else, the 404 route included.

   The app is not hydrated: main.jsx still calls createRoot, which clears the
   container and renders fresh in a single commit. That costs one extra render
   of markup the browser already has, and buys immunity from the hydration
   mismatches that animation-heavy trees are prone to.
   ========================================================================== */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import {
  render,
  renderPageJsonLdHtml,
  renderPageMetaHtml,
  routes,
} from "../.prerender/entry-server.js";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");

/* Which source module backs each route, so the manifest lookup below can find
   the chunk and stylesheet the route needs. These are the exact specifiers
   App.jsx lazy-imports, resolved to manifest keys. */
const ROUTE_MODULES = {
  "/": "index.html",
  "/services": "src/pages/ServicePage/index.js",
  "/about": "src/pages/AboutPage/About.jsx",
  "/contact": "src/pages/ContactPage/index.js",
  "/404": "src/pages/NotFound.jsx",
};

/* ==========================================================================
   ASSET RESOLUTION
   ========================================================================== */

/* Walks a manifest entry's import graph collecting stylesheets. A route chunk
   lists only its own CSS; anything it pulls in through a shared chunk hangs
   off that chunk's entry instead, so the graph has to be followed rather than
   read one level deep. */
const collectCss = (manifest, key, seen = new Set()) => {
  if (!key || seen.has(key)) return [];
  seen.add(key);

  const entry = manifest[key];
  if (!entry) return [];

  return [
    ...(entry.css ?? []),
    ...(entry.imports ?? []).flatMap((next) =>
      collectCss(manifest, next, seen),
    ),
  ];
};

/* ==========================================================================
   HEAD REWRITING
   ========================================================================== */

/* Tags the route supplies itself. They are stripped from the template before
   its own are inserted — index.html carries site-level defaults, and leaving
   them in place would put two og:title values on every page, which a scraper
   resolves by picking one arbitrarily. */
const TEMPLATE_TAGS_TO_REPLACE = [
  /\n?\s*<title>[\s\S]*?<\/title>/i,
  /\n?\s*<link[^>]*rel="canonical"[^>]*>/gi,
  /\n?\s*<meta[^>]*name="description"[^>]*>/gi,
  /\n?\s*<meta[^>]*name="robots"[^>]*>/gi,
  /\n?\s*<meta[^>]*property="og:title"[^>]*>/gi,
  /\n?\s*<meta[^>]*property="og:description"[^>]*>/gi,
  /\n?\s*<meta[^>]*property="og:url"[^>]*>/gi,
  /\n?\s*<meta[^>]*name="twitter:title"[^>]*>/gi,
  /\n?\s*<meta[^>]*name="twitter:description"[^>]*>/gi,
];

const stripTemplateTags = (html) =>
  TEMPLATE_TAGS_TO_REPLACE.reduce(
    (current, pattern) => current.replace(pattern, ""),
    html,
  );

/* ==========================================================================
   BODY
   ========================================================================== */

/* Empties every inline <svg> while keeping the element itself, so CSS rules
   and layout that select on it still match.

   Icon and diagram geometry was 43% of the home page's static markup and
   contributes nothing a crawler can read — the text beside an icon already
   says what it is. This is safe for the same reason the marquee copies are:
   nothing hydrates, so the client renders the full artwork on mount and the
   static file never has to match it.

   Deliberately not applied to the <head>: the JSON-LD there is not markup. */
const stripSvgContents = (html) =>
  html.replace(/<svg\b([^>]*)>[\s\S]*?<\/svg>/g, "<svg$1></svg>");

/* ==========================================================================
   MAIN
   ========================================================================== */

const template = await readFile(join(DIST, "index.html"), "utf8");

const manifest = JSON.parse(
  await readFile(join(DIST, ".vite", "manifest.json"), "utf8"),
);

/* The entry chunk's own CSS is already linked by the template; only the
   difference a route adds needs injecting. */
const baseCss = new Set(collectCss(manifest, "index.html"));

for (const route of routes) {
  const seo = route.seo();

  const body = stripSvgContents(await render(route.path));

  const routeCss = collectCss(manifest, ROUTE_MODULES[route.path]).filter(
    (file) => !baseCss.has(file),
  );

  const head = [
    renderPageMetaHtml(seo.meta),
    renderPageJsonLdHtml(seo.jsonLd),
    ...routeCss.map(
      (file) => `<link rel="stylesheet" crossorigin href="/${file}" />`,
    ),
  ]
    .filter(Boolean)
    .join("\n    ");

  const html = stripTemplateTags(template)
    .replace("</head>", `  ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  const outPath = join(DIST, route.out);

  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, html, "utf8");

  const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
  console.log(`prerendered ${route.path.padEnd(10)} -> ${route.out.padEnd(20)} ${kb} kB`);
}
