/* True only while scripts/prerender.mjs is rendering the static HTML in Node.

   The marquees on the home page work by rendering their content two or three
   times over and translating the strip, so the loop never shows a seam. Those
   extra copies are aria-hidden decoration — they carry nothing a crawler has
   not already read from the first copy, and prerendering all of them put
   roughly 35 kB of gzipped duplicate markup into the landing page.

   Rendering fewer copies on the server is safe here specifically because the
   app does not hydrate: main.jsx calls createRoot, which discards the static
   markup and renders the full set. There is no tree to match, so the server
   is free to emit strictly less than the client will. */
export const IS_PRERENDER = typeof window === "undefined";
