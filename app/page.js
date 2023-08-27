"use client";

import { useMotionValue } from "framer-motion";
import Gardient from "./components/Gardient";
import Chefs from "./components/LandingPage/Chefs";
import Featured from "./components/LandingPage/Featured";
import Testimonials from "./components/LandingPage/Testimonials";
import WhyUs from "./components/LandingPage/WhyUs";
import MovingText from "./components/MovingText";

export default function Home() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    let { left, top } = currentTarget?.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };
  return (
    <>
      <Gardient />

      <section>
        <Featured />
        <Chefs />
        <MovingText />
        <Testimonials />
        <WhyUs />
      </section>
    </>
  );
}
