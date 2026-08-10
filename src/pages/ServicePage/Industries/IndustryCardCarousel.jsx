import useSnapCarousel from "../../../hooks/useSnapCarousel";

import SelectedIndustryCard from "./SelectedIndustryCard";

/* Every industry laid out in a row that snaps, one card per screen — the same
   gesture the stage rail above it already answers to, so the two halves of
   this section are swiped the same way.

   The blueprint below is not part of the track. It is the answer to whichever
   card is showing rather than a peer of it, and carrying fifteen copies of an
   accordion across the swipe would cost far more than it reads. Selecting
   here re-renders it in place.

   `onInteracting` holds the section's autoplay off for the length of a
   gesture; the settling swipe then calls onSelect, which the section treats as
   a manual pick and holds autoplay off for much longer. */
const IndustryCardCarousel = ({
  industries,
  activeIndex,
  reduceMotion,
  onSelect,
  onInteracting,
}) => {
  const trackRef = useSnapCarousel({
    activeIndex,
    reduceMotion,
    onSelect,
    onInteracting,
  });

  return (
    <div
      className="indm-swipe__track"
      ref={trackRef}
      role="group"
      aria-label="Industries — swipe to move between them"
    >
      {industries.map((industry, index) => (
        <div
          className="indm-swipe__slide"
          key={industry.id}
          aria-current={index === activeIndex ? "true" : undefined}
        >
          <SelectedIndustryCard
            industry={industry}
            position={index + 1}
            total={industries.length}
          />
        </div>
      ))}
    </div>
  );
};

export default IndustryCardCarousel;
