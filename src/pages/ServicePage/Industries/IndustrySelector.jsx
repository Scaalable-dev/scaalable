import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import useRovingArrows from "./useRovingArrows";

/* One visual row, so Up and Down step by a single button like Left and Right. */
const ROW_COLUMNS = 1;

/* Travel before a pointer drag counts as a swipe rather than a click. */
const DRAG_THRESHOLD = 6;

/* Breathing room kept between a button and the viewport edge whenever the
   rail scrolls itself to follow the selection or the focus. */
const EDGE_MARGIN = 56;

/* Share of the visible width one arrow press moves. Less than a full page so
   the button that was at the edge stays on screen as an anchor. */
const NUDGE = 0.8;

/* Quiet time after the last scroll event before the rail counts as idle
   again. Long enough to cover the gap between a flick and its momentum. */
const IDLE_MS = 500;

const smoothness = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

/* Scrolls only far enough to clear the edge margin. Centring every selection
   would swing the whole rail on each idle advance, which reads as the
   interface moving on its own rather than following along. */
const reveal = (viewport, button) => {
  if (!viewport || !button) return;

  const left = button.offsetLeft - viewport.scrollLeft;
  const right = left + button.offsetWidth;

  let delta = 0;

  if (left < EDGE_MARGIN) delta = left - EDGE_MARGIN;
  else if (right > viewport.clientWidth - EDGE_MARGIN) {
    delta = right - (viewport.clientWidth - EDGE_MARGIN);
  }

  if (!delta) return;

  viewport.scrollBy({ left: delta, behavior: smoothness() });
};

const IndustrySelector = ({
  industries,
  activeIndex,
  onSelect,
  onInteracting,
}) => {
  const { refs, handleKeyDown } = useRovingArrows(
    industries.length,
    ROW_COLUMNS,
  );

  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [box, setBox] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [edges, setEdges] = useState({ start: false, end: false });

  /* Live gesture state. A ref rather than state: it changes on every pointer
     move and none of it belongs in a render. */
  const drag = useRef(null);

  /* Set on release so the click the drag lands on can be swallowed. */
  const swiped = useRef(false);

  const idle = useRef(null);

  /* Which ends of the rail have more to show. Drives the edge fades and the
     arrows, so neither promises scrolling that cannot happen. */
  const syncEdges = useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const max = viewport.scrollWidth - viewport.clientWidth;

    const start = viewport.scrollLeft > 1;
    const end = viewport.scrollLeft < max - 1;

    /* Scroll fires every frame of a drag. Returning the same object where
       nothing changed lets React drop the re-render entirely. */
    setEdges((prev) =>
      prev.start === start && prev.end === end ? prev : { start, end },
    );
  }, []);

  /* Holds the section's idle advance off while the rail is being moved. On a
     touch screen the gesture is the browser's, so there is no drag state to
     read — the scroll going quiet is the only signal that it is over. */
  const markInteracting = useCallback(() => {
    if (!onInteracting) return;

    onInteracting(true);

    clearTimeout(idle.current);
    idle.current = setTimeout(() => onInteracting(false), IDLE_MS);
  }, [onInteracting]);

  const handleScroll = useCallback(() => {
    syncEdges();
    markInteracting();
  }, [syncEdges, markInteracting]);

  /* A rotation can cross the breakpoint and unmount this mid-gesture. Without
     the release the section would stay paused for good. */
  useEffect(
    () => () => {
      clearTimeout(idle.current);
      onInteracting?.(false);
    },
    [onInteracting],
  );

  /* One outline travels between buttons instead of each button drawing its
     own. It has to be measured — CSS cannot know where a flex item landed —
     so the active button's offset box is read after layout and fed to a
     transform. It lives inside the track, so it scrolls with the buttons and
     needs no correction for scrollLeft. The observer keeps it aligned through
     resizes and font swaps, which is when the rail actually reflows. */
  useLayoutEffect(() => {
    const measure = () => {
      const button = refs.current[activeIndex];

      if (button) {
        setBox({
          x: button.offsetLeft,
          y: button.offsetTop,
          width: button.offsetWidth,
          height: button.offsetHeight,
        });
      }

      syncEdges();
    };

    measure();

    const viewport = viewportRef.current;

    /* The section advances on its own, so the rail follows the selection —
       unless a gesture is in flight, which would fight the finger. */
    if (!drag.current) reveal(viewport, refs.current[activeIndex]);

    const track = trackRef.current;
    if (!track) return undefined;

    const observer = new ResizeObserver(measure);
    observer.observe(track);

    if (viewport) observer.observe(viewport);

    return () => observer.disconnect();
  }, [activeIndex, refs, syncEdges]);

  const nudge = (direction) => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    viewport.scrollBy({
      left: direction * viewport.clientWidth * NUDGE,
      behavior: smoothness(),
    });
  };

  const handlePointerDown = (event) => {
    markInteracting();

    /* Touch already scrolls the rail natively, with momentum no script
       matches. Only mouse and pen get the drag. */
    if (event.pointerType === "touch") return;
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const viewport = viewportRef.current;
    if (!viewport) return;

    drag.current = {
      id: event.pointerId,
      x: event.clientX,
      scrollLeft: viewport.scrollLeft,
      moved: false,
    };
  };

  const handlePointerMove = (event) => {
    const state = drag.current;
    const viewport = viewportRef.current;

    if (!state || state.id !== event.pointerId || !viewport) return;

    const dx = event.clientX - state.x;

    /* Below the threshold the gesture is still a click in progress — claiming
       the pointer any earlier would make every button feel unreliable. */
    if (!state.moved) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return;

      state.moved = true;

      setDragging(true);
      viewport.setPointerCapture(event.pointerId);
    }

    viewport.scrollLeft = state.scrollLeft - dx;
  };

  const endDrag = (event) => {
    const state = drag.current;

    if (!state || state.id !== event.pointerId) return;

    const viewport = viewportRef.current;

    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    swiped.current = state.moved;
    drag.current = null;

    setDragging(false);
  };

  /* A drag ends over whichever button is under the cursor, which would
     otherwise register as a pick. */
  const handleClickCapture = (event) => {
    if (!swiped.current) return;

    swiped.current = false;

    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      className="ind-pick"
      role="group"
      aria-label="Choose an industry"
      data-overflow-start={edges.start}
      data-overflow-end={edges.end}
    >
      <button
        type="button"
        className="ind-pick__nav"
        data-side="start"
        /* Every industry is reachable by Tab and by arrow key, so these are a
           pointer convenience only and stay out of both trees. */
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => nudge(-1)}
      >
        <ChevronLeft size={18} strokeWidth={2.1} />
      </button>

      <div
        className="ind-pick__viewport"
        ref={viewportRef}
        data-dragging={dragging}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={handleClickCapture}
      >
        <div className="ind-pick__track" ref={trackRef}>
          <span
            className="ind-pick__indicator"
            aria-hidden="true"
            style={
              box
                ? {
                    width: `${box.width}px`,
                    height: `${box.height}px`,
                    transform: `translate(${box.x}px, ${box.y}px)`,
                    opacity: 1,
                  }
                : undefined
            }
          />

          {industries.map((industry, i) => (
            <button
              type="button"
              className="ind-pick__button"
              key={industry.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              aria-pressed={i === activeIndex}
              onClick={() => onSelect(i)}
              onKeyDown={handleKeyDown(i)}
              /* Covers Tab and the arrow keys in one place: whatever gains
                 focus is scrolled clear of the fades. */
              onFocus={() => reveal(viewportRef.current, refs.current[i])}
            >
              <span className="ind-pick__shimmer" aria-hidden="true" />

              {industry.name}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="ind-pick__nav"
        data-side="end"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => nudge(1)}
      >
        <ChevronRight size={18} strokeWidth={2.1} />
      </button>
    </div>
  );
};

export default IndustrySelector;
