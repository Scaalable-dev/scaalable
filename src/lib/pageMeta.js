/* Applies a page's document metadata. One helper rather than the same DOM
   lookups pasted into every page effect — no Helmet provider is mounted, so
   the pages own their own tags.

   Two consumers read from here: the running app, which writes the tags into
   the live document, and the build-time prerender, which serialises the same
   set into each route's static HTML. Both go through `pageMetaTags` below, so
   a tag cannot be added to one path and forgotten in the other. */

import { setPageJsonLd } from "./structuredData";

const DEFAULT_ROBOTS = "index, follow";

/* The tag set for a page, as data. Title and canonical are not meta elements
   and are handled separately by each consumer; everything else is here. */
const pageMetaTags = ({ title, description, canonical, robots }) => {
  const tags = [];

  if (title) {
    /* Mirrored onto the social tags as well. Scrapers do not run JavaScript,
       so they still read index.html's site-level values in the app — but the
       prerendered HTML carries these per route, which is the whole reason a
       shared card no longer shows the home page's title for /services. */
    tags.push(["property", "og:title", title]);
    tags.push(["name", "twitter:title", title]);
  }

  if (description) {
    tags.push(["name", "description", description]);
    tags.push(["property", "og:description", description]);
    tags.push(["name", "twitter:description", description]);
  }

  if (canonical) tags.push(["property", "og:url", canonical]);

  tags.push(["name", "robots", robots || DEFAULT_ROBOTS]);

  return tags;
};

/* ==========================================================================
   RUNTIME — writes into the live document
   ========================================================================== */

/* Creates the tag when the document does not already carry it, so a page can
   introduce metadata index.html never declared. */
const upsertMeta = (attribute, name, content) => {
  let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

export const setPageMeta = (meta) => {
  const { title, canonical } = meta;

  if (title) document.title = title;

  /* An explicit null clears the tag instead of setting one — the 404 route
     needs that. A canonical is the one tag here that actively misleads when
     it outlives its page: left in place, it would tell a crawler the missing
     URL and the last real page it saw are the same document. */
  if (canonical === null) {
    document.head.querySelector('link[rel="canonical"]')?.remove();
    document.head.querySelector('meta[property="og:url"]')?.remove();
  } else if (canonical) {
    let tag = document.head.querySelector('link[rel="canonical"]');

    if (!tag) {
      tag = document.createElement("link");
      tag.setAttribute("rel", "canonical");
      document.head.appendChild(tag);
    }

    tag.setAttribute("href", canonical);
  }

  /* `robots` is written on every navigation rather than only where a page asks
     for it: the 404 route sets noindex, and in a single-page app nothing
     clears a tag the previous route left behind — without this reset that
     noindex would follow the visitor onto every page opened afterwards. */
  pageMetaTags(meta).forEach((tag) => upsertMeta(...tag));
};

/* Applies a route's whole SEO descriptor — the `*Seo()` object each page's
   data module exports. The prerender consumes the same descriptor through
   renderPageMetaHtml and renderPageJsonLdHtml. */
export const applyPageSeo = ({ meta, jsonLd }) => {
  setPageMeta(meta);
  setPageJsonLd(jsonLd ?? []);
};

/* ==========================================================================
   BUILD — serialises the same set for the prerendered HTML
   ========================================================================== */

/* Only the four characters that can break out of an attribute or a text node.
   Page metadata is authored in this repo, not user input, but a stray
   ampersand in a title is enough to produce invalid markup. */
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const renderPageMetaHtml = (meta) => {
  const { title, canonical } = meta;

  const lines = [];

  if (title) lines.push(`<title>${escapeHtml(title)}</title>`);

  if (canonical) {
    lines.push(`<link rel="canonical" href="${escapeHtml(canonical)}" />`);
  }

  pageMetaTags(meta).forEach(([attribute, name, content]) => {
    lines.push(
      `<meta ${attribute}="${name}" content="${escapeHtml(content)}" />`,
    );
  });

  return lines.join("\n    ");
};
