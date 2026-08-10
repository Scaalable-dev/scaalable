# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Build and prerendering

`npm run build` runs three steps:

1. `vite build` — the browser bundle, into `dist/`.
2. `vite build --ssr src/entry-server.jsx` — the same app compiled for Node, into
   `.prerender/`. A build artefact; never deployed.
3. `node scripts/prerender.mjs` — renders each route with that bundle and writes
   a complete static HTML file for it.

The app sets its title, canonical and JSON-LD from effects, which only run once
JavaScript has executed. Google renders pages before indexing them, but the
answer-engine crawlers `robots.txt` invites in largely do not — without the
prerender, every route served them the same near-empty shell.

Output is directory-style (`dist/about/index.html`) because Vercel checks the
filesystem before applying rewrites, so `/about` resolves to the real file.

Two things follow from the app **not** hydrating — `main.jsx` calls `createRoot`,
which discards the static markup and renders fresh in one commit:

- The server may emit strictly less than the client will. `src/lib/prerender.js`
  drops the aria-hidden marquee copies and the animated hero diagram, and
  `scripts/prerender.mjs` empties every inline `<svg>`. That is decoration a
  crawler cannot read; leaving it in tripled the landing page's HTML.
- There is no tree to match, so none of the above risks a hydration mismatch.

Adding a route means adding it to `routes` in `src/entry-server.jsx`, giving it a
`*Seo()` descriptor beside its page data, and listing its module in
`ROUTE_MODULES` in the prerender script so its stylesheet is linked.

## Deployment (Vercel)

`vercel.json` has no comments because Vercel validates it against a schema that
rejects unknown properties, `"//"` keys included. The reasoning lives here:

- **`redirects`** — the apex 301s to `www`. Every canonical, `og:url` and sitemap
  entry names the `www` host; without this redirect both hosts serve the whole
  site and the duplication the canonical is meant to settle stays live. Kept in
  the repo rather than only in the dashboard so the canonical host is recorded
  next to the tags that depend on it. Harmless if the dashboard also redirects —
  that happens at the edge first and this never matches.
- **`rewrites`** — the catch-all is evaluated only for a path matching no real
  file, so the prerendered routes never reach it. A plain static deployment does
  not serve `dist/404.html` on its own; without this, an unknown URL hit Vercel's
  own `NOT_FOUND` page instead of the site's. Note that a rewrite cannot set a
  status code, so this answers `200`. The page's `noindex` is what keeps it out
  of the index; a true `404` status would need a serverless function or Vercel's
  legacy `routes` config.
- **`trailingSlash: false`** — matches the canonical tags, which name `/services`
  rather than `/services/`.
- **`headers`** — asset filenames carry a content hash, so those URLs are
  immutable. The HTML is not hashed and now carries prerendered content and
  hashed asset URLs, so it must revalidate or a deploy would keep serving
  yesterday's markup.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
