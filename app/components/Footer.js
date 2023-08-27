import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='bg-[#191817] relative text-white text-sm min-h-[30rem] max-h-max flex lg:justify-center lg:flex-nowrap flex-wrap sm:md:jsutify-start p-[5rem] lg:gap-[18rem] gap-[5rem]'>
      <div>
        <h3 className='text-xl font-semibold mb-5'> COMPANY</h3>
        <ul className='flex gap-1 flex-col cursor-pointer'>
          <li className='hover:underline underline-offset-2'>Contact Us </li>
          <li className='hover:underline underline-offset-2'>FAQs </li>
          <li className='hover:underline underline-offset-2'>Warranty </li>
          <li className='hover:underline underline-offset-2'>Coverage </li>
          <li className='hover:underline underline-offset-2'>
            Returns & Refunds
          </li>
          <li className='hover:underline underline-offset-2'>
            Shipping Policy
          </li>
          <li className='hover:underline underline-offset-2'>Privacy Policy</li>
          <li className='hover:underline underline-offset-2'>
            Search Terms of Service
          </li>
          <li className='hover:underline underline-offset-2'>Refund policy</li>
        </ul>
      </div>
      <div>
        <h3 className='text-xl font-semibold mb-5'>SHOP</h3>
        <ul className='cursor-pointer'>
          <li>
            <p className='hover:underline underline-offset-2'>Breads</p>
            <ol className='pl-6 list-disc flex gap-1 flex-col'>
              <li className='hover:underline underline-offset-2'>Baguette</li>
              <li className='hover:underline underline-offset-2'>Brioche</li>
              <li className='hover:underline underline-offset-2'>Ciabatta</li>
            </ol>
          </li>
          <li>
            <p className='hover:underline underline-offset-2'>Cakes</p>
            <ol className='pl-6 list-disc flex gap-1 flex-col'>
              <li className='hover:underline underline-offset-2'>
                Carrot Cake
              </li>
              <li className='hover:underline underline-offset-2'>
                Chocolate Cake
              </li>
              <li className='hover:underline underline-offset-2'>
                Red Velvet Cake
              </li>
            </ol>
          </li>
          <li>
            <p className='hover:underline underline-offset-2'>Pastries</p>
            <ol className='pl-6 list-disc flex gap-1 flex-col'>
              <li className='hover:underline underline-offset-2'>Croissant</li>
              <li className='hover:underline underline-offset-2'>Danish</li>
              <li className='hover:underline underline-offset-2'>Éclair</li>
            </ol>
          </li>
        </ul>
      </div>
      <div>
        <h3 className='text-xl font-semibold mb-5'>JOIN THE TEAM</h3>
        <p>
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>
        <form className='flex flex-col gap-2 py-3'>
          <input
            type='email'
            placeholder='Enter your email here.'
            className='h-[2.5rem] lg:w-[18rem] sm:lg:w-[10rem] p-3 bg-[#282723] border-2 border-white focuss:bg-black focuss:border-2 focuss:border-white focuss:transition-all focuss:ease-in'
          />
          <button
            type='submit'
            onClick={(e) => e.preventDefault()}
            className='bg-[#282723] h-[3rem] w-[6rem] border-white border-sm hover:bg-black hover:border-2 hover:border-white hover:transition-all hover:ease-in '
          >
            Submit
          </button>
          <div
            className='absolute right-6 bottom-4 h-[3rem] w-[3rem] bg-stone-200 text-black rounded-md flex justify-center items-center '
            onClick={scrollToTop}
          >
            <FaArrowUp size={30} />
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
