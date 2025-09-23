import React from "react";
import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";

const steps = [
  {
    title: "Tell Us About Your Event",
    description:
      "Share your event details, guest count, and preferences — we'll listen carefully and understand your vision to create a perfect catering plan.",
  },
  {
    title: "Menu Customization",
    description:
      "Work with our experts to design a menu that matches your taste, theme, and budget — from appetizers to desserts, completely tailored to you.",
  },
  {
    title: "Food Preparation",
    description:
      "Our chefs use fresh, high-quality ingredients to prepare delicious dishes with care, ensuring every bite is flavorful and beautifully presented.",
  },
  {
    title: "Event Setup & Execution",
    description:
      "We handle everything — setup, serving, and coordination — so your event runs smoothly while you enjoy a stress-free celebration with your guests.",
  },
  {
    title: "Post Event Cleanup",
    description:
      "After the event, our team takes care of the cleanup, leaving your venue spotless and letting you focus on memories, not the mess.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="font-dynalight font-normal text-[126px] leading-[100%] tracking-[0em] capitalize text-[#273F00] mb-12 relative inline-block">
        How It Works
        <div className="w-60 h-0.5  bg-[#273F00] mx-auto mt-2"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mt-10">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center space-y-6">
      {/* Icon + Title */}
           <div className="flex  items-right space-y-4">
            <img className="h-20 w-20" src={assets.hiw} alt="" />
            <h3 className="font-dmSans ml-4 font-semibold text-[26px] text-left leading-[25px] tracking-[-0.08em] capitalize text-[#273F00]">
              {step.title}
            </h3>
       </div>

      {/* Description */}
          <p className="font-dmSans text-left font-normal text-[16px] leading-[18px] tracking-[0em] capitalize text-gray-600">
        {step.description}
      </p>
    </div>
  ))}
</div>
    </section>
  );
}
