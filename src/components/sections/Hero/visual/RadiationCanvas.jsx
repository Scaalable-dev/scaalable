import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

import RadiationEngine from "./radiationEngine";
import {
  STACKED_TOP_HALF_WIDTH_RATIO,
  TOP_HALF_WIDTH_RATIO,
} from "./streamGeometry";

const MOBILE_QUERY = "(max-width: 768px)";

/* Mirrors the breakpoint in AgencyWorkflowVisual.css where the cards stop
   flanking the stream and stack on top of it. */
const STACKED_QUERY = "(max-width: 991px)";

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

const ratioFor = (stacked) =>
  stacked ? STACKED_TOP_HALF_WIDTH_RATIO : TOP_HALF_WIDTH_RATIO;

/**
 * Owns the <canvas> and its engine.
 *
 * The parent talks to it imperatively (`surge`, `pulse`, `setPointer`, …) so
 * cursor movement and animation never pass through React state — the component
 * renders once and then stays out of the way for the lifetime of the visual.
 */
const RadiationCanvas = forwardRef(function RadiationCanvas(
  { className = "", label },
  ref,
) {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const pendingOpeningRef = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      setOpening: (opening) => {
        pendingOpeningRef.current = opening;
        engineRef.current?.setOpening(opening);
      },
      setPointer: (x, y) => engineRef.current?.setPointer(x, y),
      clearPointer: () => engineRef.current?.clearPointer(),
      setIntensity: (value) => engineRef.current?.setIntensity(value),
      setAccent: (key) => engineRef.current?.setAccent(key),
      surge: (strength) => engineRef.current?.surge(strength),
      pulse: (x, y) => engineRef.current?.pulse(x, y),
    }),
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    let frameId = 0;
    let resizeObserver;
    let intersectionObserver;
    let reducedQuery;
    let mobileQuery;
    let stackedQuery;
    let handleVisibility;
    let handleReducedChange;
    let handleMobileChange;
    let handleStackedChange;

    frameId = requestAnimationFrame(() => {
      reducedQuery = window.matchMedia(REDUCED_QUERY);
      mobileQuery = window.matchMedia(MOBILE_QUERY);
      stackedQuery = window.matchMedia(STACKED_QUERY);

      /* Denser than a pure perf floor would suggest: stacked, the stream is the
         backdrop the cards sit on, and at 0.45 it read as empty space. */
      const engine = new RadiationEngine(canvas, {
        density: mobileQuery.matches ? 0.62 : 1,
      });

      engineRef.current = engine;

      if (pendingOpeningRef.current) {
        engine.setOpening(pendingOpeningRef.current);
      }

      engine.setTopWidthRatio(ratioFor(stackedQuery.matches));

      const measure = () => {
        const rect = host.getBoundingClientRect();
        engine.resize(rect.width, rect.height);
      };

      measure();
      engine.setReducedMotion(reducedQuery.matches);

      resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(host);

      /* Off-screen work is wasted work: the loop only runs while the visual is
         actually in view and the tab is focused.

         Both conditions are tracked, because an IntersectionObserver only fires
         on a threshold crossing. Resuming on tab-focus without consulting the
         stored in-view flag would restart a full-rate simulation for a hero the
         visitor has already scrolled past, and no further IO callback would ever
         arrive to stop it again. */
      let inView = true;

      handleVisibility = () => engine.setVisible(inView && !document.hidden);

      intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
          handleVisibility();
        },
        { threshold: 0 },
      );
      intersectionObserver.observe(host);

      handleReducedChange = (event) => engine.setReducedMotion(event.matches);
      handleMobileChange = (event) => engine.setDensity(event.matches ? 0.62 : 1);
      handleStackedChange = (event) =>
        engine.setTopWidthRatio(ratioFor(event.matches));

      document.addEventListener("visibilitychange", handleVisibility);
      reducedQuery.addEventListener("change", handleReducedChange);
      mobileQuery.addEventListener("change", handleMobileChange);
      stackedQuery.addEventListener("change", handleStackedChange);
    });

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      if (handleVisibility) {
        document.removeEventListener("visibilitychange", handleVisibility);
      }
      reducedQuery?.removeEventListener("change", handleReducedChange);
      mobileQuery?.removeEventListener("change", handleMobileChange);
      stackedQuery?.removeEventListener("change", handleStackedChange);

      engineRef.current?.destroy();
      engineRef.current = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`radiation-canvas ${className}`.trim()}
      role="img"
      aria-label={label}
    />
  );
});

export default RadiationCanvas;
