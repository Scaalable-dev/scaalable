import { useCallback, useEffect, useRef, useState } from "react";

import "./Process.css";

import Container from "../../../components/ui/Container";
import useMediaQuery from "../../../hooks/useMediaQuery";

import ProcessRail from "./ProcessRail";
import ProcessProgressLine from "./ProcessProgressLine";
import SelectedProcessPanel from "./SelectedProcessPanel";

import { processIntro, stages } from "./processData";

/* How long the outgoing panel fades before it is replaced. Kept just under
   the CSS transition so the swap lands on an already-faded frame. */
const SWAP_MS = 180;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const ProcessSection = () => {
  const reduceMotion = useMediaQuery(REDUCED_MOTION_QUERY);

  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState("in");

  const swapTimer = useRef(null);

  /* Where the panel is heading during the exit window, so re-picking the
     stage on screen mid-swap cancels the move instead of reading as a no-op
     and then landing on the previous target anyway. */
  const pending = useRef(null);

  useEffect(() => () => clearTimeout(swapTimer.current), []);

  /* Stages never advance on their own — the section is entirely user-driven. */
  const goTo = useCallback(
    (index) => {
      if (index < 0 || index >= stages.length) return;
      if (index === (pending.current ?? activeIndex)) return;

      clearTimeout(swapTimer.current);

      if (index === activeIndex) {
        pending.current = null;
        setPhase("in");
        return;
      }

      const commit = () => {
        pending.current = null;

        setActiveIndex(index);
        setPhase("in");
      };

      /* No cross-fade to run — swap immediately rather than dimming the panel
         for the length of a transition that will not happen. */
      if (reduceMotion) {
        commit();
        return;
      }

      pending.current = index;

      setPhase("out");
      swapTimer.current = setTimeout(commit, SWAP_MS);
    },
    [activeIndex, reduceMotion],
  );

  const active = stages[activeIndex];

  return (
    <section className="proc" id="process">
      <Container>
        {/* ------------------------ Introduction ------------------------ */}
        <div className="proc-intro">
          <div className="proc-intro__lead">
            <span className="proc-intro__label">
              {processIntro.badge} <i>·</i> {stages.length} Connected Stages
            </span>

            <h2 className="proc-intro__title">{processIntro.title}</h2>
          </div>

          <div className="proc-intro__aside">
            <p className="proc-intro__description">
              {processIntro.description}
            </p>
          </div>
        </div>

        {/* ------------------------ Rail ------------------------ */}
        <ProcessRail
          stages={stages}
          activeIndex={activeIndex}
          reduceMotion={reduceMotion}
          onSelect={goTo}
        />

        {/* ------------------------ Progress ------------------------ */}
        <ProcessProgressLine
          activeIndex={activeIndex}
          total={stages.length}
        />

        {/* Announces the change once, rather than letting a screen reader walk
            the whole panel again on every stage. */}
        <p className="visually-hidden" aria-live="polite">
          {`Stage ${Number(active.number)} of ${stages.length}: ${active.title}. ${active.description}`}
        </p>

        {/* ------------------------ Selected stage ------------------------ */}
        <SelectedProcessPanel
          stages={stages}
          stage={active}
          activeIndex={activeIndex}
          phase={phase}
          onSelect={goTo}
        />
      </Container>
    </section>
  );
};

export default ProcessSection;
