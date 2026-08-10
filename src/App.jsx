import { Suspense, lazy, useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/HomePage";
import MainLayout from "./MainLayout/MainLayout";
import ScrollToTop from "./components/ScrollToTop";

/* Reports client-side navigations to Google Analytics. The gtag config in
   index.html sends the initial page_view; after that a single-page app
   changes routes without any signal GA can see, so every navigation after
   the first is sent here. The first render is skipped precisely so that
   initial view is never counted twice. */
const TrackPageViews = () => {
  const { pathname, search } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return undefined;
    }

    /* Deferred a tick so the incoming page's own effect has set
       document.title before GA reads it. */
    const timer = setTimeout(() => {
      if (typeof window.gtag !== "function") return;

      window.gtag("event", "page_view", {
        page_path: pathname + search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname, search]);

  return null;
};

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
      <TrackPageViews />

      {/* A viewport-height spacer, not a spinner: route chunks are small and
          cached after first load, so a loader would flash more often than it
          would help — but a null fallback collapsed the page to header +
          footer for a frame, which read as a blank flash and shifted layout.
          The spacer holds the ground until the chunk lands. */}
      <Suspense fallback={<div style={{ minHeight: "100svh" }} aria-hidden="true" />}>
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
