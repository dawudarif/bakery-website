"use client";

import Gardient from "./components/Gardient";
import Chefs from "./components/LandingPage/Chefs";
import Featured from "./components/LandingPage/Featured";
import Testimonials from "./components/LandingPage/Testimonials";
import WhyUs from "./components/LandingPage/WhyUs";
import MovingText from "./components/MovingText";

export default function Home() {
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
