import React from "react";
import { PiQuotesFill } from "react-icons/pi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const TestimonialsCarousel = ({ testimonials, getStars }) => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        spaceBetween={20}
        // slidesPerView={3}
        // centeredSlides={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        navigation={true}
        breakpoints={{
          // When the screen width is less than 768px, show only one slide
          1100: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 3,
          },
        }}
        className="swiper-container max-w-[90%]"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide flex w-[4rem] flex-col items-start justify-center bg-white sm:p-10 md:sm:h-max lg:md:p-20 lg:h-[10rem]"
          >
            <div className="mb-5">
              <PiQuotesFill className="text-6xl md:sm:text-2xl" />
              <div>{testimonial.text}</div>
              <div className="font-semibold italic">- {testimonial.author}</div>
              <div className="text-yellow-500">
                {getStars(testimonial.rating)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialsCarousel;
