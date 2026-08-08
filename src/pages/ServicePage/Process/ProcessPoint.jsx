const ProcessPoint = ({ stage, index, state, onSelect, onKeyDown, pointRef }) => {
  const isActive = state === "active";

  /* Weight and colour separate the three states visually. The label carries
     the same distinction in words, so the state is never conveyed by colour
     alone — and it has to live in the label rather than in hidden text beside
     it, because an aria-label replaces the button's contents outright. */
  const status = state === "done" ? ", completed" : isActive ? ", current stage" : "";

  return (
    <button
      type="button"
      className="proc-point"
      ref={pointRef}
      data-state={state}
      aria-pressed={isActive}
      aria-label={`Stage ${Number(stage.number)}: ${stage.title}${status}`}
      onClick={() => onSelect(index)}
      onKeyDown={onKeyDown}
    >
      {/* Accent rule above the selected stage, drawn in from the centre. */}
      <span className="proc-point__rule" aria-hidden="true" />

      <span className="proc-point__number">{stage.number}</span>

      <span className="proc-point__label">{stage.shortLabel}</span>
    </button>
  );
};

export default ProcessPoint;
