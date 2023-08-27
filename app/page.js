"use client";

import Gradient from "./components/Gradient";
import Chefs from "./components/Chefs";
import Featured from "./components/Featured";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import MovingText from "./components/MovingText";

export default function Home() {
  return (
    <>
      <Gradient />
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
