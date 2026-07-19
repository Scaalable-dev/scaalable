import { useState } from "react";

import FounderCard from "./FounderCard";
import { founders } from "./aboutData";
import { ArrowLeft, ArrowRight } from "lucide-react";

function FounderCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevious = () => {
    if (currentIndex === 0) return;

    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex === founders.length - 1) return;

    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="founder-carousel">
      <div className="founder-carousel__controls">
        <button
          className="founder-carousel__button"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          aria-label="Previous Founder"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="founder-carousel__indicator">
          <span className="founder-carousel__current">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>

          <span className="founder-carousel__divider">/</span>

          <span className="founder-carousel__total">
            {String(founders.length).padStart(2, "0")}
          </span>
        </div>

        <button
          className="founder-carousel__button"
          onClick={handleNext}
          disabled={currentIndex === founders.length - 1}
          aria-label="Next Founder"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <FounderCard founder={founders[currentIndex]} />
    </div>
  );
}

export default FounderCarousel;
