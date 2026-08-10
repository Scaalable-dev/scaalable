/* Three points crossing one line on a shared 3.6s cycle, offset so the strip
   reads as a channel carrying traffic rather than a repeating blink. The
   delays are data, not magic numbers scattered through the stylesheet. */
const PULSE_DELAYS = ["0ms", "1200ms", "2400ms"];

const ActiveStackSignal = ({ count }) => {
  return (
    <div className="tech-signal">
      <span className="tech-signal__label">Active stack</span>

      <span className="tech-signal__line" aria-hidden="true">
        {PULSE_DELAYS.map((delay) => (
          <span
            className="tech-signal__pulse"
            key={delay}
            style={{ "--delay": delay }}
          />
        ))}
      </span>

      <span className="tech-signal__count">
        {count} {count === 1 ? "Tool" : "Tools"}
      </span>
    </div>
  );
};

export default ActiveStackSignal;
