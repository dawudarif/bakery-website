import { testimonialsArray } from "./Data/TestimonialsArray";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonials = () => {
  const getStars = (rating) => {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "★";
    }
    return stars;
  };

  return (
    <div className="flex h-[40rem] w-[100%] flex-col items-center justify-center bg-green-600 p-10">
      <div className="mb-20 flex items-center justify-center">
        <div className="mb-10 text-3xl font-bold">
          TESTIMONIALS
          <div className="m-[2px] ml-10 h-[2px] w-20 bg-red-800"></div>
          <div className="ml-24 h-[2px] w-20 bg-red-800"></div>
        </div>
      </div>
      <TestimonialCarousel
        testimonials={testimonialsArray}
        getStars={getStars}
      />
    </div>
  );
};

export default Testimonials;
