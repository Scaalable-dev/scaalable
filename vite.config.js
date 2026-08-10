import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // scripts/prerender.mjs reads dist/.vite/manifest.json to find which CSS
    // and JS chunk each prerendered route needs. Without it the static HTML
    // for /about would carry the global stylesheet only, and the page would
    // sit unstyled until its lazy chunk pulled its own CSS in.
    manifest: true,
  },

  ssr: {
    // The prerender runs the SSR bundle in plain Node, which cannot resolve
    // the bare CSS imports some dependencies ship (`swiper/css` and friends).
    // Bundling everything hands those to Vite instead, which knows what to do
    // with them. Build-time only — this has no bearing on the browser bundle.
    noExternal: true,
  },
})
