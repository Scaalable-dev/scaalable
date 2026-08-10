import useSnapCarousel from "../../../hooks/useSnapCarousel";

import ProcessPanelCard from "./ProcessPanelCard";

/* Every stage laid out in a row that snaps, one card per screen. The gesture
   and the index-to-scroll bookkeeping both live in useSnapCarousel; what is
   left here is the markup.

   `touch-action` is deliberately left alone in the CSS. Setting `pan-x` — as
   the stage rail above does — would stop a vertical drag that began on a card
   from scrolling the page, and these cards are tall enough to cover most of
   it. */
const ProcessPanelCarousel = ({ stages, activeIndex, reduceMotion, onSelect }) => {
  const trackRef = useSnapCarousel({ activeIndex, reduceMotion, onSelect });

  return (
    <div
      className="proc-swipe__track"
      ref={trackRef}
      role="group"
      aria-label="Delivery stages — swipe to move between them"
    >
      {stages.map((stage, index) => (
        <article
          className="proc-swipe__slide"
          key={stage.number}
          aria-label={`Stage ${Number(stage.number)} of ${stages.length}: ${stage.title}`}
          aria-current={index === activeIndex ? "true" : undefined}
        >
          <ProcessPanelCard stage={stage} />
        </article>
      ))}
    </div>
  );
};

export default ProcessPanelCarousel;
