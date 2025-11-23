"use client";

import { infoArray } from "@/constants/info";

const Info = () => {
  const handleJoinClick = () => {
    const el = document.getElementById("waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div
        className="sm:bg-cover bg-cover bg-center bg-no-repeat sm:mt-10 mt-0 h-auto sm:py-16 py-16 px-4 sm:px-6 md:px-10"
        style={{ backgroundImage: `url("/assets/paper-texture.svg")` }}
      >
        <div className="px-2 sm:px-6 md:px-10">
          <h1 className="text-center text-green-700 text-2xl sm:text-3xl font-bold tracking-wide">
            Who it&apos;s for
          </h1>
          <p className="text-[#787878] text-sm sm:text-base mt-3 w-full sm:w-[90%] md:w-[83%] text-center mx-auto">
            Whether you&apos;re a buyer or a seller in a university community,
            Shopa is built for you.
          </p>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {infoArray.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg py-8 px-6 flex flex-col shadow-sm hover:shadow-md transition-shadow"
                  style={{ backgroundColor: item.background }}
                >
                  <div className="mb-2">
                    <Icon size={28} color={item.iconColor} />
                  </div>

                  <h2 className="text-xl font-semibold mt-3">{item.Header}</h2>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    {item.content}
                  </p>
                  <img
                    src={item.image}
                    alt={item.Header}
                    className="mt-5 mb-1 w-full max-w-[220px] h-auto mx-auto"
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={handleJoinClick}
              className="tracking-wide text-sm sm:text-base font-light bg-amber-300 text-gray-900 px-6 py-2.5 rounded-lg"
            >
              Join The Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
