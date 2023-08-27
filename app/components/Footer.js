import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="sm:md:jsutify-start relative flex max-h-max min-h-[30rem] flex-wrap gap-[5rem] bg-[#191817] p-[3rem] text-sm text-white lg:flex-nowrap lg:justify-center lg:gap-[18rem] lg:p-[5rem]">
      <div>
        <h3 className="mb-5 text-xl font-semibold">COMPANY</h3>
        <ul className="flex cursor-pointer flex-col gap-1">
          <li className="underline-offset-2 hover:underline">Contact Us </li>
          <li className="underline-offset-2 hover:underline">FAQs </li>
          <li className="underline-offset-2 hover:underline">Warranty </li>
          <li className="underline-offset-2 hover:underline">Coverage </li>
          <li className="underline-offset-2 hover:underline">
            Returns & Refunds
          </li>
          <li className="underline-offset-2 hover:underline">
            Shipping Policy
          </li>
          <li className="underline-offset-2 hover:underline">Privacy Policy</li>
          <li className="underline-offset-2 hover:underline">
            Search Terms of Service
          </li>
          <li className="underline-offset-2 hover:underline">Refund policy</li>
        </ul>
      </div>
      <div>
        <h3 className="mb-5 text-xl font-semibold">SHOP</h3>
        <ul className="cursor-pointer">
          <li>
            <p className="underline-offset-2 hover:underline">Breads</p>
            <ol className="flex list-disc flex-col gap-1 pl-6">
              <li className="underline-offset-2 hover:underline">Baguette</li>
              <li className="underline-offset-2 hover:underline">Brioche</li>
              <li className="underline-offset-2 hover:underline">Ciabatta</li>
            </ol>
          </li>
          <li>
            <p className="underline-offset-2 hover:underline">Cakes</p>
            <ol className="flex list-disc flex-col gap-1 pl-6">
              <li className="underline-offset-2 hover:underline">
                Carrot Cake
              </li>
              <li className="underline-offset-2 hover:underline">
                Chocolate Cake
              </li>
              <li className="underline-offset-2 hover:underline">
                Red Velvet Cake
              </li>
            </ol>
          </li>
          <li>
            <p className="underline-offset-2 hover:underline">Pastries</p>
            <ol className="flex list-disc flex-col gap-1 pl-6">
              <li className="underline-offset-2 hover:underline">Croissant</li>
              <li className="underline-offset-2 hover:underline">Danish</li>
              <li className="underline-offset-2 hover:underline">Éclair</li>
            </ol>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-5 text-xl font-semibold">JOIN THE TEAM</h3>
        <p>
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>
        <form className="flex flex-col gap-2 py-3">
          <input
            type="email"
            placeholder="Enter your email here."
            className="focuss:bg-black focuss:border-2 focuss:border-white focuss:transition-all focuss:ease-in h-[2.5rem] border-2 border-white bg-[#282723] p-3 sm:lg:w-[10rem] lg:w-[18rem]"
          />
          <button
            type="submit"
            onClick={(e) => e.preventDefault()}
            className="border-sm h-[3rem] w-[6rem] border-white bg-[#282723] hover:border-2 hover:border-white hover:bg-black hover:transition-all hover:ease-in "
          >
            Submit
          </button>
          <div
            className="absolute bottom-4 right-6 flex h-[3rem] w-[3rem] items-center justify-center rounded-md bg-stone-200 text-black "
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
