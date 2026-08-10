import { useRef } from "react";
import {
  m,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import "./TiltCard.css";

const SPRING = { stiffness: 260, damping: 24, mass: 0.5 };

/**
 * Card shell that tilts toward the pointer and carries a cursor-tracking
 * spotlight.
 *
 * Only mouse pointers drive the tilt — on touch the transform would fire on tap
 * and leave the card stuck at an angle until the next scroll.
 */
const TiltCard = ({
  children,
  as = "article",
  className = "",
  max = 6,
  spotlight = true,
  spotlightColor = "rgba(0, 130, 249, 0.10)",
  ...props
}) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  /* Pointer position as a percentage of the card, defaulting to dead centre so
     the resting tilt is flat. */
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);

  const rotateX = useSpring(
    useTransform(pointerY, [0, 100], [max, -max]),
    SPRING,
  );
  const rotateY = useSpring(
    useTransform(pointerX, [0, 100], [-max, max]),
    SPRING,
  );

  const spotlightBackground = useMotionTemplate`radial-gradient(340px circle at ${pointerX}% ${pointerY}%, ${spotlightColor}, transparent 72%)`;

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== "mouse") return;

    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    pointerX.set(((event.clientX - rect.left) / rect.width) * 100);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  const handlePointerLeave = () => {
    pointerX.set(50);
    pointerY.set(50);
  };

  const MotionTag = m[as] ?? m.article;

  return (
    <MotionTag
      ref={ref}
      className={`tilt-card ${className}`.trim()}
      style={
        reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }
      }
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {spotlight && !reduceMotion && (
        <m.span
          className="tilt-card__spotlight"
          style={{ background: spotlightBackground }}
          aria-hidden="true"
        />
      )}

      {children}
    </MotionTag>
  );
};

export default TiltCard;
