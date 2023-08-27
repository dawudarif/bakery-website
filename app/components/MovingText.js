import { motion } from "framer-motion";

const MovingText = () => {
  return (
    <div className="relative h-[8rem] w-full overflow-hidden bg-white pt-10 text-7xl font-extrabold uppercase text-black md:sm:text-5xl">
      <motion.span
        initial={{ x: "105%" }}
        animate={{ x: "-105%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="h-inherit absolute top-2 w-full whitespace-nowrap"
      >
        Sweet Fresh Delicious Tasty Sweet Fresh Delicious Tasty Sweet Fresh
        Delicious Tasty Sweet Fresh Delicious Tasty
      </motion.span>
      <motion.span
        initial={{ x: "-105%" }}
        animate={{ x: "105%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="h-inherit absolute bottom-2 w-full whitespace-nowrap"
      >
        Sweet Fresh Delicious Tasty Sweet Fresh Delicious Tasty Sweet Fresh
        Delicious Tasty Sweet Fresh Delicious Tasty
      </motion.span>
    </div>
  );
};

export default MovingText;
