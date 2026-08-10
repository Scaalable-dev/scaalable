import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import Container from "../../ui/Container";
import Reveal from "../../ui/Reveal";
import SectionHeading from "../../ui/SectionHeading";
import SignalPathway from "./SignalPathway";
import { audiences, whoWeHelpIntro } from "./whoWeHelpData";

import "./WhoWeHelp.css";

const SWAP_EASE = [0.2, 0.8, 0.2, 1];
const SWAP_DURATION = 0.4;

const pad = (value) => String(value).padStart(2, "0");

const WhoWeHelp = () => {
  const [activeId, setActiveId] = useState(audiences[0].id);
  const reduceMotion = useReducedMotion();

  const panelRef = useRef(null);

  const activeIndex = audiences.findIndex((item) => item.id === activeId);
  const audience = audiences[activeIndex];

  /* Pointer-responsive light. Written straight to CSS custom properties so
     moving the cursor never re-renders the panel. */
  const handlePointerMove = useCallback((event) => {
    if (event.pointerType !== "mouse") return;

    const panel = panelRef.current;
    if (!panel) return;

    const rect = panel.getBoundingClientRect();

    panel.style.setProperty(
      "--wwh-px",
      `${((event.clientX - rect.left) / rect.width) * 100}%`,
    );
    panel.style.setProperty(
      "--wwh-py",
      `${((event.clientY - rect.top) / rect.height) * 100}%`,
    );
  }, []);

  const handlePointerLeave = useCallback(() => {
    const panel = panelRef.current;
    if (!panel) return;

    panel.style.removeProperty("--wwh-px");
    panel.style.removeProperty("--wwh-py");
  }, []);

  useEffect(() => {
    const panel = panelRef.current;

    return () => {
      panel?.style.removeProperty("--wwh-px");
      panel?.style.removeProperty("--wwh-py");
    };
  }, []);

  const swap = {
    initial: reduceMotion ? false : { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 },
    transition: {
      duration: reduceMotion ? 0.12 : SWAP_DURATION,
      ease: SWAP_EASE,
    },
  };

  /* No visible heading, so the section carries its own accessible name —
     otherwise it would be an unlabelled region in the landmark list. */
  return (
    <section
      className="who-we-help section-wash"
      id="who-we-help"
      aria-label="Who we help"
    >
      <Container>
        <Reveal>
          <SectionHeading
            className="wwh-heading"
            badge={whoWeHelpIntro.badge}
            align="center"
          />
        </Reveal>

        {/* Selection controls, not navigation — no routing, no CTA styling. */}
        <Reveal delay={0.08}>
          <div
            className="wwh-selector"
            role="group"
            aria-label="Choose the kind of business you are"
          >
            {audiences.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`wwh-selector__button ${item.id === activeId ? "is-active" : ""}`.trim()}
                aria-pressed={item.id === activeId}
                onClick={() => setActiveId(item.id)}
              >
                {item.tab}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div
            className="wwh-panel"
            ref={panelRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            <span className="wwh-panel__sheen" aria-hidden="true" />

            <p className="wwh-panel__position">
              <span>{pad(activeIndex + 1)}</span>
              <span className="wwh-panel__position-sep"> / </span>
              <span>{pad(audiences.length)}</span>
            </p>

            {/* Copy swaps; the grid and pathway behind it never blank out. */}
            <div className="wwh-panel__content" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <m.div key={audience.id} className="wwh-copy" {...swap}>
                  <p className="wwh-copy__label">
                    <Sparkles size={15} strokeWidth={2} aria-hidden="true" />
                    <span>{audience.label}</span>
                  </p>

                  <h3 className="wwh-copy__heading">{audience.heading}</h3>

                  <p className="wwh-copy__description">{audience.description}</p>

                  <p className="wwh-copy__outcome">
                    <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
                    <span>{audience.outcome}</span>
                  </p>
                </m.div>
              </AnimatePresence>
            </div>

            <div className="wwh-panel__visual">
              <SignalPathway audience={audience} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default WhoWeHelp;
