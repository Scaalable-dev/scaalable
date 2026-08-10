/* ==========================================================================
   STRUCTURED DATA (JSON-LD)

   The site-wide Organization and WebSite nodes are written statically into
   index.html, so every crawler sees the business identity whether or not it
   executes JavaScript. What varies per route — breadcrumbs, the page type,
   the FAQ set — is injected here and replaced on the next navigation.

   One script element is reused rather than appended to. Leaving the previous
   route's node behind would describe the About page as a ContactPage the
   moment a visitor navigated between the two.

   The prerender writes the same graph into each route's static HTML through
   `renderPageJsonLdHtml`, so a crawler that never runs the app still sees it.
   ========================================================================== */

import { ORGANIZATION_ID, SITE_NAME, WEBSITE_ID, absoluteUrl } from "./site";

const SCRIPT_ID = "page-jsonld";

const graphOf = (nodes) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});

export const setPageJsonLd = (nodes) => {
  const graph = Array.isArray(nodes) ? nodes : [nodes];

  /* Nothing to describe — the 404 route — removes the element rather than
     writing an empty graph, so the previous route's nodes cannot linger and
     describe the missing page as the last real one the visitor saw. */
  if (graph.length === 0) {
    document.getElementById(SCRIPT_ID)?.remove();
    return;
  }

  let tag = document.getElementById(SCRIPT_ID);

  if (!tag) {
    tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.id = SCRIPT_ID;
    document.head.appendChild(tag);
  }

  tag.textContent = JSON.stringify(graphOf(graph));
};

/* The build-time counterpart. `</` is escaped because a closing tag sequence
   inside a script body ends the element early — a JSON string containing one
   would truncate the graph and leave markup loose in the head. */
export const renderPageJsonLdHtml = (nodes) => {
  const graph = Array.isArray(nodes) ? nodes : [nodes];

  if (graph.length === 0) return "";

  const json = JSON.stringify(graphOf(graph)).replace(/</g, "\\u003c");

  return `<script type="application/ld+json" id="${SCRIPT_ID}">${json}</script>`;
};

/* ==========================================================================
   NODE BUILDERS
   ========================================================================== */

/* The page itself. `isPartOf` and `publisher` point at the static nodes by
   @id, which is what ties a route to the business rather than leaving it an
   orphan document. */
export const webPage = ({ path, title, description, type = "WebPage" }) => ({
  "@type": type,
  "@id": `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name: title,
  description,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORGANIZATION_ID },
  publisher: { "@id": ORGANIZATION_ID },
  inLanguage: "en",
});

/* Breadcrumbs are what let a result show "scaalable.com › Services" instead
   of a bare URL. The home crumb is prepended here so no caller has to
   remember it, and positions are 1-based as the spec requires. */
export const breadcrumbs = (trail) => ({
  "@type": "BreadcrumbList",
  "@id": `${absoluteUrl(trail[trail.length - 1]?.path ?? "/")}#breadcrumbs`,
  itemListElement: [{ name: "Home", path: "/" }, ...trail].map(
    (crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    }),
  ),
});

/* Eligible for the FAQ rich result. Answers are plain strings in faqData, and
   the spec accepts either plain text or HTML in acceptedAnswer.text. */
export const faqPage = (items, path = "/") => ({
  "@type": "FAQPage",
  "@id": `${absoluteUrl(path)}#faq`,
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

/* The agency's practices as an offer catalogue hanging off the organisation.
   This is how the services page tells a search engine what is actually sold
   here, rather than leaving it to infer the list from headings. */
export const serviceCatalog = (items, path = "/services") => ({
  "@type": "OfferCatalog",
  "@id": `${absoluteUrl(path)}#catalog`,
  name: `${SITE_NAME} Services`,
  itemListElement: items.map((item, index) => ({
    "@type": "Offer",
    position: index + 1,
    itemOffered: {
      "@type": "Service",
      name: item.name,
      description: item.description,
      url: absoluteUrl(`${path}#cap-tab-${item.id}`),
      provider: { "@id": ORGANIZATION_ID },
    },
  })),
});
