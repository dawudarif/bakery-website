import { motion } from "framer-motion";
import { imagesArray } from "../Data/ImagesArray";

const Featured = () => {
  return (
    <div className="flex h-max w-full flex-col flex-wrap items-center justify-center bg-yellow-600 p-10 px-0">
      <div className="mb-10 text-3xl">
        Featured
        <div className="m-[2px] ml-4 h-[2px] w-20 bg-red-800"></div>
        <div className="ml-12 h-[2px] w-20 bg-red-800"></div>
      </div>

      <div
        className="grid h-[80%] w-[80%] grid-cols-3 gap-3 text-center 
          "
      >
        {imagesArray.map((image) => (
          <motion.span
            initial={{
              y: 80,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "tween",
            }}
            className="relative inline-block "
            key={image.url}
          >
            <img
              alt={image.name}
              src={image.url}
              className="h-[30rem] w-[30rem] rounded-md bg-cover"
            />
            <h4 className="absolute bottom-0 left-0 right-0 top-0 m-auto rounded bg-black bg-opacity-70 text-black opacity-0 transition-opacity duration-300 ease-in-out">
              <p className="mt-20 bg-white md:sm:text-xl lg:text-3xl ">
                {image.name}
              </p>
            </h4>
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Featured;
