import React from "react";
import { assets } from "../assets/assets";

const OFFERS = [
  {
    id: "01",
    title: "Make Your Big Day",
    desc:
      "Make your big day unforgettable with curated menus, stunning presentation, and exceptional service — creating magical moments for you and your guests.",
    accent: true,
  },
  {
    id: "02",
    title: "Corporate & Office Events",
    desc:
      "From conferences to office parties, we provide professional catering that impresses clients, energizes teams, and keeps events running smoothly.",
    accent: false,
  },
  {
    id: "03",
    title: "Private Celebrations",
    desc:
      "Celebrate birthdays, anniversaries, or special gatherings with delicious food and seamless service tailored to your theme and guest preferences.",
    accent: false,
  },
  {
    id: "04",
    title: "Personalized Menus",
    desc:
      "Enjoy fully personalized menus crafted by expert chefs — blending creativity, fresh ingredients, and your unique taste for a one-of-a-kind experience.",
    accent: true,
  },
];

export default function WhatWeOffer({ chefImage = "/images/chef.png", decorativePattern = null }) {
  return (
    <section className="relative max-w-7xl mx-auto px-8 py-24 overflow-hidden">
      {/* optional decorative pattern top-left */}
      {decorativePattern && (
        <img
          src={decorativePattern}
          alt="decor"
          className="hidden md:block absolute left-0 -top-8 w-64 opacity-40 pointer-events-none"
        />
      )}

      {/* Heading */}
    {/* Top heading + short rule + paragraph (responsive and aligned) */}
<div className="relative max-w-7xl mx-auto px-8 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 mb-12">
    {/* Left column: heading (center on mobile, left on md+) */}
    <div className="flex justify-center md:justify-start">
      <h2
        className="
          font-dynalight font-normal
          text-[28px]
          sm:text-[40px]
          md:text-[64px]
          lg:text-[96px]
          xl:text-[120px]
          leading-[110%] sm:leading-[105%] md:leading-[100%] lg:leading-[100%]
          tracking-[0em] capitalize text-[#274000]
          mb-0
        "
      >
        What We Offer
      </h2>
    </div>

    {/* Right column: short rule + paragraph (aligned right) */}
    <div className="flex justify-center md:justify-end">
      <div className="max-w-xs md:max-w-[320px]">
        {/* short horizontal rule aligned to right */}
        <div className="w-36 h-[2px] bg-[#274000] ml-auto mb-4" />

        {/* paragraph under the rule */}
        <p className="font-dmSans text-[13px] leading-[16px] text-gray-600 text-center md:text-right">
          From weddings to corporate events, we offer customized catering, creative menus,
          and flawless service — making every occasion deliciously memorable and stress-free.
        </p>
      </div>
    </div>
  </div>

  {/* Offer cards (unchanged) */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
    {OFFERS.map((o, i) => (
      <div key={o.id} className="relative">
        <div
          className={`p-6 rounded-xl shadow-sm h-full ${
            o.accent ? "bg-[#dff7a8]" : "bg-gray-100"
          }`}
          style={{
            clipPath:
              i % 2 === 0
                ? "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)"
                : "polygon(0 0, 90% 0, 100% 100%, 10% 100%)",
          }}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="text-5xl font-dynalight text-[#274000]">{o.id}</div>
            </div>

            <div className="flex-1">
              <h3 className="font-dmSans font-semibold text-[16px] text-[#274000] mb-2">{o.title}</h3>
              <p className="font-dmSans text-[13px] leading-[16px] text-gray-700">{o.desc}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Testimonial section */}
      <div className="relative mt-8">
  <h3  className="font-dynalight font-normal
    text-[28px]       
    sm:text-[40px]   
    md:text-[64px]   
    lg:text-[96px]    
    xl:text-[120px]  
    leading-[110%]    
    sm:leading-[105%]
    md:leading-[100%]
    lg:leading-[100%]
    tracking-[0em] capitalize text-[#274000] mb-6">What Our Client Says</h3>

  <div className="flex items-start lg:items-stretch gap-8">
    {/* testimonial card */}
    <div className="flex-1 max-w-3xl bg-[#111216] text-white rounded-2xl p-8 shadow-2xl relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/images/avatar-placeholder.png"
          alt="avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-dmSans font-semibold">John Doe</div>
          <div className="text-xs text-gray-300">Founder, Company</div>
        </div>
      </div>

      <p className="font-dmSans text-sm leading-6 text-gray-200">
        Best caterers made our event unforgettable! The food was delicious, the service was flawless, and every detail was handled perfectly. Our guests are still
        talking about it.
      </p>
    </div>

    {/* chef image overlapping on the right (hidden on small screens) */}
    <div className="hidden md:block w-64 lg:w-96 -ml-20 lg:-ml-28 pointer-events-none">
      <img
        src={assets.chef}
        alt="chef"
        className="w-full h-auto object-cover rounded-2xl drop-shadow-xl transform translate-y-6"
        style={{ maxWidth: "420px" }}
      />
    </div>
  </div>
</div>

    </section>
  );
}
