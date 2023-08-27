import { testimonialsArray } from '../Data/TestimonialsArray';
import TestimonialCarousel from '../TestimonialCarousel';

const Testimonials = () => {
  const getStars = (rating) => {
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += '★';
    }
    return stars;
  };

  return (
    <div className='h-[40rem] w-[100%] bg-green-600 flex justify-center items-center p-10 flex-col'>
      <div className='flex justify-center items-center mb-20'>
        <div className='mb-10 text-3xl font-bold'>
          TESTIMONIALS
          <div className='bg-red-800 h-[2px] w-20 m-[2px] ml-10'></div>
          <div className='bg-red-800 h-[2px] w-20 ml-24'></div>
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
