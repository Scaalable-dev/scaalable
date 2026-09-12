import DeliverablesList from "./DeliverablesList";

/* A single stage's content. Extracted so the desktop panel and the small
   screen carousel render exactly the same card — the carousel shows eight of
   these side by side, and the two would otherwise drift apart the first time
   a field was added here. */
const ProcessPanelCard = ({ stage }) => (
  <div className="proc-panel__body">
    <div className="proc-panel__main">
      <div className="proc-panel__head">
        <span className="proc-panel__number">{stage.number}</span>

        <span className="proc-panel__phase">{stage.phase}</span>
      </div>

      <h3 className="proc-panel__title">{stage.title}</h3>

      <p className="proc-panel__description">{stage.description}</p>
    </div>

    <div className="proc-panel__aside">
      <p className="proc-panel__aside-label">What You Receive</p>

      <DeliverablesList deliverables={stage.deliverables} />
    </div>
  </div>
);

export default ProcessPanelCard;
