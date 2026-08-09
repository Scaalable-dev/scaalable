import { useCallback, useEffect, useRef, useState } from "react";

import EnergyShockwave from "./EnergyShockwave";
import ProcessingBox from "./ProcessingBox";
import RadiationCanvas from "./RadiationCanvas";
import WorkflowCard from "./WorkflowCard";
import { getStageMessage, workflowStages } from "./workflowData";
import { clamp, funnelHalfWidthAt } from "./streamGeometry";

import "./AgencyWorkflowVisual.css";

const CANVAS_LABEL =
  "Animated diagram: a stream of client requirements, business information and technical inputs flows down into a processing unit, where it is turned into a finished digital product.";

const PULSE_MS = 800;
const SHOCKWAVE_MS = 1100;

/* Gap between a card's inner edge and where its connector meets the stream. */
const CONNECTOR_MIN = 16;

/* Box stays narrow enough that the flanking cards keep their own lane, and that
   the stream — not the box — reads as the subject of the visual. */
const BOX_WIDTH_RATIO = 0.3;
const CARD_WIDTH_RATIO = 0.28;

/* Only used if the box has not been laid out yet on the very first measure. */
const BOX_TOP_FALLBACK = 0.72;

/* Extra height a card gains when its ACTIVE row appears, and the peak lift of
   the float animation. Both eat into the clearance a card needs above it. */
const CARD_SELECT_GROWTH = 30;
const CARD_FLOAT_LIFT = 8;

const AgencyWorkflowVisual = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [message, setMessage] = useState("");
  const [isPulsing, setIsPulsing] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);
  const [shockwaves, setShockwaves] = useState([]);

  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const canvasApi = useRef(null);
  const boxRef = useRef(null);
  const openingRef = useRef(null);
  const lensRef = useRef(null);
  const cardsRef = useRef(null);

  /* Everything the pointer drives lives in refs and is written straight to the
     DOM. Cursor movement must never re-render this tree. */
  const motion = useRef({
    tx: 0,
    ty: 0,
    cx: 0,
    cy: 0,
    rx: 0,
    ry: 0,
    targetRx: 0,
    targetRy: 0,
    inside: false,
    last: 0,
    raf: 0,
    reduced: false,
  });

  const opening = useRef({ x: 0, y: 0 });
  const vars = useRef({ box: 0, card: 0 });
  const timers = useRef([]);
  const pulseTimer = useRef(0);
  const shockwaveId = useRef(0);

  /* Mirrors `selectedId` so hover handlers can fall back to the selected stage
     without taking the state as a dependency. */
  const selectedStage = useRef(null);

  const track = useCallback((id) => {
    timers.current.push(id);
  }, []);

  useEffect(() => {
    const pending = timers.current;
    const pulse = pulseTimer;

    return () => {
      pending.forEach(clearTimeout);
      clearTimeout(pulse.current);
    };
  }, []);

  /* --------------------------------------------------------------- layout */

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage) return;

    motion.current.reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const measure = () => {
      const stageRect = stage.getBoundingClientRect();
      const width = stageRect.width;
      const height = stageRect.height;
      if (!width || !height) return;

      /* Box and card widths are resolved here, not in CSS, because the funnel
         maths below needs the same numbers. */
      /* Floor kept low so a narrow stage gets a proportionally small box — at a
         150px minimum the box swallowed a phone-width stage and made every card
         beside it look undersized. */
      const boxWidth = Math.round(clamp(width * BOX_WIDTH_RATIO, 104, 208));
      const cardWidth = Math.round(clamp(width * CARD_WIDTH_RATIO, 132, 176));

      /* On the root, not the stage: below the split the card column is a
         sibling of the stage and reserves its bottom padding from this value,
         so it has to inherit it too.

         Written only on change. On mobile the stage is sized BY the card
         column, whose padding depends on --pbox-width — rewriting it every
         pass would feed the ResizeObserver its own output. */
      if (vars.current.box !== boxWidth) {
        root.style.setProperty("--pbox-width", `${boxWidth}px`);
        vars.current.box = boxWidth;
      }

      if (vars.current.card !== cardWidth) {
        root.style.setProperty("--wf-card-w", `${cardWidth}px`);
        vars.current.card = cardWidth;
      }

      /* Read back after the write so the opening reflects the new box width. */
      const openingRect = openingRef.current?.getBoundingClientRect();
      if (!openingRect || !openingRect.width) return;

      const openingX = openingRect.left - stageRect.left + openingRect.width / 2;
      const openingY = openingRect.top - stageRect.top + openingRect.height / 2;
      const openingHalfWidth = Math.max(openingRect.width / 2, 12);

      opening.current = { x: openingX, y: openingY };

      canvasApi.current?.setOpening({
        x: openingX,
        y: openingY,
        halfWidth: openingHalfWidth,
      });

      /* Cards are laid out between the top of the stream and the top of the box,
         both measured. Anchoring them to fixed percentages of the stage instead
         drops the last cards onto the box as soon as the viewport is short. */
      const boxRect = boxRef.current?.getBoundingClientRect();
      const cardHeight =
        cardsRef.current?.firstElementChild?.offsetHeight || 74;

      const boxTop = boxRect
        ? boxRect.top - stageRect.top
        : height * BOX_TOP_FALLBACK;

      /* `cardHeight` is the resting height. A selected card grows by the ACTIVE
         row, and because cards are centred on their anchor, half that growth
         travels upward — on top of the float animation's lift. Without the
         allowance the first card's top edge goes negative when selected and the
         stage clips it. */
      const halfSpan = cardHeight / 2 + CARD_SELECT_GROWTH / 2;

      const bandTop = Math.max(height * 0.05, halfSpan + CARD_FLOAT_LIFT + 6);
      const bandBottom = Math.max(bandTop, boxTop - halfSpan - 10);

      for (const item of workflowStages) {
        const cardY = bandTop + item.anchor * (bandBottom - bandTop);

        root.style.setProperty(`--wf-top-${item.step}`, `${Math.round(cardY)}px`);

        /* Each connector stops exactly at the funnel edge for its own height. */
        const funnelHalf = funnelHalfWidthAt({
          y: cardY,
          width,
          height,
          openingY,
          openingHalfWidth,
        });

        const length = Math.max(
          CONNECTOR_MIN,
          Math.round(width / 2 - funnelHalf - cardWidth),
        );

        root.style.setProperty(`--wf-conn-${item.step}`, `${length}px`);
      }
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(stage);

    return () => observer.disconnect();
  }, []);

  /* -------------------------------------------------------------- pointer */

  /* The lerp loop lives in an effect so the frame callback can recurse into
     itself directly. It idles: once the pointer has left and the tilt has
     unwound, the loop stops rather than burning a frame forever. */
  const startMotionRef = useRef(() => {});

  useEffect(() => {
    const state = motion.current;

    const frame = (now) => {
      const dt = Math.min((now - state.last) / 1000, 0.05);
      state.last = now;

      const ease = (current, target, tau) =>
        current + (target - current) * (1 - Math.exp(-dt / tau));

      state.cx = ease(state.cx, state.tx, 0.05);
      state.cy = ease(state.cy, state.ty, 0.05);
      state.rx = ease(state.rx, state.targetRx, 0.12);
      state.ry = ease(state.ry, state.targetRy, 0.12);

      if (lensRef.current) {
        lensRef.current.style.transform = `translate3d(${state.cx}px, ${state.cy}px, 0) translate(-50%, -50%)`;
      }

      if (boxRef.current) {
        boxRef.current.style.setProperty("--pbox-rx", `${state.rx.toFixed(3)}deg`);
        boxRef.current.style.setProperty("--pbox-ry", `${state.ry.toFixed(3)}deg`);
      }

      const settled =
        !state.inside &&
        Math.abs(state.rx - state.targetRx) < 0.005 &&
        Math.abs(state.ry - state.targetRy) < 0.005;

      if (settled) {
        state.raf = 0;
        return;
      }

      state.raf = requestAnimationFrame(frame);
    };

    startMotionRef.current = () => {
      if (state.raf || state.reduced) return;

      state.last = performance.now();
      state.raf = requestAnimationFrame(frame);
    };

    return () => {
      if (state.raf) cancelAnimationFrame(state.raf);
      state.raf = 0;
    };
  }, []);

  const startMotion = useCallback(() => startMotionRef.current(), []);

  const handlePointerMove = useCallback(
    (event) => {
      /* Touch drives taps only — no lens, no lean. */
      if (event.pointerType === "touch") return;

      const stage = stageRef.current;
      if (!stage) return;

      const rect = stage.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const state = motion.current;
      state.tx = x;
      state.ty = y;

      if (!state.inside) {
        /* Jump the lens to the entry point rather than sweeping it in from
           wherever it was left. */
        state.cx = x;
        state.cy = y;
        state.inside = true;
        lensRef.current?.classList.add("is-visible");
      }

      /* Tilt is small and inverted on X so the box leans toward the cursor. */
      state.targetRy = clamp(((x - rect.width / 2) / rect.width) * 9, -3.6, 3.6);
      state.targetRx = clamp(((rect.height / 2 - y) / rect.height) * -7, -3, 3);

      canvasApi.current?.setPointer(x, y);
      startMotion();
    },
    [startMotion],
  );

  const handlePointerLeave = useCallback(() => {
    const state = motion.current;
    state.inside = false;
    state.targetRx = 0;
    state.targetRy = 0;

    lensRef.current?.classList.remove("is-visible");
    canvasApi.current?.clearPointer();

    startMotion();
  }, [startMotion]);

  /* ---------------------------------------------------------------- accent */

  /**
   * Pushes a stage's colour to the box (CSS custom properties) and the stream
   * (canvas palette tint). Passing null falls back to the selected stage, so
   * releasing a hover reverts to the selection rather than to neutral.
   */
  const applyAccent = useCallback((stage) => {
    const target = stage ?? selectedStage.current;
    const root = rootRef.current;

    if (root) {
      if (target) {
        root.style.setProperty("--awv-accent", target.accent.token);
        root.style.setProperty("--awv-accent-rgb", target.accent.rgb);
      } else {
        root.style.removeProperty("--awv-accent");
        root.style.removeProperty("--awv-accent-rgb");
      }
    }

    canvasApi.current?.setAccent(target ? target.accent.stream : null);
  }, []);

  /* ------------------------------------------------------------ reactions */

  const pulseBox = useCallback(() => {
    /* Restart cleanly: without clearing, an earlier timeout would end the pulse
       early, and without a fresh key the CSS flash would not replay. */
    clearTimeout(pulseTimer.current);

    setIsPulsing(true);
    setPulseKey((key) => key + 1);

    pulseTimer.current = setTimeout(() => setIsPulsing(false), PULSE_MS);
  }, []);

  const emitShockwave = useCallback(() => {
    if (motion.current.reduced) return;

    shockwaveId.current += 1;
    const id = shockwaveId.current;
    const { x, y } = opening.current;

    setShockwaves((current) => [...current, { id, x, y }]);
    track(
      setTimeout(
        () => setShockwaves((current) => current.filter((w) => w.id !== id)),
        SHOCKWAVE_MS,
      ),
    );
  }, [track]);

  const handleSurge = useCallback(
    (strength) => {
      canvasApi.current?.surge(strength);
      pulseBox();
      emitShockwave();
    },
    [emitShockwave, pulseBox],
  );

  const handlePointerDown = useCallback(
    (event) => {
      /* Card presses run their own reaction through onClick; without this the
         root would fire a second, full-strength surge for the same press. */
      if (event.target.closest?.(".wf-card__button")) return;

      handleSurge(1);
    },
    [handleSurge],
  );

  const handleSelect = useCallback(
    (stage) => {
      selectedStage.current = stage;

      setSelectedId(stage.id);
      setMessage(getStageMessage(stage));

      applyAccent(stage);
      handleSurge(0.65);
    },
    [applyAccent, handleSurge],
  );

  /* Hover/focus: recolour, brighten the stream, shoot a spark from the connector. */
  const handleEngage = useCallback(
    (stage, point) => {
      const stageEl = stageRef.current;
      if (!stageEl) return;

      const rect = stageEl.getBoundingClientRect();

      applyAccent(stage);
      canvasApi.current?.setIntensity(1);
      canvasApi.current?.pulse(point.x - rect.left, point.y - rect.top);
    },
    [applyAccent],
  );

  const handleRelease = useCallback(() => {
    canvasApi.current?.setIntensity(0);
    applyAccent(null);
  }, [applyAccent]);

  return (
    <div
      className="awv"
      ref={rootRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
    >
      <div className="awv__stage" ref={stageRef}>
        <RadiationCanvas ref={canvasApi} label={CANVAS_LABEL} />

        <ProcessingBox
          ref={boxRef}
          openingRef={openingRef}
          pulsing={isPulsing}
          pulseKey={pulseKey}
        />

        {shockwaves.map((wave) => (
          <EnergyShockwave key={wave.id} x={wave.x} y={wave.y} />
        ))}

        {/* Hidden on touch via CSS rather than a JS capability check. */}
        <span className="awv__lens" ref={lensRef} aria-hidden="true">
          <span className="awv__lens-ring" />
        </span>
      </div>

      <div className="awv__cards" ref={cardsRef}>
        {workflowStages.map((stage) => (
          <WorkflowCard
            key={stage.id}
            stage={stage}
            isSelected={selectedId === stage.id}
            onSelect={handleSelect}
            onEngage={handleEngage}
            onRelease={handleRelease}
          />
        ))}
      </div>

      {/* Announced, not shown. The visible confirmation is the card's own ACTIVE
          marker; this keeps the change perceivable to screen readers without
          putting a line of text under the box. */}
      <p className="awv__status visually-hidden" role="status" aria-live="polite">
        {message}
      </p>
    </div>
  );
};

export default AgencyWorkflowVisual;
