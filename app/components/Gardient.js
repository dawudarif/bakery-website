import { useMotionValue } from "framer-motion";
const Gardient = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    let { left, top } = currentTarget?.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      className="mx-w-lg group relative flex h-max min-h-[50rem] w-full items-center justify-center overflow-hidden border-gray-700 border-transparent bg-gray-900 p-8"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px bg-white opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px,rgb(14 165 233/.15),transparent 80%)`,
        }}
      ></motion.div>
      <div className="mt-[10rem] flex flex-wrap items-center justify-center">
        <AnimatedText />
        <img
          src="https://images.unsplash.com/photo-1519915051686-9fe6ee13633e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt="img"
          className="h-[35rem] w-[30rem] rounded-lg transition-all duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Gardient;