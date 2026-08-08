import { useCallback, useEffect, useRef, useState } from "react";

import "./Industries.css";

import Container from "../../../components/ui/Container";
import SectionHeading from "../../../components/ui/SectionHeading";
import useMediaQuery from "../../../hooks/useMediaQuery";

import SelectedIndustryPanel from "./SelectedIndustryPanel";
import BlueprintTimeline from "./BlueprintTimeline";
import IndustrySelector from "./IndustrySelector";
import MobileIndustriesSection from "./MobileIndustriesSection";

import { industries, industriesIntro } from "./industriesData";

/* How long the outgoing content fades and blurs before it is replaced. Kept
   just under the CSS transition so the swap lands on an already-faded frame
   and the text is never seen changing. */
const SWAP_MS = 190;

/* Idle auto-advance, and how long a manual pick holds it off afterwards. */
const ADVANCE_MS = 9000;
const RESUME_MS = 20000;

/* Below this the section switches to a purpose-built touch layout: a
   different running order, a drag carousel and an accordion. Matches the CSS
   breakpoint of the same value. */
const COMPACT_QUERY = "(max-width: 767.98px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const IndustriesBlueprintSection = () => {
  const isCompact = useMediaQuery(COMPACT_QUERY);
  const reduceMotion = useMediaQuery(REDUCED_MOTION_QUERY);

  const [activeIndex, setActiveIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  /* Drives the exit transition. "out" for the brief window between a pick and
     the content actually being replaced. */
  const [phase, setPhase] = useState("in");

  /* Autoplay stops while a pointer is over the section or focus is inside it,
     and separately for a while after any manual selection. */
  const [engaged, setEngaged] = useState(false);
  const [held, setHeld] = useState(false);

  const swapTimer = useRef(null);
  const holdTimer = useRef(null);

  /* Where the interface is heading during the exit window. Without it, picking
     the currently-shown industry mid-swap would look like a no-op and then
     land on the previous target anyway. */
  const pending = useRef(null);

  useEffect(
    () => () => {
      clearTimeout(swapTimer.current);
      clearTimeout(holdTimer.current);
    },
    [],
  );

  const goTo = useCallback(
    (index, manual = false) => {
      if (index === (pending.current ?? activeIndex)) return;

      if (manual) {
        setHeld(true);

        clearTimeout(holdTimer.current);
        holdTimer.current = setTimeout(() => setHeld(false), RESUME_MS);
      }

      clearTimeout(swapTimer.current);

      /* Picking what is already on screen while another swap is in flight
         cancels it and eases the content back in. */
      if (index === activeIndex) {
        pending.current = null;
        setPhase("in");
        return;
      }

      const commit = () => {
        pending.current = null;

        setActiveIndex(index);
        setStepIndex(0);
        setPhase("in");
      };

      /* No cross-fade to run — swap immediately rather than leaving the panel
         blank for the length of a transition that will not happen. */
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

  const goToNext = useCallback(
    (manual = false) => goTo((activeIndex + 1) % industries.length, manual),
    [activeIndex, goTo],
  );

  /* Re-armed after every change, so the full interval always elapses between
     advances rather than the timer running down mid-transition. */
  useEffect(() => {
    if (reduceMotion || engaged || held) return undefined;

    const timer = setTimeout(() => goToNext(), ADVANCE_MS);

    return () => clearTimeout(timer);
  }, [engaged, held, reduceMotion, goToNext]);

  /* Only a real hover counts. On touch, pointerenter fires on tap and never
     pairs with a leave, which would stop autoplay permanently. */
  const handlePointerEnter = (event) => {
    if (event.pointerType === "mouse") setEngaged(true);
  };

  const handlePointerLeave = (event) => {
    if (event.pointerType === "mouse") setEngaged(false);
  };

  const active = industries[activeIndex];
  const total = industries.length;

  return (
    <section
      className="ind"
      id="industries"
      style={{ "--ind-accent": active.accent }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onFocus={() => setEngaged(true)}
      onBlur={() => setEngaged(false)}
    >
      <Container>
        {/* Announces the swap once, rather than letting a screen reader walk
            the whole panel again on every advance. */}
        <p className="visually-hidden" aria-live="polite">
          {`${active.name}. ${active.description}`}
        </p>

        {/* Both layouts read the same state and the same data; only the
            arrangement and the interaction model differ. */}
        {isCompact ? (
          <MobileIndustriesSection
            industries={industries}
            industry={active}
            activeIndex={activeIndex}
            openStep={stepIndex}
            phase={phase}
            reduceMotion={reduceMotion}
            onSelect={(index) => goTo(index, true)}
            onOpenStep={setStepIndex}
            onInteracting={setEngaged}
          />
        ) : (
          <>
            <SectionHeading
              badge={industriesIntro.badge}
              title={industriesIntro.title}
              description={industriesIntro.description}
            />

            <div className="ind-bp" data-phase={phase}>
              <SelectedIndustryPanel
                industry={active}
                position={activeIndex + 1}
                total={total}
                reduceMotion={reduceMotion}
                onNext={() => goToNext(true)}
              />

              <BlueprintTimeline
                industry={active}
                activeStep={stepIndex}
                onSelectStep={setStepIndex}
              />
            </div>

            <IndustrySelector
              industries={industries}
              activeIndex={activeIndex}
              onSelect={(index) => goTo(index, true)}
            />
          </>
        )}
      </Container>
    </section>
  );
};

export default IndustriesBlueprintSection;
