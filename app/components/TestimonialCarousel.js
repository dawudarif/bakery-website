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
            slidesPerView: 1,
          },
        }}
        className="swiper-container w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide pb-15 flex flex-col items-start justify-center bg-white p-10 md:sm:h-max md:sm:w-[6rem] md:p-20 lg:h-[10rem] lg:w-[4rem] lg:p-20"
          >
            <PiQuotesFill className="text-5xl" />
            <div>{testimonial.text}</div>
            <div className="font-semibold italic">- {testimonial.author}</div>
            <div className="text-yellow-500">
              {getStars(testimonial.rating)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialsCarousel;
