const Header = () => {
  return (
    <header className="absolute top-0 z-10 h-[7rem] w-full">
      <ul className="flex cursor-pointer flex-row items-center justify-end bg-transparent p-5 text-base font-semibold text-white opacity-90">
        <li className="px-2 lg:px-6 ">
          <a href="#">Home</a>
          <div className=" underline-transition h-[2px] w-[100%] cursor-pointer bg-white  opacity-0 transition-all duration-500 ease-in-out"></div>
        </li>
        <li className="px-2 lg:px-6 ">
          About
          <div className=" underline-transition h-[2px] w-[100%] cursor-pointer bg-white  opacity-0 transition-all duration-500 ease-in-out"></div>
        </li>
        <li className="px-2 lg:px-6 ">
          Shop
          <div className=" underline-transition h-[2px] w-[100%] cursor-pointer bg-white  opacity-0 transition-all duration-500 ease-in-out"></div>
        </li>

        <li className="px-2 lg:px-6 ">
          Blog
          <div className=" underline-transition h-[2px] w-[100%] cursor-pointer bg-white  opacity-0 transition-all duration-500 ease-in-out"></div>
        </li>
        <li className="px-2 lg:px-6 ">
          Contact Us
          <div className=" underline-transition h-[2px] w-[100%] cursor-pointer bg-white text-center opacity-0 transition-all duration-500 ease-in-out"></div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
