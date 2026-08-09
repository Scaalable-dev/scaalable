import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

const ProcessNavigation = ({ stages, activeIndex, onSelect }) => {
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === stages.length - 1;

  const nextStage = isLast ? stages[0] : stages[activeIndex + 1];

  return (
    <div className="proc-nav">
      <span className="proc-nav__hint">
        {isLast
          ? "Framework complete · revisit any stage"
          : `Next: ${nextStage.title}`}
      </span>

      <div className="proc-nav__buttons">
        <button
          type="button"
          className="proc-nav__button"
          onClick={() => onSelect(activeIndex - 1)}
          disabled={isFirst}
          aria-label="Go to the previous stage"
        >
          <ArrowLeft size={16} strokeWidth={2.1} aria-hidden="true" />
          Previous
        </button>

        {/* The last stage loops back rather than dead-ending, so the label has
            to say so — an arrow pointing forward would be a lie. */}
        <button
          type="button"
          className="proc-nav__button"
          data-variant="primary"
          onClick={() => onSelect(isLast ? 0 : activeIndex + 1)}
          aria-label={
            isLast ? "Return to stage 1" : `Go to ${nextStage.title}`
          }
        >
          {isLast ? "Back to Start" : "Next"}

          {isLast ? (
            <RotateCcw size={16} strokeWidth={2.1} aria-hidden="true" />
          ) : (
            <ArrowRight size={16} strokeWidth={2.1} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProcessNavigation;
