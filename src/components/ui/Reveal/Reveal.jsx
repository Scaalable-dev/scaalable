import { m, useReducedMotion } from "framer-motion";

/* Distance each direction travels before settling. Kept small — a long throw
   reads as a slideshow rather than a page that simply arrives. */
const OFFSETS = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  none: { x: 0, y: 0 },
};

const EASE = [0.16, 1, 0.3, 1];

/**
 * Scroll-triggered entrance wrapper.
 *
 * Stagger a list by feeding the index into `delay`:
 *   items.map((item, i) => <Reveal key={item.id} delay={i * 0.08}>…</Reveal>)
 *
 * Honours prefers-reduced-motion by rendering the final state immediately.
 */
const Reveal = ({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
  className = "",
  ...props
}) => {
  const reduceMotion = useReducedMotion();

  const MotionTag = m[as] ?? m.div;
  const offset = OFFSETS[direction] ?? OFFSETS.up;

  if (reduceMotion) {
    return (
      <MotionTag className={className} {...props}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
