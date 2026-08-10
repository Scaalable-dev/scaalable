import "./IndustriesMobile.css";

import Badge from "../../../components/ui/Badge";
import IndustrySelector from "./IndustrySelector";
import IndustryCardCarousel from "./IndustryCardCarousel";
import MobileBlueprintAccordion from "./MobileBlueprintAccordion";

import { industriesIntro } from "./industriesData";

const MobileIndustriesSection = ({
  industries,
  industry,
  activeIndex,
  openStep,
  phase,
  reduceMotion,
  onSelect,
  onOpenStep,
  onInteracting,
}) => {
  return (
    <div className="indm" data-phase={phase}>
      <div className="indm-intro">
        {/* The same badge the wide layout carries — the section should not
            introduce itself differently just because the screen is narrow. */}
        <Badge>{industriesIntro.badge}</Badge>

        <h2 className="indm-intro__title">{industriesIntro.title}</h2>

        <p className="indm-intro__description">
          {industriesIntro.description}
        </p>
      </div>

      {/* The same rail the wide layout uses — one line, swiped rather than
          paged, so a thumb never has to hunt across a grid. */}
      <div className="indm-pick">
        <span className="indm-pick__label">Choose an Industry</span>

        <IndustrySelector
          industries={industries}
          activeIndex={activeIndex}
          onSelect={onSelect}
          onInteracting={onInteracting}
        />
      </div>

      {/* Swipeable, so the card can be moved through directly rather than
          only by tapping the rail above it. */}
      <IndustryCardCarousel
        industries={industries}
        activeIndex={activeIndex}
        reduceMotion={reduceMotion}
        onSelect={onSelect}
        onInteracting={onInteracting}
      />

      <MobileBlueprintAccordion
        industry={industry}
        openStep={openStep}
        onOpenStep={onOpenStep}
      />
    </div>
  );
};

export default MobileIndustriesSection;
