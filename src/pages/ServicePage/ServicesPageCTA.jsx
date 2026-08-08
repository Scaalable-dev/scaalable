import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import "./ServicesPageCTA.css";

import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import useMediaQuery from "../../hooks/useMediaQuery";

import { servicesCta } from "./servicesData";

/* Ceiling on the magnetic response, in pixels per axis. Deliberately small —
   it should register as the button acknowledging the cursor, not as movement. */
const MAGNET_MAX = 3;

/* Two points on one 4.2s cycle, offset by half of it. */
const PULSE_DELAYS = ["0ms", "2100ms"];

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/* The magnetic response is a mouse affordance. A device without hover has no
   cursor to answer, and a coarse pointer would only ever trigger it by
   accident on the way to a tap. */
const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";

const ServicesPageCTA = () => {
  const reduceMotion = useMediaQuery(REDUCED_MOTION_QUERY);
  const finePointer = useMediaQuery(FINE_POINTER_QUERY);

  const magnetic = finePointer && !reduceMotion;

  const wrapRef = useRef(null);
  const frame = useRef(0);

  /* Measured once as the cursor arrives rather than on every move: the button
     cannot change size while being hovered, so re-reading its box each frame
     would be a layout read for an answer already known. */
  const bounds = useRef(null);

  const handleEnter = (event) => {
    if (!magnetic || event.pointerType !== "mouse") return;

    bounds.current = wrapRef.current?.getBoundingClientRect() ?? null;
  };

  /* Written straight to the element rather than through state: a pointermove
     that re-rendered would run React on every mouse frame for a purely
     visual effect. */
  const handleMove = (event) => {
    const box = bounds.current;
    const wrap = wrapRef.current;

    if (!magnetic || !box || !wrap) return;

    const x = (event.clientX - (box.left + box.width / 2)) / (box.width / 2);
    const y = (event.clientY - (box.top + box.height / 2)) / (box.height / 2);

    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      wrap.style.setProperty("--mx", `${(x * MAGNET_MAX).toFixed(2)}px`);
      wrap.style.setProperty("--my", `${(y * MAGNET_MAX).toFixed(2)}px`);
    });
  };

  const handleLeave = () => {
    cancelAnimationFrame(frame.current);
    bounds.current = null;

    const wrap = wrapRef.current;
    if (!wrap) return;

    wrap.style.setProperty("--mx", "0px");
    wrap.style.setProperty("--my", "0px");
  };

  return (
    <section className="scta" id="services-cta">
      <Container>
        {/* ------------------------ Signal ------------------------ */}
        <div className="scta__signal">
          <span className="scta__signal-label">{servicesCta.signal.from}</span>

          <span className="scta__signal-line" aria-hidden="true">
            {PULSE_DELAYS.map((delay) => (
              <span
                className="scta__pulse"
                key={delay}
                style={{ "--delay": delay }}
              />
            ))}
          </span>

          <span className="scta__signal-label">{servicesCta.signal.to}</span>
        </div>

        {/* ------------------------ Panel ------------------------ */}
        <div className="scta__panel">
          <div className="scta__content">
            <span className="scta__eyebrow">{servicesCta.eyebrow}</span>

            <h2 className="scta__title">{servicesCta.title}</h2>

            <p className="scta__description">{servicesCta.description}</p>
          </div>

          {/* The magnetic offset lives on this wrapper so the button keeps its
              own transform for the hover lift and the press. */}
          <div
            className="scta__action"
            ref={wrapRef}
            onPointerEnter={handleEnter}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
          >
            <Button
              as={Link}
              to={servicesCta.cta.href}
              size="lg"
              endIcon={
                <ArrowUpRight size={18} strokeWidth={2.2} aria-hidden="true" />
              }
            >
              {servicesCta.cta.text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesPageCTA;
