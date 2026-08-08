import BlueprintAccordionItem from "./BlueprintAccordionItem";

const MobileBlueprintAccordion = ({ industry, openStep, onOpenStep }) => {
  return (
    <div className="indm-bp">
      <div className="indm-bp__head">
        <span className="indm-bp__label">Solution Blueprint</span>

        <span className="indm-bp__status">
          {/* Keyed so the flash replays whenever the industry changes. */}
          <span className="indm-bp__dot" key={industry.id} aria-hidden="true" />
          Tap to expand
        </span>
      </div>

      <div className="indm-bp__rail">
        {/* Ambient travelling light, and a one-shot pulse from step 01 that
            replays on every industry and step change. */}
        <span className="indm-bp__glide" aria-hidden="true" />

        <span
          className="indm-bp__pulse"
          key={`${industry.id}-${openStep}`}
          aria-hidden="true"
        />

        <ol className="indm-bp__list">
          {industry.blueprintSteps.map((step, i) => (
            <BlueprintAccordionItem
              key={`${industry.id}-${step.number}`}
              step={step}
              index={i}
              industryId={industry.id}
              isOpen={i === openStep}
              onOpen={() => onOpenStep(i)}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MobileBlueprintAccordion;
