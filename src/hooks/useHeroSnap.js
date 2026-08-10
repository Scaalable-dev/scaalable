import { useEffect } from "react";

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Arms mandatory scroll snapping while a two-panel hero is still on screen.
 *
 * The snap type has to sit on <html>, the scroll container. Leaving it on for
 * as long as any part of the hero is visible makes leaving the second panel a
 * fight: snapping is still armed, and the nearest snap point is the panel
 * behind you until you have scrolled more than half a panel forward, so every
 * short scroll springs back. So it is switched off the moment the hero's
 * bottom edge reaches the fold.
 *
 * The test is geometric rather than an IntersectionObserver because the
 * release point is exactly where that edge meets the fold — an observer
 * reports that zero-area touch inconsistently, and it is the one position that
 * has to be right.
 *
 * @param {React.RefObject<HTMLElement>} ref   the hero section
 * @param {string} stackedQuery  media query for the width at which the hero
 *                               splits into two stacked panels
 */
const useHeroSnap = (ref, stackedQuery) => {
  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const stacked = window.matchMedia(stackedQuery);
    const reduced = window.matchMedia(REDUCED_QUERY);
    const root = document.documentElement;

    let armed = false;

    /* Snapping is switched on by the reader, not by the page arriving.
       Turning it on at mount made the browser re-snap from wherever the scroll
       happened to be — and on a route change into this page it animated
       straight from the top down to panel two, so clicking Home or the logo
       landed a screen below the top. A scroll listener cannot stand in for
       this: ScrollToTop's own jump to the top fires one. */
    let engaged = false;

    const evaluate = () => {
      /* Armed only while the hero's bottom is still BELOW the fold, i.e. while
         panel two has not yet been reached. It has to release exactly at that
         resting position, not one pixel after: the two panels are the only
         snap points on the page, so an armed snap sitting on panel two has
         nothing ahead to travel to and drags every subsequent scroll straight
         back. The half-pixel guards against fractional layout leaving the test
         one hair short of releasing. */
      const next =
        engaged &&
        stacked.matches &&
        !reduced.matches &&
        section.getBoundingClientRect().bottom > window.innerHeight + 0.5;

      if (next === armed) return;

      armed = next;
      root.classList.toggle("is-hero-snapping", armed);
    };

    /* The gestures that mean "I am scrolling this myself". */
    const engage = () => {
      if (engaged) return;

      engaged = true;
      evaluate();
    };

    evaluate();

    window.addEventListener("wheel", engage, { passive: true });
    window.addEventListener("touchstart", engage, { passive: true });
    window.addEventListener("keydown", engage);

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
      window.removeEventListener("wheel", engage);
      window.removeEventListener("touchstart", engage);
      window.removeEventListener("keydown", engage);
      window.removeEventListener("scroll", evaluate);
      window.removeEventListener("resize", evaluate);
      stacked.removeEventListener("change", evaluate);
      reduced.removeEventListener("change", evaluate);
      root.classList.remove("is-hero-snapping");
    };
  }, [ref, stackedQuery]);
};

export default useHeroSnap;
