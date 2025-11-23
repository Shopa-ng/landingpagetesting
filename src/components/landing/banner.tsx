"use client";

import { Nav } from "./nav";

export const Banner = () => {
  const handleJoinClick = () => {
    const el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
          <div className="w-full lg:w-[43%] sm:w-full px-4 lg:px-0 text-center lg:text-left">
            <h1 className="tracking-wide font-semibold leading-snug text-2xl sm:text-3xl lg:text-4xl text-white mb-2">
              The <span className="text-amber-400">Campus Marketplace </span>
              That Brings <span className="text-amber-400">Students </span>
              <span className="text-amber-400">Together</span>
            </h1>

            <p className="tracking-wider text-[13px] text-[#ffffffe4] w-full lg:w-[70%] mt-3 mb-4">
              The first e-commerce platform built exclusively for{" "}
              <span className="text-amber-400">all</span> Nigerian university
              students. Buy, sell and grow all within your campus community
            </p>
            <button
              type="button"
              onClick={handleJoinClick}
              className="tracking-wide text-[13px] font-light bg-amber-300 px-6 py-2.5 mt-4 rounded-lg mx-auto lg:mx-0"
            >
              Join The Waitlist
            </button>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[48%] px-4 lg:px-0 mt-6 lg:mt-0">
            <div className="bg-green-200 rounded-[10px] pt-10 px-10">
              <div className="size-[440px] relative">
                <img
                  src="/assets/object.svg"
                  alt=""
                  className="w-full max-w-[440px] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
