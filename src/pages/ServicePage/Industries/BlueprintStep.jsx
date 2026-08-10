import { ArrowUpRight } from "lucide-react";

/* Desktop only — below 768px BlueprintAccordionItem takes over. */
const BlueprintStep = ({ step, index, isActive, onSelect }) => {
  const Icon = step.icon;

  return (
    <li className="ind-step" data-active={isActive} style={{ "--i": index }}>
      <button
        type="button"
        className="ind-step__button"
        onClick={onSelect}
        aria-current={isActive ? "step" : undefined}
      >
        <span className="ind-step__surface" aria-hidden="true" />
        <span className="ind-step__scan" aria-hidden="true" />

        <span className="ind-step__marker">
          <span className="ind-step__ring" aria-hidden="true" />

          <span className="ind-step__number">{step.number}</span>
        </span>

        <span className="ind-step__icon">
          <Icon size={15} strokeWidth={1.9} aria-hidden="true" />
        </span>

        <span className="ind-step__body">
          <span className="ind-step__title">{step.title}</span>

          {/* A span, not a paragraph: this whole row is one <button>, which
              may only contain phrasing content. The CSS gives it block
              display. */}
          <span className="ind-step__description">{step.description}</span>
        </span>

        <ArrowUpRight
          className="ind-step__arrow"
          size={15}
          strokeWidth={2.1}
          aria-hidden="true"
        />
      </button>
    </li>
  );
};

export default BlueprintStep;
