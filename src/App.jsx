import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import MainLayout from "./MainLayout/MainLayout";
import ScrollToTop from "./components/ScrollToTop";

/* Home stays eager — it is the landing page, and lazy-loading it would put a
   network round-trip in front of the first paint. The other routes load on
   navigation, which moves their code (About's Swiper carousel most of all)
   out of the initial bundle. */
const About = lazy(() => import("./pages/AboutPage/About"));
const Contact = lazy(() => import("./pages/ContactPage"));
const Services = lazy(() => import("./pages/ServicePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <ScrollToTop />

      {/* Null fallback: route chunks are small and cached after first load,
          so a spinner would flash more often than it would help. */}
      <Suspense fallback={null}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />

            {/* Inside MainLayout on purpose: a dead link should still land
                on a page with the site's own header and footer, so the way
                back is always in reach. */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
