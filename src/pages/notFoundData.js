/* ==========================================================================
   404 PAGE DATA

   Its own module rather than an export from NotFound.jsx: a file that exports
   both a component and a plain function loses fast refresh, and the other
   four routes already keep their SEO descriptor beside their data.
   ========================================================================== */

/* noindex, and the canonical cleared rather than left pointing at the last
   real page. A static host answers an unknown path with 200 and this app, so
   there is no 404 status for a crawler to read — this tag is the only thing
   telling it not to index every typo'd URL as a real page.

   The build prerenders this route to dist/404.html as well. Without that file
   the single-page fallback would answer every unknown URL with the
   prerendered home page, handing a crawler that does not run JavaScript a
   complete, indexable copy of the landing page at an address that does not
   exist.

   The empty jsonLd clears whatever the previous route described — an FAQPage
   node left over from the home page would otherwise attach to this URL. */
export const notFoundSeo = () => ({
  meta: {
    title: "Page Not Found | Scaalable",

    description:
      "That page doesn't exist. Head back to the Scaalable home page or explore our services.",

    canonical: null,

    robots: "noindex, follow",
  },

  jsonLd: [],
});
