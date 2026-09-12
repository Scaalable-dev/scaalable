import { useEffect, useRef, useState } from "react";

import useHeroSnap from "../../../hooks/useHeroSnap";
import Container from "../../ui/Container";
import AuroraBackdrop from "../../ui/AuroraBackdrop";
import HeroContent from "./HeroContent";
import AgencyWorkflowVisual from "./visual";
import { IS_PRERENDER } from "../../../lib/prerender";

import "./Hero.css";

/* Matches the breakpoint where the hero splits into two stacked panels. */
const STACKED_QUERY = "(max-width: 1099px)";

const Hero = () => {
  /* Shared with AuroraBackdrop: it reads pointer position and scroll progress
     relative to this section. */
  const sectionRef = useRef(null);
  const visualRef = useRef(null);

  /* Two full-height panels below 1100px; the hook arms document-level snapping
     while the first one is still on screen. */
  useHeroSnap(sectionRef, STACKED_QUERY);

  /* On desktop (≥1100px), render visual immediately. On mobile/stacked (<1100px),
     defer mounting the heavy visual until the second panel approaches the viewport. */
  const [shouldRenderVisual, setShouldRenderVisual] = useState(() => {
    if (IS_PRERENDER || typeof window === "undefined") return false;
    return !window.matchMedia(STACKED_QUERY).matches;
  });

  useEffect(() => {
    if (shouldRenderVisual || IS_PRERENDER) return;

    const el = visualRef.current;
    if (!el) return;

    /* On mobile, when visual panel approaches viewport, mount it. */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRenderVisual(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [shouldRenderVisual]);

  return (
    <section className="hero hero-wash" ref={sectionRef}>
      <AuroraBackdrop targetRef={sectionRef} />

      <Container>
        <div className="hero__wrapper">
          <div className="hero__col hero__col--copy">
            <HeroContent />
          </div>

          <div className="hero__col hero__col--visual" ref={visualRef}>
            {/* Left out of the prerendered HTML: it is an animated diagram
                that only means anything once it is moving, and its static
                SVG was 46 kB of the landing page's markup — a third of the
                file, for nothing a crawler can read. The client renders it on
                mount exactly as before. See lib/prerender.js.
                On mobile, deferred until panel 2 approaches the fold to keep
                main thread completely clear for initial H1 paint. */}
            {!IS_PRERENDER && shouldRenderVisual && <AgencyWorkflowVisual />}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
