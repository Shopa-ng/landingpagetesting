"use client";

import { motion } from "framer-motion";

import { MagneticButton } from "@/components/ui/magnetic-button";

export const Carousel = () => {
  const handleJoinClick = () => {
    const el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="max-w-[1440px] mx-auto">
      <motion.div
        className="bg-cover bg-center bg-no-repeat rounded-[10px] sm:mt-10 mt-0 py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-10"
        style={{ backgroundImage: `url("/assets/section.svg")` }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-green-400 text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            Why Join the Waitlist
          </h1>

          <h1 className="text-white uppercase mt-4 text-[20px] sm:text-[25px] md:text-[30px] lg:text-[36px] w-full sm:w-[90%] md:w-[70%] lg:w-[50%]">
            <span className="text-amber-300">be the first</span> to test the
            Shopa app before it's launched to the public
          </h1>

          <MagneticButton
            onClick={handleJoinClick}
            className="tracking-wide text-[12px] sm:text-[13px] md:text-[14px] font-light bg-amber-300 px-5 sm:px-6 md:px-8 py-2 sm:py-3 mt-4 rounded-lg"
          >
            Join The Waitlist
          </MagneticButton>
        </div>
      </motion.div>
    </div>
  );
};
