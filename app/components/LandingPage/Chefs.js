import { motion } from "framer-motion";

const Chefs = () => {
  return (
    <div className="relative h-max w-full">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      <div className="flex h-max  w-full flex-col flex-wrap items-center justify-center bg-black bg-opacity-70 p-10 px-0">
        <div className="mb-10 rounded-md p-5 text-3xl font-extrabold text-white">
          Our Chefs
          <div className="m-[2px] ml-5 h-[2px] w-20 bg-red-800"></div>
          <div className="ml-12 h-[2px] w-20 bg-red-800"></div>
        </div>
        <div className="flex flex-wrap items-center justify-center p-5 lg:flex-nowrap">
          <img
            src="https://images.unsplash.com/photo-1577219492769-b63a779fac28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=398&q=100"
            alt="chefs"
            className="h-[40rem] w-[35rem] rounded-md transition-all duration-300 hover:scale-95"
          />
          <motion.p
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 1,
              duration: 2,
              type: "spring",
              stiffness: 50,
              damping: 10,
            }}
            className="overflow-auto p-10 text-white md:sm:w-full lg:w-[50vw]"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            molestias reiciendis reprehenderit. Esse deserunt at voluptates
            sapiente perspiciatis ipsa iusto sequi amet, fugit, rerum culpa
            quasi cum temporibus, cupiditate accusamus fuga tenetur maxime.
            Corporis, minima incidunt dolores tempore accusamus ab pariatur
            dolorum, laborum consequatur aut expedita! Dolor, laborum adipisci
            iure veritatis ex facere nemo quis impedit aliquid, incidunt aliquam
            itaque sequi eligendi iusto non deserunt soluta illum suscipit
            inventore labore tenetur quo vitae, quae esse. Officia iusto,
            doloribus laboriosam harum temporibus explicabo autem necessitatibus
            amet, saepe commodi possimus perferendis? Sunt, totam inventore
            velit possimus ex blanditiis maxime fuga consequuntur assumenda
            minima molestias cumque! Nesciunt esse veritatis, reprehenderit
            tempore eum tempora temporibus animi excepturi eos alias, molestias
            quam et vitae architecto? Ipsum qui consequatur, quibusdam vero
            beatae accusamus necessitatibus consectetur libero eveniet voluptate
            cupiditate dolore dolorem commodi reprehenderit deserunt nam. Rerum
            voluptate laborum rem a beatae hic aspernatur culpa assumenda alias
            commodi repellendus optio dolorem magni est nobis, harum
            necessitatibus incidunt amet ratione blanditiis mollitia. Officiis
            molestiae officia facilis voluptatem assumenda laborum fugit.
            Nesciunt labore ipsum aperiam necessitatibus in optio ratione
            exercitationem saepe sapiente atque voluptas rem, inventore vero,
            quas voluptatibus ex? Placeat tempore quisquam, voluptatem alias qui
            ea? Hic molestias ipsum nobis quae eius quam tempora vel voluptatum
            alias, doloribus porro dolorem dignissimos eaque est eveniet sunt
            voluptas quas deserunt cumque dolores voluptatem! Voluptatibus,
            maxime ipsum. Quaerat doloremque saepe ipsum suscipit illum
            reiciendis vero, id quas asperiores excepturi commodi amet tempore
            error placeat impedit, architecto vel molestias quae. Nihil, labore.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
