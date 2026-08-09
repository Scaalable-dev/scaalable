import "./EnergyShockwave.css";

/**
 * Three elliptical rings thrown out from the box opening on a click surge.
 *
 * Rendered as DOM rather than into the canvas so it composites on the GPU
 * without adding per-frame work to the particle loop. The parent mounts one per
 * click and drops it when the animation finishes.
 */
const EnergyShockwave = ({ x, y }) => {
  return (
    <span
      className="shockwave"
      style={{ "--shockwave-x": `${x}px`, "--shockwave-y": `${y}px` }}
      aria-hidden="true"
    >
      <span className="shockwave__ring shockwave__ring--blue" />
      <span className="shockwave__ring shockwave__ring--cyan" />
      <span className="shockwave__ring shockwave__ring--violet" />
    </span>
  );
};

export default EnergyShockwave;
