"use client";

import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <div className="relative h-[50rem] w-[100%]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />
      <div className="flex h-max min-h-[50rem] w-[100%] flex-col items-center justify-center bg-black bg-opacity-70 p-20 md:sm:flex-row md:sm:flex-wrap">
        <div className="mb-32 text-4xl text-white">
          Why Us
          <div className="m-1 h-1 w-full bg-red-500"></div>
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="w-[40vw] bg-stone-300">
            {[
              "Experienced Staff",
              "24/7 Support",
              "Quality Always",
              "Home Delivery",
            ].map((item) => (
              <>
                <div className="semibold-bold h-16 w-[100%] bg-white pl-4 pt-5 font-sans text-xl text-black hover:bg-slate-200">
                  <motion.p
                    initial={{
                      x: -20,
                      opacity: 0,
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 1,
                      duration: 2.5,
                      type: "spring",
                      stiffness: 50,
                      damping: 10,
                    }}
                    className="h-max w-max"
                  >
                    {item}
                  </motion.p>
                </div>
                <hr />
              </>
            ))}
          </div>
          <div className="w-[40vw] text-white">
            <h4 className="mb-5 font-sans text-3xl font-bold">Contact Us</h4>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              debitis quis assumenda a dolor molestias tempore quam ducimus
              libero possimus modi provident voluptatem quidem soluta debitis
              quis assumenda a dolor molestias tempore quam ducimus libero
              possimus modi provident voluptatem quidem soluta libero possimus
              modi provident voluptatem quidem soluta debitis quis assumenda a
              dolor molestias tempore quam ducimus libero possimus modi
              provident voluptatem quidem soluta voluptates, mollitia quasi
              itaque facere!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
