import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LazyMotion } from "framer-motion";
import { Toaster } from "react-hot-toast";

import "./styles/index.css";
import App from "./App.jsx";

/* Motion features arrive via their own chunk (see motionFeatures.js) — the
   full renderer was ~30KB of the eager bundle and 100ms+ of mobile scripting
   for animations that mostly start on scroll anyway. `strict` makes any
   leftover full `motion.` component throw in development instead of silently
   dragging the whole renderer back in. */
const loadMotionFeatures = () =>
  import("./motionFeatures.js").then((module) => module.default);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LazyMotion features={loadMotionFeatures} strict>
        <App />
      </LazyMotion>
      <Toaster
        position="bottom-right"
        gutter={12}
        toastOptions={{
          duration: 4000,
          style: {
            background: "transparent",
            boxShadow: "none",
            padding: 0,
            border: "none",
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>,
);
