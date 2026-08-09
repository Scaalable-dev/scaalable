import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/* Loose spring: the glows should trail the cursor, not track it 1:1. */
const DRIFT_SPRING = { stiffness: 70, damping: 22, mass: 0.8 };

/**
 * Ambient aurora layer behind the hero.
 *
 * Two motion sources are combined per glow: pointer drift (normalised to
 * -0.5..0.5 around the hero's centre) and scroll progress, so the field keeps
 * moving as the section leaves the viewport.
 */
const HeroBackground = ({ targetRef }) => {
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
    <div className="hero__backdrop" aria-hidden="true">
      <motion.span
        className="hero__glow hero__glow--blue"
        style={reduceMotion ? undefined : { x: blueX, y: blueY }}
      />

      <motion.span
        className="hero__glow hero__glow--violet"
        style={reduceMotion ? undefined : { x: violetX, y: violetY }}
      />

      <motion.span
        className="hero__glow hero__glow--cyan"
        style={reduceMotion ? undefined : { x: cyanX, y: cyanY }}
      />

      <motion.span
        className="hero__mesh"
        style={reduceMotion ? undefined : { opacity: gridOpacity }}
      />
    </div>
  );
};

export default HeroBackground;
