import "./IndustriesMobile.css";

import useMediaQuery from "../../../hooks/useMediaQuery";

import MobileIndustryCarousel from "./MobileIndustryCarousel";
import SelectedIndustryCard from "./SelectedIndustryCard";
import MobileBlueprintAccordion from "./MobileBlueprintAccordion";

import { industriesIntro } from "./industriesData";

/* Three columns of two rows is the default page. Under the narrow breakpoint
   the labels get cramped, so the page drops to two columns and the industries
   repaginate around it. */
const NARROW_QUERY = "(max-width: 349px)";

const WIDE_PAGE = { perPage: 6, columns: 3 };
const NARROW_PAGE = { perPage: 4, columns: 2 };

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
  const isNarrow = useMediaQuery(NARROW_QUERY);
  const { perPage, columns } = isNarrow ? NARROW_PAGE : WIDE_PAGE;

  return (
    <div className="indm" data-phase={phase}>
      <div className="indm-intro">
        <span className="indm-intro__eyebrow">
          {industriesIntro.index} <i>/</i> {industriesIntro.badge}
        </span>

        <h2 className="indm-intro__title">{industriesIntro.title}</h2>

        <p className="indm-intro__description">
          {industriesIntro.description}
        </p>
      </div>

      <MobileIndustryCarousel
        industries={industries}
        activeIndex={activeIndex}
        perPage={perPage}
        columns={columns}
        reduceMotion={reduceMotion}
        onSelect={onSelect}
        onInteracting={onInteracting}
      />

      <SelectedIndustryCard
        industry={industry}
        position={activeIndex + 1}
        total={industries.length}
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
