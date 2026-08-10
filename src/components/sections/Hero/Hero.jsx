import { useRef } from "react";

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

  /* Two full-height panels below 1100px; the hook arms document-level snapping
     while the first one is still on screen. */
  useHeroSnap(sectionRef, STACKED_QUERY);

  return (
    <section className="hero hero-wash" ref={sectionRef}>
      <AuroraBackdrop targetRef={sectionRef} />

      <Container>
        <div className="hero__wrapper">
          <div className="hero__col hero__col--copy">
            <HeroContent />
          </div>

          <div className="hero__col hero__col--visual">
            {/* Left out of the prerendered HTML: it is an animated diagram
                that only means anything once it is moving, and its static
                SVG was 46 kB of the landing page's markup — a third of the
                file, for nothing a crawler can read. The client renders it on
                mount exactly as before. See lib/prerender.js. */}
            {!IS_PRERENDER && <AgencyWorkflowVisual />}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
