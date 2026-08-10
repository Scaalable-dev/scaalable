import { useEffect } from "react";
import {
  m,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import "./AuroraBackdrop.css";

/* Loose spring: the glows should trail the cursor, not track it 1:1. */
const DRIFT_SPRING = { stiffness: 70, damping: 22, mass: 0.8 };

/**
 * Ambient aurora layer behind a hero.
 *
 * Two motion sources are combined per glow: pointer drift (normalised to
 * -0.5..0.5 around the host's centre) and scroll progress, so the field keeps
 * moving as the section leaves the viewport.
 *
 * The host must establish a stacking context and clip its overflow — the
 * backdrop sits at z-index -1 so it paints over the host's own background but
 * under its content, and it overhangs the edges so the blurred glows are never
 * cut off square. Every hero using this already sets `isolation: isolate` and
 * `overflow: clip` for its own reasons.
 */
const AuroraBackdrop = ({ targetRef }) => {
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const driftX = useSpring(pointerX, DRIFT_SPRING);
  const driftY = useSpring(pointerY, DRIFT_SPRING);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollSlow = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scrollFast = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.15]);

  const blueX = useTransform(driftX, (value) => value * 46);
  const blueY = useTransform(
    [driftY, scrollSlow],
    ([drift, scroll]) => drift * 38 + scroll,
  );

  const violetX = useTransform(driftX, (value) => value * -40);
  const violetY = useTransform(
    [driftY, scrollFast],
    ([drift, scroll]) => drift * -32 + scroll,
  );

  const cyanX = useTransform(driftX, (value) => value * 26);
  const cyanY = useTransform(
    [driftY, scrollSlow],
    ([drift, scroll]) => drift * 22 - scroll * 0.5,
  );

  useEffect(() => {
    const node = targetRef.current;
    if (!node || reduceMotion) return;

    const handleMove = (event) => {
      if (event.pointerType !== "mouse") return;

      const rect = node.getBoundingClientRect();

      pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
      pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
    };

    const handleLeave = () => {
      pointerX.set(0);
      pointerY.set(0);
    };

    node.addEventListener("pointermove", handleMove);
    node.addEventListener("pointerleave", handleLeave);

    return () => {
      node.removeEventListener("pointermove", handleMove);
      node.removeEventListener("pointerleave", handleLeave);
    };
  }, [targetRef, reduceMotion, pointerX, pointerY]);

  return (
    <div className="aurora" aria-hidden="true">
      <m.span
        className="aurora__glow aurora__glow--blue"
        style={reduceMotion ? undefined : { x: blueX, y: blueY }}
      />

      <m.span
        className="aurora__glow aurora__glow--violet"
        style={reduceMotion ? undefined : { x: violetX, y: violetY }}
      />

      <m.span
        className="aurora__glow aurora__glow--cyan"
        style={reduceMotion ? undefined : { x: cyanX, y: cyanY }}
      />

      <m.span
        className="aurora__mesh"
        style={reduceMotion ? undefined : { opacity: gridOpacity }}
      />
    </div>
  );
};

export default AuroraBackdrop;
