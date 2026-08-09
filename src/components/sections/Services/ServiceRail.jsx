import { useEffect, useRef } from "react";

import ServiceRailCard from "./ServiceRailCard";

/* How many copies of the list sit side by side. Two is the minimum for a
   seamless loop; three keeps the strip filled on very wide monitors, where a
   single copy is narrower than the viewport. */
const COPIES = 3;

/* Pixels per second the rail drifts on its own. */
const AUTO_SPEED = 42;

/* Movement beyond this is a drag, not a tap — used to cancel the click so a
   swipe never opens a card by accident. */
const DRAG_THRESHOLD = 6;

/* Per-frame velocity decay at 60fps, normalised for the real frame time. */
const FRICTION = 0.94;

/* Below this the fling has effectively stopped (px/s). */
const MIN_VELOCITY = 12;

/* Stillness required after a swipe before the rail resumes drifting (ms). */
const RESUME_DELAY = 1100;

/* Guards against a huge integration step after the tab has been in the
   background (seconds). */
const MAX_FRAME = 0.05;

/**
 * Continuously drifting, swipeable service rail.
 *
 * Position is a single number driven in JS rather than a CSS animation. A CSS
 * animation cannot be taken over mid-flight by a finger, and the obvious
 * alternative — a native scroll container — cannot show the cards' hover lift,
 * because a container that scrolls on one axis clips the other.
 *
 * The loop is modular arithmetic on that number: the offset is wrapped into
 * one list width, so it runs forever in both directions and a swipe backwards
 * is as valid as the drift forwards.
 */
const ServiceRail = ({ cards }) => {
  const viewportRef = useRef(null);
  const stripRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const strip = stripRef.current;
    const list = listRef.current;
    if (!viewport || !strip || !list) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    /* Distance from the start of one copy to the start of the next. */
    let step = 0;

    let offset = 0;
    let velocity = 0;

    let dragging = false;
    let activePointer = null;
    let lastX = 0;
    let lastMoveTime = 0;
    let travelled = 0;
    let swallowClick = false;

    let paused = false;
    let resumeAt = 0;
    let onScreen = true;
    let frame = 0;
    let previous = 0;

    const measure = () => {
      const gap = parseFloat(getComputedStyle(strip).columnGap) || 0;
      step = list.offsetWidth + gap;
    };

    const wrap = () => {
      /* Double modulo: JS keeps the sign of the dividend, so a backwards swipe
         would otherwise produce a negative offset and slide the strip off to
         the right. */
      if (step > 0) offset = ((offset % step) + step) % step;
    };

    const paint = () => {
      strip.style.transform = `translate3d(${-offset}px, 0, 0)`;
    };

    const tick = (time) => {
      const delta = Math.min((time - previous) / 1000, MAX_FRAME);
      previous = time;

      if (!dragging) {
        if (Math.abs(velocity) > MIN_VELOCITY) {
          /* Coasting after a fling. */
          offset += velocity * delta;
          velocity *= Math.pow(FRICTION, delta * 60);
        } else {
          velocity = 0;

          if (!paused && time >= resumeAt && !reduced.matches) {
            offset += AUTO_SPEED * delta;
          }
        }

        wrap();
        paint();
      }

      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (frame) return;
      previous = performance.now();
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    /* ------------------------------ Dragging ----------------------------- */

    /* Deliberately no setPointerCapture. Capturing retargets the compatibility
       mouse events that follow, so the `click` closing the gesture would be
       delivered to this container instead of the card — pressing a card would
       never open it. Listening on the window covers a pointer that leaves the
       rail mid-drag, which is the only thing capture was buying here.

       While the pointer is down, `dragging` also holds the drift still, so a
       tap lands on the same card it started on. */
    const onPointerDown = (event) => {
      /* Left button only; touch and pen report button 0 as well. */
      if (event.button !== 0) return;

      dragging = true;
      activePointer = event.pointerId;
      lastX = event.clientX;
      lastMoveTime = event.timeStamp;
      travelled = 0;
      velocity = 0;
      swallowClick = false;
    };

    const onPointerMove = (event) => {
      if (!dragging || event.pointerId !== activePointer) return;

      const dx = event.clientX - lastX;
      const elapsed = Math.max(event.timeStamp - lastMoveTime, 1);

      lastX = event.clientX;
      lastMoveTime = event.timeStamp;
      travelled += Math.abs(dx);

      /* Dragging left moves the strip forwards, so the offset moves against
         the finger. */
      offset -= dx;
      velocity = (-dx / elapsed) * 1000;

      if (travelled > DRAG_THRESHOLD) {
        swallowClick = true;
        viewport.dataset.dragging = "true";
      }

      wrap();
      paint();
    };

    const endDrag = (event) => {
      if (!dragging || (event && event.pointerId !== activePointer)) return;

      dragging = false;
      activePointer = null;

      delete viewport.dataset.dragging;

      /* A finger that stopped before lifting should not fling. */
      if (event && event.timeStamp - lastMoveTime > 120) velocity = 0;

      resumeAt = performance.now() + RESUME_DELAY;
    };

    /* A drag that ends on a card would otherwise open it. Capture phase, so
       this runs before the link's own handling. */
    const onClickCapture = (event) => {
      if (!swallowClick) return;

      event.preventDefault();
      event.stopPropagation();
      swallowClick = false;
    };

    /* ------------------------------ Pausing ------------------------------ */

    const onEnter = (event) => {
      /* Touch fires a synthetic enter on tap; only a real hover should hold
         the rail still. */
      if (event.pointerType === "mouse") paused = true;
    };

    const onLeave = (event) => {
      if (event.pointerType === "mouse") paused = false;
    };

    const onFocusIn = (event) => {
      paused = true;

      /* Tabbing reaches cards that may be off to one side; bring the focused
         one fully into view rather than leaving focus on something invisible. */
      const card = event.target.closest?.(".srail__card");
      if (!card) return;

      const cardBox = card.getBoundingClientRect();
      const railBox = viewport.getBoundingClientRect();
      const margin = 24;

      if (cardBox.left < railBox.left + margin) {
        offset -= railBox.left + margin - cardBox.left;
      } else if (cardBox.right > railBox.right - margin) {
        offset += cardBox.right - (railBox.right - margin);
      } else {
        return;
      }

      wrap();
      paint();
    };

    const onFocusOut = (event) => {
      if (viewport.contains(event.relatedTarget)) return;
      paused = false;
    };

    /* ---------------------------- Observers ------------------------------ */

    const resizeObserver = new ResizeObserver(() => {
      measure();
      wrap();
      paint();
    });
    resizeObserver.observe(strip);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;

        if (onScreen && !document.hidden) start();
        else stop();
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(viewport);

    const onVisibility = () => {
      if (document.hidden || !onScreen) stop();
      else start();
    };

    const preventNativeDrag = (event) => event.preventDefault();

    measure();
    paint();
    start();

    viewport.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
    viewport.addEventListener("click", onClickCapture, true);
    viewport.addEventListener("dragstart", preventNativeDrag);
    viewport.addEventListener("pointerenter", onEnter);
    viewport.addEventListener("pointerleave", onLeave);
    viewport.addEventListener("focusin", onFocusIn);
    viewport.addEventListener("focusout", onFocusOut);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      viewport.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
      viewport.removeEventListener("click", onClickCapture, true);
      viewport.removeEventListener("dragstart", preventNativeDrag);
      viewport.removeEventListener("pointerenter", onEnter);
      viewport.removeEventListener("pointerleave", onLeave);
      viewport.removeEventListener("focusin", onFocusIn);
      viewport.removeEventListener("focusout", onFocusOut);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="srail">
      <div className="srail__viewport" ref={viewportRef}>
        <div className="srail__strip" ref={stripRef}>
          {Array.from({ length: COPIES }, (_, copy) => (
            <ul
              className="srail__track"
              key={copy}
              ref={copy === 0 ? listRef : undefined}
              /* Only the first copy is real content; the rest exist to fill
                 the loop and would otherwise be read out three times. */
              aria-hidden={copy === 0 ? undefined : "true"}
            >
              {cards.map((card) => (
                <ServiceRailCard
                  key={`${card.id}-${copy}`}
                  card={card}
                  duplicate={copy !== 0}
                />
              ))}
            </ul>
          ))}
        </div>
      </div>

      <p className="srail__hint">Drag or swipe to explore</p>
    </div>
  );
};

export default ServiceRail;
