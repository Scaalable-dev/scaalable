import { useCallback } from "react";

import TechnologyToolButton from "./TechnologyToolButton";

const TechnologyToolGrid = ({
  discipline,
  selectedTool,
  magnetic,
  onSelectTool,
}) => {
  /* Bound to this discipline once rather than in each button's onClick: an
     inline arrow would be a new function on every render and would defeat the
     memo on every tool button below it. */
  const handleSelect = useCallback(
    (tool) => onSelectTool(discipline.id, tool),
    [discipline.id, onSelectTool],
  );

  return (
    <ul className="tech-grid">
      {discipline.tools.map((tool, i) => (
        <TechnologyToolButton
          key={tool}
          tool={tool}
          index={i}
          discipline={discipline.name}
          isSelected={tool === selectedTool}
          magnetic={magnetic}
          onSelect={handleSelect}
        />
      ))}
    </ul>
  );
};

export default TechnologyToolGrid;
