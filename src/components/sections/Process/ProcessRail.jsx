import { useEffect, useRef, useState } from "react";

import ProcessPoint from "./ProcessPoint";

/* Travel before a mouse drag is treated as a swipe rather than a click. */
const DRAG_SLOP = 6;

const ProcessRail = ({ stages, activeIndex, reduceMotion, onSelect }) => {
  const railRef = useRef(null);
  const pointRefs = useRef([]);

  /* Mouse-drag bookkeeping. Touch is left to the browser: the rail declares
     touch-action: pan-x, so native panning and scroll snapping already do the
     right thing and would only fight a hand-rolled implementation. */
  const drag = useRef({ active: false, x: 0, scroll: 0 });
  const swiped = useRef(false);

  /* Drives the edge fades. Kept honest rather than always-on, so the rail
     shows an affordance only when there is really more to scroll to. */
  const [edges, setEdges] = useState({
    scrollable: false,
    atStart: true,
    atEnd: false,
  });

  /* Mandatory snapping re-snaps after every programmatic scroll, which turns
     a mouse drag into a series of jumps. Suspending it for the gesture lets
     the rail follow the cursor, then snap once on release. */
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;

    let frame = 0;

    const measure = () => {
      const max = rail.scrollWidth - rail.clientWidth;

      const next = {
        scrollable: max > 1,
        atStart: rail.scrollLeft <= 1,
        atEnd: rail.scrollLeft >= max - 1,
      };

      setEdges((prev) =>
        prev.scrollable === next.scrollable &&
        prev.atStart === next.atStart &&
        prev.atEnd === next.atEnd
          ? prev
          : next,
      );
    };

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    /* Fires once on observe, which is also how the initial reading is taken —
       no measurement pass in the effect body. */
    const observer = new ResizeObserver(measure);
    observer.observe(rail);

    rail.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      rail.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Centres the selected point, but only while the rail actually scrolls — on
     a full-width desktop rail there is nothing to centre.

     The rail is scrolled directly rather than through scrollIntoView. That API
     walks every scrollable ancestor, and `block: "nearest"` only means "do not
     move it if it is already visible" — with the section still below the fold
     on mount it is not, so the document scrolled down to reveal it. Landing on
     the home page from a link therefore jumped straight to the process rail.
     Setting scrollLeft touches this element and nothing else. */
  useEffect(() => {
    const rail = railRef.current;
    const point = pointRefs.current[activeIndex];

    if (!rail || !point) return;
    if (rail.scrollWidth - rail.clientWidth <= 1) return;

    rail.scrollTo({
      left: point.offsetLeft + point.offsetWidth / 2 - rail.clientWidth / 2,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [activeIndex, reduceMotion]);

  const handleKeyDown = (index) => (event) => {
    const last = stages.length - 1;
    let next = null;

    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;

    if (next === null) return;

    event.preventDefault();

    onSelect(next);
    pointRefs.current[next]?.focus();
  };

  const handlePointerDown = (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    const rail = railRef.current;
    if (!rail) return;

    drag.current = {
      active: true,
      x: event.clientX,
      scroll: rail.scrollLeft,
    };

    swiped.current = false;

    setDragging(true);
  };

  const handlePointerMove = (event) => {
    if (!drag.current.active) return;

    const rail = railRef.current;
    if (!rail) return;

    const dx = event.clientX - drag.current.x;

    if (!swiped.current) {
      if (Math.abs(dx) < DRAG_SLOP) return;

      swiped.current = true;
      rail.setPointerCapture(event.pointerId);
    }

    rail.scrollLeft = drag.current.scroll - dx;
  };

  const endDrag = (event) => {
    if (!drag.current.active) return;

    drag.current.active = false;
    setDragging(false);

    const rail = railRef.current;

    if (rail?.hasPointerCapture(event.pointerId)) {
      rail.releasePointerCapture(event.pointerId);
    }
  };

  /* Only meaningful before the drag passes the slop threshold — at that point
     there is no capture, so a cursor that leaves is one whose release we will
     never hear about, and the rail would keep following it. */
  const handlePointerLeave = (event) => {
    if (swiped.current) return;

    endDrag(event);
  };

  /* A drag finishes over whichever point sat under the cursor, which would
     otherwise read as a click on that stage. */
  const handleClickCapture = (event) => {
    if (!swiped.current) return;

    swiped.current = false;

    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      className="proc-rail"
      data-scrollable={edges.scrollable}
      data-at-start={edges.atStart}
      data-at-end={edges.atEnd}
    >
      <div
        className="proc-rail__track"
        ref={railRef}
        data-dragging={dragging}
        role="group"
        aria-label="Delivery stages"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={handlePointerLeave}
        onClickCapture={handleClickCapture}
      >
        {/* The count drives the row's minimum width, so the rail keeps every
            stage on one line and starts scrolling — rather than wrapping —
            whatever the data length is. */}
        <div
          className="proc-rail__points"
          style={{ "--count": stages.length }}
        >
          {stages.map((stage, i) => (
            <ProcessPoint
              key={stage.number}
              stage={stage}
              index={i}
              state={
                i < activeIndex ? "done" : i === activeIndex ? "active" : "todo"
              }
              pointRef={(el) => {
                pointRefs.current[i] = el;
              }}
              onSelect={onSelect}
              onKeyDown={handleKeyDown(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessRail;
