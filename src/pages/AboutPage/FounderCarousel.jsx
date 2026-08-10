import FounderCard from "./FounderCard";
import { founders } from "./aboutData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";

import { ArrowLeft, ArrowRight, MoveHorizontal } from "lucide-react";

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
        /* Swiper's default is "wrapper", which only listens on the strip that
           holds the slides — the dots, the hint and the panel's bottom inset
           are all outside it, so a thumb landing there did nothing. Listening
           on the container makes the whole carousel one gesture surface. */
        touchEventsTarget="container"
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={50}
        speed={500}
        loop={true}
        /* Every slide used to be as tall as the longest bio, which left a
           screen's worth of empty space under the shorter one — most of a
           phone viewport. The height now follows the slide that is showing,
           and Swiper animates the change. */
        autoHeight={true}
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

        {/* Inside the carousel, not beside it. Swiper only listens for the
            gesture on its own element, so a footer rendered as a sibling
            looked swipeable and did nothing — a thumb landing on the dots or
            the space under them got no response. `container-end` puts it in
            the same element that handles the touch, and the padding below
            carries that surface out to the panel's bottom edge. */}
        <div className="founder-carousel__footer" slot="container-end">
          <div className="founder-carousel__pagination"></div>

          <p className="founder-carousel__hint" aria-hidden="true">
            <MoveHorizontal size={15} strokeWidth={2} />
            Swipe to meet the team
          </p>
        </div>
      </Swiper>

      <button className="founder-carousel__next" aria-label="Next founder">
        <ArrowRight size={20} />
      </button>
    </div>
  );
}

export default FounderCarousel;
