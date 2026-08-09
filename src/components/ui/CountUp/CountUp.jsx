import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Counts from 0 up to `value` the first time it scrolls into view.
 *
 * The rendered text always includes the final value's digit count via
 * `toLocaleString`, so a "200+" stat never reflows the layout mid-count.
 */
const CountUp = ({
  value,
  duration = 1.8,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();

  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: setAnimated,
    });

    return () => controls.stop();
  }, [isInView, value, duration, reduceMotion]);

  /* Derived rather than pushed through state: with reduced motion there is no
     animation to read from, and setting state for it inside the effect would
     just trigger an extra render pass. */
  const current = reduceMotion ? value : animated;

  const formatted = Number(current.toFixed(decimals)).toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export default CountUp;
