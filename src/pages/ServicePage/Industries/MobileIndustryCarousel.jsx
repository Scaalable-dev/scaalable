import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import useRovingArrows from "./useRovingArrows";

/* Travel needed before the gesture counts as a page change, and before the
   drag is treated as horizontal at all. Below the lock distance the browser
   keeps the gesture, so vertical scrolling still works normally. */
const PAGE_THRESHOLD = 46;
const AXIS_LOCK = 8;

/* Resistance applied when dragging past the first or last page. */
const EDGE_RESISTANCE = 0.32;

const MobileIndustryCarousel = ({
  industries,
  activeIndex,
  perPage,
  columns,
  reduceMotion,
  onSelect,
  onInteracting,
}) => {
  const viewportRef = useRef(null);
  const start = useRef({ x: 0, y: 0 });

  /* Set once the gesture is committed to the horizontal axis, and again on
     release so the click it produces can be swallowed. */
  const locked = useRef(false);
  const swiped = useRef(false);

  const [page, setPage] = useState(() => Math.floor(activeIndex / perPage));
  const [offset, setOffset] = useState(0);
  const [dragging, setDragging] = useState(false);

  const pages = useMemo(() => {
    const chunks = [];

    for (let i = 0; i < industries.length; i += perPage) {
      chunks.push(industries.slice(i, i + perPage));
    }

    return chunks;
  }, [industries, perPage]);

  const lastPage = pages.length - 1;

  /* Follows the selection onto its page, and re-clamps when the column count
     changes under the narrow breakpoint. Adjusted during render rather than
     in an effect: React re-runs the component before committing, so the
     carousel never paints on the wrong page and no second frame is spent
     correcting it. A live gesture is left alone and caught up on release. */
  const [tracked, setTracked] = useState({ activeIndex, perPage });

  if (
    !dragging &&
    (tracked.activeIndex !== activeIndex || tracked.perPage !== perPage)
  ) {
    setTracked({ activeIndex, perPage });

    const target = Math.floor(activeIndex / perPage);

    if (target !== page) setPage(target);
  }

  const goToPage = (next) => setPage(Math.max(0, Math.min(lastPage, next)));

  /* Declared after goToPage so arrow keys can page along with focus. */
  const { refs, handleKeyDown } = useRovingArrows(
    industries.length,
    columns,
    (next) => goToPage(Math.floor(next / perPage)),
  );

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    start.current = { x: event.clientX, y: event.clientY };

    locked.current = false;
    swiped.current = false;

    setDragging(true);
    onInteracting(true);
  };

  const handlePointerMove = (event) => {
    if (!dragging) return;

    const dx = event.clientX - start.current.x;
    const dy = event.clientY - start.current.y;

    /* Wait until the gesture is clearly horizontal before claiming it — a
       mostly-vertical drag has to stay with the page scroll. */
    if (!locked.current) {
      if (Math.abs(dx) < AXIS_LOCK || Math.abs(dx) <= Math.abs(dy)) return;

      locked.current = true;
      swiped.current = true;

      viewportRef.current?.setPointerCapture(event.pointerId);
    }

    const width = viewportRef.current?.clientWidth || 1;
    const atEdge = (dx > 0 && page === 0) || (dx < 0 && page === lastPage);
    const travel = atEdge ? dx * EDGE_RESISTANCE : dx;

    setOffset(Math.max(-width, Math.min(width, travel)));
  };

  const endDrag = (event) => {
    if (!dragging) return;

    const dx = locked.current ? event.clientX - start.current.x : 0;

    if (viewportRef.current?.hasPointerCapture(event.pointerId)) {
      viewportRef.current.releasePointerCapture(event.pointerId);
    }

    setDragging(false);
    setOffset(0);
    onInteracting(false);

    /* Too short to be a page change — the offset reset above snaps it back. */
    if (Math.abs(dx) < PAGE_THRESHOLD) return;

    goToPage(dx < 0 ? page + 1 : page - 1);
  };

  const handlePointerCancel = () => {
    if (!dragging) return;

    setDragging(false);
    setOffset(0);
    onInteracting(false);
  };

  /* Only meaningful before the gesture locks — at that point there is no
     capture, so a pointer that leaves is one we will never hear from again.
     Once locked the pointer is captured and a horizontal drag routinely
     passes outside this short strip, which must not end the swipe. */
  const handlePointerLeave = () => {
    if (locked.current) return;

    handlePointerCancel();
  };

  /* A rotation can cross the breakpoint mid-drag and unmount this. Without
     the release, the section would stay paused for good. */
  useEffect(() => () => onInteracting(false), [onInteracting]);

  /* A swipe ends on whichever button was under the finger, which would
     otherwise register as a tap on that industry. */
  const handleClickCapture = (event) => {
    if (!swiped.current) return;

    swiped.current = false;

    event.preventDefault();
    event.stopPropagation();
  };

  const shift = reduceMotion ? 0 : offset;

  return (
    <div className="indm-car">
      <div className="indm-car__bar">
        <span className="indm-car__label">Choose an Industry</span>

        <div className="indm-car__arrows">
          <button
            type="button"
            className="indm-car__arrow"
            onClick={() => goToPage(page - 1)}
            disabled={page === 0}
            aria-label="Show previous industries"
          >
            <ChevronLeft size={18} strokeWidth={2.1} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="indm-car__arrow"
            onClick={() => goToPage(page + 1)}
            disabled={page === lastPage}
            aria-label="Show more industries"
          >
            <ChevronRight size={18} strokeWidth={2.1} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className="indm-car__viewport"
        ref={viewportRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={handlePointerCancel}
        /* A mouse released outside the viewport never delivers pointerup, so
           the drag has to be closed out here too. Touch pointers are captured
           implicitly and always come back, making this a no-op for them. */
        onPointerLeave={handlePointerLeave}
        onClickCapture={handleClickCapture}
      >
        <div
          className="indm-car__track"
          data-dragging={dragging}
          style={{
            transform: `translate3d(calc(${-page * 100}% + ${shift}px), 0, 0)`,
          }}
        >
          {pages.map((group, pageIndex) => (
            <div
              className="indm-car__page"
              key={group[0].id}
              style={{ "--columns": columns }}
            >
              {group.map((industry, slot) => {
                const index = pageIndex * perPage + slot;

                return (
                  <button
                    type="button"
                    className="indm-car__option"
                    key={industry.id}
                    ref={(el) => {
                      refs.current[index] = el;
                    }}
                    /* Off-screen pages stay out of the tab order so tabbing
                       cannot land on a button nobody can see. They are not
                       aria-hidden — a screen reader should still be able to
                       reach all fifteen industries. */
                    tabIndex={pageIndex === page ? 0 : -1}
                    aria-pressed={index === activeIndex}
                    onClick={() => onSelect(index)}
                    onKeyDown={handleKeyDown(index)}
                  >
                    {industry.name}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="indm-car__dots">
        {pages.map((group, i) => (
          <button
            type="button"
            className="indm-car__dot"
            key={group[0].id}
            data-active={i === page}
            onClick={() => goToPage(i)}
            aria-current={i === page}
            aria-label={`Industries page ${i + 1} of ${pages.length}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileIndustryCarousel;
