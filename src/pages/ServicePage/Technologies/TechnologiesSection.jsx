import { useCallback, useMemo, useState } from "react";

import "./Technologies.css";

import Container from "../../../components/ui/Container";
import useMediaQuery from "../../../hooks/useMediaQuery";

import TechnologyLibrary from "./TechnologyLibrary";
import TechnologyStatus from "./TechnologyStatus";

import { disciplines, technologiesIntro } from "./technologiesData";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/* The magnetic response is a mouse affordance. A device without hover has no
   cursor to answer, and a coarse pointer would only ever trigger it by
   accident on the way to a tap. */
const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";

const TechnologiesSection = () => {
  const reduceMotion = useMediaQuery(REDUCED_MOTION_QUERY);
  const finePointer = useMediaQuery(FINE_POINTER_QUERY);

  const [openId, setOpenId] = useState(disciplines[0].id);
  const [selected, setSelected] = useState(null);

  /* Stable, so the memoised rows only re-render when their own props change. */
  const handleToggle = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const handleSelectTool = useCallback((disciplineId, tool) => {
    const discipline = disciplines.find((item) => item.id === disciplineId);

    setSelected({
      disciplineId,
      disciplineName: discipline.name,
      tool,
    });
  }, []);

  const openDiscipline = disciplines.find((item) => item.id === openId) ?? null;

  const totalTools = useMemo(
    () => disciplines.reduce((sum, item) => sum + item.tools.length, 0),
    [],
  );

  return (
    <section className="tech section-wash" id="technologies">
      <Container>
        {/* ------------------------ Introduction ------------------------ */}
        <div className="tech-intro">
          <span className="tech-intro__eyebrow">
            {technologiesIntro.eyebrow}
          </span>

          <h2 className="tech-intro__title">{technologiesIntro.title}</h2>

          <div className="tech-intro__foot">
            <p className="tech-intro__description">
              {technologiesIntro.description}
            </p>

            <span className="tech-intro__badge">
              {disciplines.length} Technology Disciplines
            </span>
          </div>
        </div>

        {/* ------------------------ Library ------------------------ */}
        <TechnologyLibrary
          disciplines={disciplines}
          openId={openId}
          selected={selected}
          magnetic={finePointer && !reduceMotion}
          onToggle={handleToggle}
          onSelectTool={handleSelectTool}
        />

        {/* ------------------------ Status ------------------------ */}
        <TechnologyStatus
          openDiscipline={openDiscipline}
          selected={selected}
          totalTools={totalTools}
          totalDisciplines={disciplines.length}
        />
      </Container>
    </section>
  );
};

export default TechnologiesSection;
