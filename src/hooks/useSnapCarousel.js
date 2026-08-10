import { useEffect, useRef } from "react";

/* Quiet time after the last scroll event before the carousel reads its
   position. Long enough to sit past the tail of a snap animation, so the
   selection is committed once on landing rather than repeatedly on the way. */
const SETTLE_MS = 120;

/**
 * Keeps a scroll-snap track and a selected index agreed with each other.
 *
 * The gesture itself is the browser's: `scroll-snap-type` gives momentum,
 * rubber banding at the ends and a card that tracks the finger, none of which
 * a hand-rolled drag handler reproduces convincingly on a phone. All this hook
 * does is translate between the two representations, in both directions —
 * a swipe selects, and a selection made elsewhere (a tab rail, a Next button,
 * an autoplay tick) scrolls.
 *
 * Returns a ref for the scrolling element. Its direct children are the slides,
 * one per index.
 *
 * `onInteracting` is optional and reports whether a finger is currently on the
 * track, so a caller running an autoplay timer can hold it off mid-gesture.
 */
const useSnapCarousel = ({
  activeIndex,
  reduceMotion,
  onSelect,
  onInteracting,
}) => {
  const trackRef = useRef(null);

  /* Set while a scroll this hook started is still running, so its own scroll
     events are not mistaken for the user swiping. */
  const programmatic = useRef(false);

  const interacting = useRef(false);

  /* The scroll listener is registered once and reads everything it needs from
     refs. Putting the callbacks or the index in its dependency array would
     tear the listener down and rebuild it on every render — and take the
     pending settle timer with it, so a swipe that landed while the parent
     happened to re-render would never commit. */
  const activeRef = useRef(activeIndex);
  const handlers = useRef({ onSelect, onInteracting });

  useEffect(() => {
    activeRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    handlers.current = { onSelect, onInteracting };
  }, [onSelect, onInteracting]);

  /* Selection to scroll position: a tap on the rail, a Next button, autoplay. */
  useEffect(() => {
    const track = trackRef.current;
    const slide = track?.children[activeIndex];

    if (!track || !slide) return;

    /* Already there — this change came from a swipe, and scrolling to where
       the finger has just landed would fight it. Returning before the flag is
       set also matters: a scroll that never happens produces no scroll event
       to clear it, and the next real swipe would be swallowed. */
    if (Math.abs(track.scrollLeft - slide.offsetLeft) < 2) return;

    programmatic.current = true;

    track.scrollTo({
      left: slide.offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [activeIndex, reduceMotion]);

  /* Scroll position to selection: the user swiped. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    let settle = 0;

    /* Nearest by offset rather than dividing by a slide width — the slides are
       one per screen today, but a measured answer stays correct if that ever
       becomes a peek of the next one. */
    const nearestIndex = () => {
      let best = 0;
      let bestDistance = Infinity;

      Array.from(track.children).forEach((slide, index) => {
        const distance = Math.abs(slide.offsetLeft - track.scrollLeft);

        if (distance < bestDistance) {
          bestDistance = distance;
          best = index;
        }
      });

      return best;
    };

    const releaseInteracting = () => {
      if (!interacting.current) return;

      interacting.current = false;
      handlers.current.onInteracting?.(false);
    };

    const handleScroll = () => {
      clearTimeout(settle);

      if (!programmatic.current && !interacting.current) {
        interacting.current = true;
        handlers.current.onInteracting?.(true);
      }

      settle = setTimeout(() => {
        if (programmatic.current) {
          programmatic.current = false;
          return;
        }

        releaseInteracting();

        const index = nearestIndex();

        if (index !== activeRef.current) handlers.current.onSelect(index);
      }, SETTLE_MS);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(settle);
      track.removeEventListener("scroll", handleScroll);
      releaseInteracting();
    };
  }, []);

  return trackRef;
};

export default useSnapCarousel;
