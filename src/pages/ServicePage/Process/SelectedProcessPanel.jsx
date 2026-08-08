import DeliverablesList from "./DeliverablesList";
import ProcessNavigation from "./ProcessNavigation";

const SelectedProcessPanel = ({ stages, stage, activeIndex, phase, onSelect }) => {
  return (
    <div className="proc-panel" data-phase={phase}>
      {/* Both keyed, so their one-shot animations replay on every change: a
          highlight crossing the panel and a brief lift in edge brightness. */}
      <span className="proc-panel__scan" key={`scan-${stage.number}`} aria-hidden="true" />
      <span className="proc-panel__edge" key={`edge-${stage.number}`} aria-hidden="true" />

      <div className="proc-panel__body" key={stage.number}>
        <div className="proc-panel__main">
          <div className="proc-panel__head">
            <span className="proc-panel__number">{stage.number}</span>

            <span className="proc-panel__phase">{stage.phase}</span>
          </div>

          <h3 className="proc-panel__title">{stage.title}</h3>

          <p className="proc-panel__description">{stage.description}</p>
        </div>

        <div className="proc-panel__aside">
          <h4 className="proc-panel__aside-label">What You Receive</h4>

          <DeliverablesList deliverables={stage.deliverables} />
        </div>
      </div>

      <ProcessNavigation
        stages={stages}
        activeIndex={activeIndex}
        onSelect={onSelect}
      />
    </div>
  );
};

export default SelectedProcessPanel;
