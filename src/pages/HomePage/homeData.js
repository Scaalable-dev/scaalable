/* ==========================================================================
   HOME PAGE DATA
   Page-level copy only. Each section owns its own content in its own
   *Data.js — this file is for what belongs to the page itself.
   ========================================================================== */

import { absoluteUrl } from "../../lib/site";
import { faqPage, webPage } from "../../lib/structuredData";
import { faqData } from "../../components/sections/FAQ/faqData";

export const HOME_PATH = "/";

const homeData = {
  meta: {
    title: "Scaalable — Build Digital Products That Grow Your Business",
    /* Built from the shared origin rather than written out: the host has
       moved once already, and a canonical naming the wrong one is worse
       than none at all. */
    canonical: absoluteUrl(HOME_PATH),
    description:
      "Scaalable helps startups and established teams ship high-performance websites, SaaS platforms, and AI-powered software designed around measurable business outcomes.",
  },

  /* Section ids in render order. Anchor links and in-page navigation resolve
     against these, so they must match the `id` on each rendered <section>. */
  sections: ["who-we-help", "services", "process", "faq"],
};

/* The route's complete SEO payload. Defined here rather than in Home.jsx
   because there are two readers: the page effect, and the build-time
   prerender that writes these tags into dist/index.html. A descriptor both
   import is the only way the static HTML and the running app cannot drift. */
export const homeSeo = () => ({
  meta: homeData.meta,

  /* The FAQ section is already on this page as accordion markup, which a
     crawler reads as prose. Declaring the same pairs as an FAQPage is what
     makes them eligible to appear as expandable questions in a result. */
  jsonLd: [
    webPage({
      path: HOME_PATH,
      title: homeData.meta.title,
      description: homeData.meta.description,
    }),
    faqPage(faqData, HOME_PATH),
  ],
});

export default homeData;
