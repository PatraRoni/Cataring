
import React from "react";
import { assets } from "../assets/assets";

export default function Hero() {
  const stats = [
    { value: "500+", label: "EVENTS HOSTED" },
    { value: "150+", label: "HAPPY CLIENTS" },
    { value: "10+", label: "YEARS OF EXCELLENCE" },
    { value: "100%", label: "FRESH & HYGIENIC FOOD" },
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-6 z-10">

            <h1 className="font-dynalight text-5xl lg:text-[96px] leading-tight lg:leading-[0.95] text-gray-900 mb-6 capitalize">
              <img src={assets.special} alt="special" />
              Welcome To Best
              <br />
              Catering
            </h1>

            <p className="text-gray-600 max-w-xl mb-6">
              Delight your guests with unforgettable flavors and flawless
              service. From intimate gatherings to grand celebrations, we craft
              custom menus and experiences that turn moments into memories.
            </p>

            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-2 bg-[#7EC900] text-white px-5 py-3 rounded shadow hover:opacity-95">
                Book Now
                <img className="w-5" src={assets.right_arrow} alt="arrow" />
              </button>

              {/* fixed typo: border-[#7EC900] */}
              <button className="inline-flex items-center gap-2 border border-[#7EC900] text-[#7EC900] px-4 py-3 rounded bg-white hover:bg-green-50">
                Contact
              </button>
            </div>
          </div>

          {/* Right: Curved Image */}
          <div className="lg:col-span-6 relative">
            {/* Desktop clipped image */}
            <div className="hidden lg:block relative">
              <img
                src={assets.hero1} // use your imported image instead of full path
                alt="catering"
                className="h-[420px] w-full object-cover rounded-tl-[120px] rounded-bl-[120px] shadow-md"
              />
            </div>

            {/* Mobile image */}
            <div className="lg:hidden w-full mb-6">
              <img
                src={assets.hero1}
                alt="catering"
                className="w-full h-56 object-cover rounded-2xl shadow"
              />
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="relative">
          <div className="mx-auto max-w-4xl">
            <div className="transform translate-y-8 bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                {stats.map((s, i) => (
                  <div key={i} className="flex-1 text-center">
                    <div className="text-2xl md:text-3xl font-semibold text-gray-800">
                      {s.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 mt-1 tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background shape (optional) */}
      <svg
        className="hidden lg:block absolute right-0 bottom-0 w-64 h-64 -mb-12 opacity-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f3f4f6"
          d="M43.6,-63.9C57.5,-55.6,72.4,-49.2,77.6,-36.9C82.9,-24.6,78.5,-6.5,72.7,9.6C66.9,25.7,59.6,39.8,48.6,50.8C37.6,61.9,22.9,70,7.4,68.6C-8.1,67.2,-24.2,56.3,-35.9,44.6C-47.6,32.9,-54.8,20.4,-60.3,6.6C-65.8,-7.2,-69.6,-22.3,-63.1,-34.6C-56.6,-46.9,-39.8,-56.4,-21.9,-62.1C-3.9,-67.7,15.2,-69.6,43.6,-63.9Z"
          transform="translate(100 100)"
        />
      </svg>
    </section>
  );
}
