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
   * Arms mandatory scroll snapping only while the hero still fills the viewport.
   *
   * The snap type has to sit on <html> (the scroll container). Leaving it on for
   * as long as any part of the hero was visible made leaving the second panel a
   * fight: snapping was still armed, and the nearest snap point was the panel
   * behind you until you had scrolled more than half a panel forward, so every
   * short scroll sprang back.
   *
   * The test is geometric rather than an IntersectionObserver because the
   * release point is exactly where the hero's bottom edge meets the fold — an
   * observer reports that zero-area touch inconsistently, and it is the one
   * position that has to be right.
   */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const stacked = window.matchMedia(STACKED_QUERY);
    const reduced = window.matchMedia(REDUCED_QUERY);
    const root = document.documentElement;

    let armed = false;

    const evaluate = () => {
      /* Armed only while the hero's bottom is still BELOW the fold, i.e. while
         panel two has not yet been reached. It has to release exactly at that
         resting position, not one pixel after: panel one and panel two are the
         only snap points on the page, so an armed snap sitting on panel two has
         nothing ahead to travel to and drags every subsequent scroll straight
         back. The half-pixel guards against fractional layout leaving the test
         one hair short of releasing. */
      const next =
        stacked.matches &&
        !reduced.matches &&
        section.getBoundingClientRect().bottom > window.innerHeight + 0.5;

      if (next === armed) return;

      armed = next;
      root.classList.toggle("is-hero-snapping", armed);
    };

    evaluate();

    /* Run synchronously rather than on the next frame. A programmatic jump —
       an anchor link landing further down the page — is scrolled and snapped
       within the same turn, so deferring the disarm by a frame lets the snap
       yank the reader back to the hero before the class has been removed. One
       getBoundingClientRect per scroll event is cheap enough to do inline. */
    window.addEventListener("scroll", evaluate, { passive: true });
    window.addEventListener("resize", evaluate, { passive: true });
    stacked.addEventListener("change", evaluate);
    reduced.addEventListener("change", evaluate);

    return () => {
      window.removeEventListener("scroll", evaluate);
      window.removeEventListener("resize", evaluate);
      stacked.removeEventListener("change", evaluate);
      reduced.removeEventListener("change", evaluate);
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
