import { useCallback, useRef } from "react";

import TechnologyDisciplineRow from "./TechnologyDisciplineRow";

const TechnologyLibrary = ({
  disciplines,
  openId,
  selected,
  magnetic,
  onToggle,
  onSelectTool,
}) => {
  const rowRefs = useRef([]);

  /* Stable across renders, so memoised rows are not invalidated every time a
     different row opens. */
  const registerRow = useCallback((index, element) => {
    rowRefs.current[index] = element;
  }, []);

  /* Arrows move focus between rows; Enter and Space still do the opening,
     which is what a stack of disclosure buttons is expected to do. */
  const handleKeyDown = useCallback(
    (index, event) => {
      const last = disciplines.length - 1;
      let next = null;

      if (event.key === "ArrowDown") next = index === last ? 0 : index + 1;
      else if (event.key === "ArrowUp") next = index === 0 ? last : index - 1;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = last;

      if (next === null) return;

      event.preventDefault();
      rowRefs.current[next]?.focus();
    },
    [disciplines.length],
  );

  return (
    <ul className="tech-library">
      {disciplines.map((discipline, i) => (
        <TechnologyDisciplineRow
          key={discipline.id}
          discipline={discipline}
          index={i}
          isOpen={discipline.id === openId}
          /* Only the row holding the selection is told about it, so choosing a
             tool re-renders that row rather than all nine. */
          selectedTool={
            selected?.disciplineId === discipline.id ? selected.tool : null
          }
          magnetic={magnetic}
          onToggle={onToggle}
          onSelectTool={onSelectTool}
          onKeyDown={handleKeyDown}
          registerRow={registerRow}
        />
      ))}
    </ul>
  );
};

export default TechnologyLibrary;
