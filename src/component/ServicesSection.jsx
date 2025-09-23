
// import React from "react";
// import { assets } from "../assets/assets";


// const services = [
//     {
//         img: assets.weddingImg,
//         title: "Wedding Catering",
//         desc: "Make Your Big Day Unforgettable With Curated Menus, Stunning Presentations, And Personalized Service.",
//     },
//     {
//         img: assets.corporateImg,
//         title: "Corporate Events",
//         desc: "From Conferences To Office Parties — professional catering and service tailored to your brand.",
//     },
//     {
//         img: assets.privateImg,
//         title: "Private Parties",
//         desc: "Celebrate birthdays, anniversaries, and intimate gatherings with memorable menus and service.",
//     },
//     {
//         img: assets.outdoorImg,
//         title: "Outdoor Catering",
//         desc: "Fresh flavors for open-air venues, festivals, and garden celebrations.",
//     },
//     {
//         img: assets.liveImg,
//         title: "Live Counters & Food Stations",
//         desc: "Interactive live counters and stations serving made-to-order dishes during your event.",
//     },
//     {
//         img: assets.managementImg,
//         title: "Full Event Management",
//         desc: "Turnkey planning and execution — we handle everything so you can relax.",
//     },
// ];

// export default function ServicesSection() {
//     return (
//         <section className="relative bg-white py-12 md:py-20 overflow-hidden">
//             {/* Decorative background artwork - low opacity */}
//             <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
//                 {/* keep decorative bg here if you want; currently empty to ignore */}
//             </div>

//             <div className="max-w-6xl mx-auto px-6">
//                 {/* Header */}
//                 <div className="text-center mb-10 md:mb-14">
//                     <h2 className="font-dynalight text-5xl  sm:text-7xl md:text-9xl font-medium text-emerald-900">
//                         Our Services
//                     </h2>

//                     <div className="flex justify-center mt-2">
//                         <div className="h-0.5 w-28 bg-emerald-700 rounded" />
//                     </div>

//                     <p className="font-dmsans mt-4 text-sm md:text-base text-[#000000] max-w-2xl mx-auto">
//                         Discover a range of catering solutions tailored to every occasion — from weddings to corporate events.
//                         We craft customized menus, deliver flawless service, and ensure every guest enjoys a memorable dining experience.
//                     </p>
//                 </div>

//                 {/* Cards grid */}
//                 <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//                     {services.map((s, idx) => (
//                         <article
//                             key={idx}
//                             className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm transition transform hover:scale-[1.01] hover:shadow-md cursor-pointer"
//                             aria-labelledby={`service-${idx}`}
//                         >
//                             {/* Image on top */}
//                             <div className="w-full h-24 md:h-25 p-2 overflow-hidden">
//                                 <img
//                                     src={s.img}
//                                     alt={s.title}
//                                     className="block w-25 h-25 object-cover object-center transition-transform duration-500 group-hover:scale-105"
//                                     draggable={false}
//                                 />
//                             </div>

//                             {/* Content */}
//                             <div className="p-4 md:p-6">
//                                 <h3
//                                     id={`service-${idx}`}
//                                     className="font-dmsans text-[#273F00] font-medium text-[20px] md:text-[28px] leading-[22px] md:leading-[28px] tracking-[-0.04em] md:tracking-[-0.06em] text-justify capitalize text-emerald-900 transition-colors duration-300 group-hover:text-white"
//                                 >
//                                     {s.title}
//                                 </h3>

//                                 <p className="font-dmsans mt-2 text-xs md:text-sm text-[#000000] group-hover:text-emerald-50 transition-colors duration-300">
//                                     {s.desc}
//                                 </p>

//                                 {/* Accent / decorative area to show green on hover */}
//                                 <div
//                                     className="mt-4 inline-block px-3 py-1 rounded text-sm font-medium transition-colors duration-300"
//                                     style={{
//                                         backgroundColor: "transparent",
//                                     }}
//                                 >
//                                     {/* empty so the hover background is visible on the whole card */}
//                                 </div>
//                             </div>

//                             {/* Overlay that becomes green on hover */}
//                             <div
//                                 className="pointer-events-none absolute inset-0 bg-emerald-700 opacity-0 transition-opacity duration-300 group-hover:opacity-40"
//                                 aria-hidden="true"
//                             />
//                         </article>
//                     ))}
//                 </div>
//             </div>

//             {/* small bottom spacing for mobile */}
//             <div className="h-6 md:hidden" />
//         </section>
//     );
// }
// src/components/ServicesSection.jsx
import React from "react";
import { assets } from "../assets/assets";

const services = [
  { img: assets.weddingImg, title: "Wedding Catering", desc: "Make Your Big Day Unforgettable With Curated Menus, Stunning Presentations, And Personalized Service." },
  { img: assets.corporateImg, title: "Corporate Events", desc: "From Conferences To Office Parties — professional catering and service tailored to your brand." },
  { img: assets.privateImg, title: "Private Parties", desc: "Celebrate birthdays, anniversaries, and intimate gatherings with memorable menus and service." },
  { img: assets.outdoorImg, title: "Outdoor Catering", desc: "Fresh flavors for open-air venues, festivals, and garden celebrations." },
  { img: assets.liveImg, title: "Live Counters & Food Stations", desc: "Interactive live counters and stations serving made-to-order dishes during your event." },
  { img: assets.managementImg, title: "Full Event Management", desc: "Turnkey planning and execution — we handle everything so you can relax." },
];

export default function ServicesSection() {
  return (
    <>
    <section className="relative bg-white py-12 md:py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-dynalight text-5xl sm:text-7xl md:text-9xl font-medium text-[#273F00]">Our Services</h2>
          <div className="flex justify-center mt-2">
            <div className="h-0.5 w-28 bg-emerald-700 rounded" />
          </div>

          <p className="font-dmsans mt-4 text-sm md:text-base text-[#000000] max-w-2xl mx-auto">
            Discover a range of catering solutions tailored to every occasion — from weddings to corporate events.
            We craft customized menus, deliver flawless service, and ensure every guest enjoys a memorable dining experience.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, idx) => (
            <article
              key={idx}
              className="group bg-[#F2F2F2] border border-gray-100 rounded-lg overflow-hidden shadow-sm transition-colors duration-300 hover:bg-[#D0F494] cursor-pointer"
              aria-labelledby={`service-${idx}`}
            >
              {/* Image on top - fills the spot */}
              <div className="w-full h-20 md:h-20 p-4 overflow-hidden">
                <img 
                  src={s.img}
                  alt={s.title}
                  className="block w-20 h-20 object-cover object-center"
                  draggable={false}
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <h3
                  id={`service-${idx}`}
                  className="font-dmsans text-[#273F00] font-medium text-[20px] md:text-[28px] leading-[22px] md:leading-[28px] tracking-[-0.04em] md:tracking-[-0.06em] text-justify capitalize transition-colors duration-300"
                >
                  {s.title}
                </h3>

                <p className="font-dmsans mt-2 text-xs md:text-sm text-[#000000] transition-colors duration-300">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="h-6 md:hidden" />
    </section>
    <section className="relative bg-white overflow-hidden">
                <img
                    src={assets.logo}
                    alt=""                        
                    aria-hidden="true"
                    className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 opacity-30 object-contain pointer-events-none"
                />
    
                <img
                    src={assets.serve}              
                    alt=""                        
                    aria-hidden="true"
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-44 h-44 opacity-30 rotate-12 object-contain pointer-events-none"
                />
                <div className="max-w-6xl mx-auto px-6 py-16 md:py-28 flex items-center justify-center">
                    <div className="text-center w-full">
                        <h1
                            className="font-dynalight text-[#273F00] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-tight tracking-tight"
    
                        >
                            Your Dream Event
                            <br />
                            Starts Here
                        </h1>
    
                        <p className="font-dmsans font-normal text-lg leading-[20px] tracking-[-0.04em] mt-4 max-w-xl mx-auto text-[#000000] text-center capitalize">
                            Ready To Make Your Event Unforgettable? Let Best
                            Caterers Handle Everything — From Menu To Execution.
                            Contact Us Today And Turn Your Special Occasion Into A
                            Delicious, Stress-Free Celebration!
                        </p>
    
                        <div className="mt-6 flex items-center justify-center">
                            <button
                                className="inline-flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-white text-sm md:text-base font-medium py-2.5 px-5 rounded shadow"
                                aria-label="Book now"
                            >
                                BOOK NOW →
                            </button>
                        </div>
                    </div>
                </div>
    
                <div className="h-8 md:hidden" />
    
                <style jsx>{`
            /* small extra tuning for mobile so the heading stays elegant */
            @media (max-width: 640px) {
              h1 {
                line-height: 0.95;
              }
            }
          `}</style>
            </section>
    </>
  );
}
