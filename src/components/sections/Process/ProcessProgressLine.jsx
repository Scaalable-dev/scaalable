const pad = (value) => String(value).padStart(2, "0");

/* Its own row beneath the rail rather than a line threaded through the
   stages: counter on the left, track in the middle, handoff status on the
   right. The fill is the only moving part — it eases to the new stage and
   runs the same way in reverse when you step back. */
const ProcessProgressLine = ({ activeIndex, total }) => {
  const position = activeIndex + 1;

  return (
    <div className="proc-bar">
      <span className="proc-bar__count">
        Stage {pad(position)} of {pad(total)}
      </span>

      <div className="proc-bar__track">
        <div
          className="proc-bar__fill"
          style={{ "--progress": `${(position / total) * 100}%` }}
        >
          {/* Rides the fill's leading edge, so it travels the line on every
              change and comes to rest at the new stage. */}
          <span className="proc-bar__head" />
        </div>
      </div>

      <span className="proc-bar__status">
        <span className="proc-bar__dot" aria-hidden="true" />
        Continuous handoff
      </span>
    </div>
  );
};

export default ProcessProgressLine;
