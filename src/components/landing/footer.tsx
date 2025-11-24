"use client";

import { motion } from "framer-motion";
import {
  FaFacebook,
  FaLinkedin,
  FaSquareInstagram,
  FaTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div
        className=" bg-cover bg-no-repeat bg-center mt-20 h-auto sm:py-16 py-30 px-4 sm:px-6 md:px-10"
        style={{ backgroundImage: `url("/assets/section.svg")` }}
      >
        <motion.div
          className="bg-yellow-400 sm:px-10 px-7 rounded-[10px] sm:mt-[-100px] mt-[-200px] sm:py-15 py-8 flex sm:items- gap-10 items-start justify-between sm:flex-row flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <img src="/assets/footer-logo.svg" className="w-30" alt="" />
            <p className="mt-3 text-[12px] text-[#787878]">
              Buy, Sell, Connect
            </p>
          </div>
          <div className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
              <FaSquareInstagram color="green" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
              <FaTwitter color="green" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
              <FaFacebook color="green" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
              <FaLinkedin color="green" />
            </motion.div>
          </div>
        </motion.div>
        <p className="text-white text-[12px] text-center opacity-75 mt-10">
          {" "}
          &copy;{new Date().getFullYear()} Shopa. All rights reserved
        </p>
      </div>
    </div>
  );
};
