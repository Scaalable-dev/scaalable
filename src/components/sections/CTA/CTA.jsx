import { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import useMediaQuery from "../../../hooks/useMediaQuery";

import ctaData from "./ctaData";

import "./CTA.css";

/* Ceiling on how far the ambient light answers the cursor, per axis. Small on
   purpose: it should read as the panel noticing the pointer, not as parallax. */
const LIGHT_MAX = 4;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/* A device without hover has no cursor to answer, and a coarse pointer would
   only ever trigger this on the way to a tap. */
const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";

/* Normalised path — pathLength="1" lets the dash offsets below be written as
   fractions of the curve rather than as guessed user units. The line runs
   below the copy for most of its length and only lifts toward the button, so
   it never crosses the text. */
const SIGNAL_PATH =
  "M 40 198 C 400 198 566 190 726 152 C 846 124 880 118 940 112";

const HomeCTA = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.35 });

  const reduceMotion = useMediaQuery(REDUCED_MOTION_QUERY);
  const finePointer = useMediaQuery(FINE_POINTER_QUERY);

  const reactive = finePointer && !reduceMotion;

  const panelRef = useRef(null);
  const frame = useRef(0);

  /* Measured as the cursor arrives rather than on every move: the panel cannot
     resize while it is being hovered. */
  const bounds = useRef(null);

  const handleEnter = (event) => {
    if (!reactive || event.pointerType !== "mouse") return;

    bounds.current = panelRef.current?.getBoundingClientRect() ?? null;
  };

  /* Written straight to the element rather than through state — a pointermove
     that re-rendered would run React on every mouse frame for a purely visual
     effect, and the text must not move at all. */
  const handleMove = (event) => {
    const box = bounds.current;
    const panel = panelRef.current;

    if (!reactive || !box || !panel) return;

    const x = (event.clientX - (box.left + box.width / 2)) / (box.width / 2);
    const y = (event.clientY - (box.top + box.height / 2)) / (box.height / 2);

    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      panel.style.setProperty("--cta-lx", `${(x * LIGHT_MAX).toFixed(2)}px`);
      panel.style.setProperty("--cta-ly", `${(y * LIGHT_MAX).toFixed(2)}px`);
    });
  };

  const handleLeave = () => {
    cancelAnimationFrame(frame.current);
    bounds.current = null;

    const panel = panelRef.current;
    if (!panel) return;

    panel.style.setProperty("--cta-lx", "0px");
    panel.style.setProperty("--cta-ly", "0px");
  };

  return (
    <section
      className={`hcta ${inView ? "is-in" : ""}`.trim()}
      ref={sectionRef}
      aria-labelledby="hcta-title"
    >
      <Container>
        <div
          className="hcta__panel"
          ref={panelRef}
          onPointerEnter={handleEnter}
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
        >
          {/* Ambient light and mesh, both weighted to the CTA side. */}
          <span className="hcta__glow" aria-hidden="true" />
          <span className="hcta__mesh" aria-hidden="true" />

          {/* Idea travelling toward the conversation. Desktop and tablet. */}
          <svg
            className="hcta__signal"
            viewBox="0 0 1200 220"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              className="hcta__signal-base"
              d={SIGNAL_PATH}
              pathLength="1"
              vectorEffect="non-scaling-stroke"
            />

            <path
              className="hcta__signal-pulse"
              d={SIGNAL_PATH}
              pathLength="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="hcta__content">
            <Badge className="hcta__badge">{ctaData.badge}</Badge>

            <h2 className="hcta__title" id="hcta-title">
              {ctaData.title}
            </h2>

            <p className="hcta__description">{ctaData.description}</p>
          </div>

          <div className="hcta__action">
            {/* Mobile only: the curve is replaced by one short run into the
                button, so nothing animates behind the paragraph. */}
            <span className="hcta__wire" aria-hidden="true">
              <span className="hcta__wire-pulse" />
            </span>

            <Button
              as={Link}
              to={ctaData.action.to}
              size="lg"
              endIcon={
                <ArrowUpRight size={18} strokeWidth={2.2} aria-hidden="true" />
              }
            >
              {ctaData.action.text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeCTA;
