import { useRef } from "react";

import useHeroSnap from "../../../hooks/useHeroSnap";
import Container from "../../ui/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import AgencyWorkflowVisual from "./visual";

import "./Hero.css";

/* Matches the breakpoint where the hero splits into two stacked panels. */
const STACKED_QUERY = "(max-width: 1099px)";

const Hero = () => {
  /* Shared with HeroBackground: it reads pointer position and scroll progress
     relative to this section. */
  const sectionRef = useRef(null);

  /* Two full-height panels below 1100px; the hook arms document-level snapping
     while the first one is still on screen. */
  useHeroSnap(sectionRef, STACKED_QUERY);

  return (
    <section className="hero" ref={sectionRef}>
      <HeroBackground targetRef={sectionRef} />

      <Container>
        <div className="hero__wrapper">
          <div className="hero__col hero__col--copy">
            <HeroContent />
          </div>

          <div className="hero__col hero__col--visual">
            <AgencyWorkflowVisual />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
