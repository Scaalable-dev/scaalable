import BlueprintStep from "./BlueprintStep";

/* Desktop only — below 768px MobileBlueprintAccordion takes over. */
const BlueprintTimeline = ({ industry, activeStep, onSelectStep }) => {
  return (
    <div className="ind-line">
      <div className="ind-line__head">
        <span className="ind-line__label">Solution Blueprint</span>

        <span className="ind-line__status">
          {/* Keyed so the flash replays whenever the industry changes. */}
          <span
            className="ind-line__dot"
            key={industry.id}
            aria-hidden="true"
          />
          Adapts on selection
        </span>
      </div>

      {/* The connector and its pulse live on the wrapper, not the list: an
          <ol> may only contain list items. */}
      <div className="ind-line__steps">
        {/* Keyed so it replays on every industry and step change. */}
        <span
          className="ind-line__pulse"
          key={`${industry.id}-${activeStep}`}
          aria-hidden="true"
        />

        <ol className="ind-line__list">
          {industry.blueprintSteps.map((step, i) => (
            <BlueprintStep
              key={`${industry.id}-${step.number}`}
              step={step}
              index={i}
              isActive={i === activeStep}
              onSelect={() => onSelectStep(i)}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BlueprintTimeline;
