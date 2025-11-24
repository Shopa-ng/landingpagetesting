"use client";

import { sectionItem } from "@/constants/section-item";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="p-6 bg-white rounded-[15px] mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-center text-green-700 text-2xl font-bold tracking-wide">
            What is Shopa?
          </h1>
          <p className="text-[#787878] text-sm mt-3 w-full sm:w-[90%] md:w-[83%] text-center m-auto">
            Born from the reality of students life, Shopa is the first
            campus-focused e-commerce platform exclusively for all Nigerian
            University students, designed to organize and empower student
            commerce. It connects student vendors and buyers within their own
            universities, bringing structure, trust, and visibility to campus
            marketplaces.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {sectionItem.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <SpotlightCard className="py-10 px-4 shadow-sm rounded-[10px] flex flex-col h-full">
                  <div className="bg-green-100 p-3 rounded-[10px] w-fit mb-3">
                    <Icon size={20} className="text-green-700" />
                  </div>
                  <h1 className="text-[18px] font-bold leading-6">
                    {item.header}
                  </h1>
                  <p className="mt-2 text-[14px] font-light text-[#a3a3a3]">
                    {item.content}
                  </p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
