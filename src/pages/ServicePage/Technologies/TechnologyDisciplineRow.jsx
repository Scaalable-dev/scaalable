import { memo } from "react";
import { ChevronDown } from "lucide-react";

import ActiveStackSignal from "./ActiveStackSignal";
import TechnologyToolGrid from "./TechnologyToolGrid";

/* How many tools the collapsed row previews. */
const PREVIEW_COUNT = 3;

const TechnologyDisciplineRow = ({
  discipline,
  index,
  isOpen,
  selectedTool,
  magnetic,
  onToggle,
  onSelectTool,
  onKeyDown,
  registerRow,
}) => {
  const Icon = discipline.icon;
  const drawerId = `tech-drawer-${discipline.id}`;

  return (
    <li className="tech-row" data-open={isOpen}>
      {/* Accent rail down the left edge, grown from the centre outward. */}
      <span className="tech-row__rail" aria-hidden="true" />

      <button
        type="button"
        className="tech-row__head"
        ref={(el) => registerRow(index, el)}
        aria-expanded={isOpen}
        aria-controls={drawerId}
        onClick={() => onToggle(discipline.id)}
        onKeyDown={(event) => onKeyDown(index, event)}
      >
        <span className="tech-row__number">{discipline.number}</span>

        <span className="tech-row__identity">
          <span className="tech-row__icon">
            <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
          </span>

          <span className="tech-row__name">{discipline.name}</span>
        </span>

        {/* Dimmed away once the full stack is on screen below it. */}
        <span className="tech-row__preview">
          {discipline.tools.slice(0, PREVIEW_COUNT).join(" · ")}
        </span>

        <ChevronDown
          className="tech-row__chevron"
          size={17}
          strokeWidth={2}
          aria-hidden="true"
        />
      </button>

      {/* Height eases through grid-template-rows 0fr → 1fr, so it lands on the
          grid's real height at any column count — no measurement, and nothing
          to clip when a long tool name wraps. */}
      <div className="tech-row__drawer" id={drawerId} data-open={isOpen}>
        <div className="tech-row__drawer-inner">
          <div className="tech-row__body">
            {/* One-shot sweep, started by the row opening. */}
            <span className="tech-row__scan" aria-hidden="true" />

            <ActiveStackSignal count={discipline.tools.length} />

            <TechnologyToolGrid
              discipline={discipline}
              selectedTool={selectedTool}
              magnetic={magnetic}
              onSelectTool={onSelectTool}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

/* All nine rows stay mounted. Memoising means opening one re-renders the two
   rows whose state actually changed, not the whole library. */
export default memo(TechnologyDisciplineRow);
