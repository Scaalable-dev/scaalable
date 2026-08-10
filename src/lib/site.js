/* ==========================================================================
   SITE IDENTITY

   The one place the production origin is written down. Canonical tags, Open
   Graph URLs and JSON-LD all derive from it, so moving the site — as the move
   from the bare apex to the www host was — is a one-line change here rather
   than a hunt through four page data files, the sitemap and index.html.

   No trailing slash: every path below supplies its own leading one, and a
   double slash in a canonical URL is a different URL to a crawler.
   ========================================================================== */

export const SITE_URL = "https://www.scaalable.com";

export const SITE_NAME = "Scaalable";

/* Absolute URL for a site-relative path. Search engines need canonical,
   og:url and JSON-LD @id values to be absolute — a relative path in any of
   them is either ignored or resolved against whatever host served the page,
   which is exactly the apex/www ambiguity the canonical is there to settle. */
export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/* The social card image. Referenced from index.html's static tags too — keep
   the two in step if this ever points somewhere else. */
export const SOCIAL_IMAGE = absoluteUrl("/favicon-512x512.png");

/* Stable JSON-LD node identifiers. Nodes across pages refer back to the same
   organisation and website by @id instead of repeating their full definition,
   which is how search engines know the home page's publisher and the contact
   page's subject are one business rather than three. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
