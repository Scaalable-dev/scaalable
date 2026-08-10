/* Framer Motion's feature bundle, loaded through LazyMotion (see main.jsx).
   A dynamic import so Vite splits it out of the eager bundle — the m.
   components render immediately and pick the features up as they arrive.

   domMax rather than domAnimation because the navbar indicator animates via
   layoutId, which is a layout animation. */
export { domMax as default } from "framer-motion";
