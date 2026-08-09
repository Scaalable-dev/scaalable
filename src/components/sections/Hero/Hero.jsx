import { useEffect, useRef } from "react";

import Container from "../../ui/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import AgencyWorkflowVisual from "./visual";

import "./Hero.css";

/* Matches the breakpoint where the hero splits into two stacked panels. */
const STACKED_QUERY = "(max-width: 1099px)";
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

const Hero = () => {
  /* Shared with HeroBackground: it reads pointer position and scroll progress
     relative to this section. */
  const sectionRef = useRef(null);

  /**
   * Turns mandatory scroll snapping on only while the hero is on screen.
   *
   * The snap type has to sit on <html> (the scroll container), but leaving it
   * there permanently would pull the reader back to the hero's panels from
   * anywhere on the page. Gating it on the hero's own visibility keeps the
   * behaviour local to the two panels it was designed for.
   */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const stacked = window.matchMedia(STACKED_QUERY);
    const reduced = window.matchMedia(REDUCED_QUERY);
    const root = document.documentElement;

    let onScreen = false;

    const apply = () => {
      root.classList.toggle(
        "is-hero-snapping",
        onScreen && stacked.matches && !reduced.matches,
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        apply();
      },
      { threshold: 0 },
    );

    observer.observe(section);

    stacked.addEventListener("change", apply);
    reduced.addEventListener("change", apply);

    return () => {
      observer.disconnect();
      stacked.removeEventListener("change", apply);
      reduced.removeEventListener("change", apply);
      root.classList.remove("is-hero-snapping");
    };
  }, []);

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
