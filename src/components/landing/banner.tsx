"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Nav } from "./nav";

export const Banner = () => {
  const handleJoinClick = () => {
    const el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = e.clientX - rect.left;
    const mouseYVal = e.clientY - rect.top;
    const xPct = mouseXVal / width - 0.5;
    const yPct = mouseYVal / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Magnetic Button
  const btnRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleBtnMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleBtnMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Masked Text Reveal Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1] as const,
      },
    },
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div
        className="bg-cover bg-center h-auto rounded-[15px] py-6 sm:px-8 px-1 "
        style={{ backgroundImage: `url("/assets/hero.svg")` }}
      >
        <Nav />
        <div className="mt-7 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
          {/* Left Side */}
          <motion.div
            className="w-full lg:w-[43%] sm:w-full px-4 lg:px-0 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="overflow-hidden mb-2">
              <motion.h1
                variants={textVariants}
                className="tracking-wide font-semibold leading-snug text-2xl sm:text-3xl lg:text-4xl text-white"
              >
                The <span className="text-amber-400">Campus Marketplace </span>
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h1
                variants={textVariants}
                className="tracking-wide font-semibold leading-snug text-2xl sm:text-3xl lg:text-4xl text-white"
              >
                That Brings <span className="text-amber-400">Students </span>
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h1
                variants={textVariants}
                className="tracking-wide font-semibold leading-snug text-2xl sm:text-3xl lg:text-4xl text-white"
              >
                <span className="text-amber-400">Together</span>
              </motion.h1>
            </div>

            <div className="overflow-hidden mt-3 mb-4">
              <motion.p
                variants={textVariants}
                className="tracking-wider text-[13px] text-[#ffffffe4] w-full lg:w-[70%] mx-auto lg:mx-0"
              >
                The first e-commerce platform built exclusively for{" "}
                <span className="text-amber-400">all</span> Nigerian university
                students. Buy, sell and grow all within your campus community
              </motion.p>
            </div>

            <motion.div variants={textVariants}>
              <MagneticButton
                onClick={handleJoinClick}
                className="tracking-wide text-[13px] font-light bg-amber-300 px-6 py-2.5 mt-4 rounded-lg mx-auto lg:mx-0 inline-block"
              >
                Join The Waitlist
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Tilt */}
          <div className="w-full lg:w-[48%] px-4 lg:px-0 mt-6 lg:mt-0 perspective-1000">
            <motion.div
              className="rounded-[10px] pt-10 px-10"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="size-[440px] relative">
                <motion.img
                  src="/assets/object.svg"
                  alt=""
                  className="w-full max-w-[440px] mx-auto"
                  style={{
                    z: 50,
                    transform: "translateZ(50px)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
