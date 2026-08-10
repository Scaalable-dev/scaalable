import { useRef } from "react";

import "./WorkflowCard.css";

/**
 * One delivery stage. A real <button>, so keyboard and touch come for free and
 * the pressed state is exposed to assistive tech rather than implied by colour.
 */
const WorkflowCard = ({ stage, isSelected, onSelect, onEngage, onRelease }) => {
  const dotRef = useRef(null);
  const Icon = stage.icon;

  /* The connector endpoint is where the card's energy enters the stream. It is
     measured on engage only — never per frame. */
  const reportAnchor = () => {
    const rect = dotRef.current?.getBoundingClientRect();

    /* A DOMRect is always truthy, so a null check alone would let the all-zero
       rect of the display:none connector (below 992px) through and emit the
       spark at negative canvas coordinates. */
    if (!rect || rect.width === 0) return;

    onEngage?.(stage, {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
  };

  return (
    <div
      className={`wf-card wf-card--${stage.side} ${isSelected ? "is-selected" : ""}`.trim()}
      style={{
        "--wf-anchor": stage.anchor,
        /* Measured against the real box position, so the band adapts to the
           viewport height instead of assuming one. */
        "--wf-top": `var(--wf-top-${stage.step}, 50%)`,
        /* Stacked layout only: one grid row per card, so the six space evenly
           down the panel instead of pairing up into three rows. */
        "--wf-row": stage.step,
        "--wf-accent": stage.accent.token,
        "--wf-accent-rgb": stage.accent.rgb,
        /* The per-stage length measured against the funnel edge. The stylesheet
           maps it onto --wf-connector-w, so a media query can substitute its
           own length — an inline custom property could never be overridden. */
        "--wf-conn-len": `var(--wf-conn-${stage.step}, 34px)`,
        "--wf-float-delay": `${stage.step * -1.1}s`,
      }}
    >
      <button
        type="button"
        className="wf-card__button"
        aria-pressed={isSelected}
        aria-label={`${stage.title} — ${stage.subtitle}. Step ${stage.step} of 6.`}
        onClick={() => onSelect(stage)}
        onMouseEnter={reportAnchor}
        onFocus={reportAnchor}
        onMouseLeave={() => onRelease?.()}
        onBlur={() => onRelease?.()}
      >
        <span className="wf-card__sheen" aria-hidden="true" />

        <span className="wf-card__badge" aria-hidden="true">
          {String(stage.step).padStart(2, "0")}
        </span>

        <span className="wf-card__icon" aria-hidden="true">
          <Icon size={17} strokeWidth={2} />
        </span>

        <span className="wf-card__text">
          <span className="wf-card__title">{stage.title}</span>
          <span className="wf-card__subtitle">{stage.subtitle}</span>
        </span>

        {/* Selection carries a mark and a word, not just a colour change. */}
        <span className="wf-card__state" aria-hidden="true">
          <span className="wf-card__state-dot" />
          <span className="wf-card__state-label">ACTIVE</span>
        </span>
      </button>

      <span className="wf-card__connector" aria-hidden="true">
        <span className="wf-card__connector-pulse" />
        <span className="wf-card__connector-dot" ref={dotRef} />
      </span>
    </div>
  );
};

export default WorkflowCard;
