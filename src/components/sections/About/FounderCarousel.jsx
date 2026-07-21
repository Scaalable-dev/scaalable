import FounderCard from "./FounderCard";
import { founders } from "./aboutData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";

import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FounderCarousel() {
  return (
    <div className="founder-carousel">
      <button className="founder-carousel__prev" aria-label="Previous founder">
        <ArrowLeft size={20} />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Keyboard, A11y]}
        touchRatio={1.5}
        touchAngle={45}
        threshold={8}
        longSwipes={true}
        longSwipesRatio={0.2}
        longSwipesMs={250}
        followFinger={true}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={50}
        speed={500}
        loop={true}
        autoHeight={false}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        navigation={{
          prevEl: ".founder-carousel__prev",
          nextEl: ".founder-carousel__next",
        }}
        pagination={{
          el: ".founder-carousel__pagination",
          clickable: true,
        }}
      >
        {founders.map((founder) => (
          <SwiperSlide key={founder.id}>
            <FounderCard founder={founder} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="founder-carousel__next" aria-label="Next founder">
        <ArrowRight size={20} />
      </button>

      <div className="founder-carousel__pagination"></div>
    </div>
  );
}

export default FounderCarousel;
