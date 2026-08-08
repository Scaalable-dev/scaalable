const TechnologyStatus = ({ openDiscipline, selected, totalTools, totalDisciplines }) => {
  const detail = selected
    ? `${selected.tool} · ${selected.disciplineName}`
    : openDiscipline
      ? `Explore a tool inside ${openDiscipline.name}`
      : "Open a discipline to explore its stack";

  const count = openDiscipline
    ? `${openDiscipline.tools.length} tools in ${openDiscipline.name}`
    : `${totalTools} tools across ${totalDisciplines} disciplines`;

  return (
    <div className="tech-status">
      {/* The visible line is the live region — the text a sighted user reads
          after a selection is exactly what gets announced. */}
      <p className="tech-status__detail" aria-live="polite">
        <span className="tech-status__dot" aria-hidden="true" />
        {detail}
      </p>

      <p className="tech-status__count">{count}</p>
    </div>
  );
};

export default TechnologyStatus;
