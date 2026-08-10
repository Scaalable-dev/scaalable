import { ChevronDown } from "lucide-react";

const BlueprintAccordionItem = ({ step, index, industryId, isOpen, onOpen }) => {
  const headId = `indm-step-${industryId}-${step.number}`;
  const panelId = `indm-panel-${industryId}-${step.number}`;

  return (
    <li className="indm-step" data-active={isOpen} style={{ "--i": index }}>
      <button
        type="button"
        className="indm-step__head"
        id={headId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onOpen}
      >
        <span className="indm-step__marker">
          {/* One expanding ring, fired by the row becoming active. */}
          <span className="indm-step__ring" aria-hidden="true" />

          <span className="indm-step__number">{step.number}</span>
        </span>

        <span className="indm-step__title">{step.title}</span>

        <ChevronDown
          className="indm-step__chevron"
          size={17}
          strokeWidth={2.1}
          aria-hidden="true"
        />
      </button>

      {/* Height eases through grid-template-rows 0fr → 1fr, so it lands on the
          text's real height — no measurement, and nothing to clip. */}
      <div
        className="indm-step__panel"
        id={panelId}
        role="region"
        aria-labelledby={headId}
        data-open={isOpen}
      >
        <div className="indm-step__panel-inner">
          <p className="indm-step__description">{step.description}</p>
        </div>
      </div>
    </li>
  );
};

export default BlueprintAccordionItem;
