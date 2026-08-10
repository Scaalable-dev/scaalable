import ProcessNavigation from "./ProcessNavigation";
import ProcessPanelCard from "./ProcessPanelCard";
import ProcessPanelCarousel from "./ProcessPanelCarousel";

const SelectedProcessPanel = ({
  stages,
  stage,
  activeIndex,
  phase,
  isCompact,
  reduceMotion,
  onSelect,
}) => {
  /* Small screens get every stage in a row that snaps, so the card can be
     swiped. The cross-fade the desktop panel uses is dropped there rather
     than layered on top: the swipe is already the transition, and fading the
     card the finger is holding reads as a glitch. */
  if (isCompact) {
    return (
      <div className="proc-swipe">
        <ProcessPanelCarousel
          stages={stages}
          activeIndex={activeIndex}
          reduceMotion={reduceMotion}
          onSelect={onSelect}
        />

        <ProcessNavigation
          stages={stages}
          activeIndex={activeIndex}
          onSelect={onSelect}
        />
      </div>
    );
  }

  return (
    <div className="proc-panel" data-phase={phase}>
      {/* Both keyed, so their one-shot animations replay on every change: a
          highlight crossing the panel and a brief lift in edge brightness. */}
      <span className="proc-panel__scan" key={`scan-${stage.number}`} aria-hidden="true" />
      <span className="proc-panel__edge" key={`edge-${stage.number}`} aria-hidden="true" />

      <ProcessPanelCard stage={stage} key={stage.number} />

      <ProcessNavigation
        stages={stages}
        activeIndex={activeIndex}
        onSelect={onSelect}
      />
    </div>
  );
};

export default SelectedProcessPanel;
