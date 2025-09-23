import React, { useState } from "react";
import { assets } from "../assets/assets";

/**
 * Usage:
 * import FaqsSection from './FaqsSection';
 * <FaqsSection image="/path/to/chef.jpg" />
 *
 * The component expects a prop `image` with the image URL or import.
 */

const FAQS = [
  {
    q: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
  },
  {
    q: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,",
    a: "Phasellus iaculis neque purus sodales bibendum.",
  },
  {
    q: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore",
    a: "Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus.",
  },
  {
    q: "Lorem Ipsum Dolor Sit Amet,",
    a: "Maecenas sed diam eget risus varius blandit sit amet non magna.",
  },
  {
    q: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore",
    a: "Cras mattis consectetur purus sit amet fermentum.",
  },
];

export default function FaqsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(prev => (prev === i ? null : i));
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Left image */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={assets.faq}
              alt="Chef preparing food"
              className="w-full h-auto object-cover block"
              style={{ borderRadius: "14px" }}
            />
          </div>
        </div>

        {/* Right content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          {/* Heading - Dynalight */}
          <h2
            className="font-dynalight text-[#274000] mb-6"
            style={{
              fontSize: "120px",
              lineHeight: "0.85",
              // keep as inline style so sizes match the reference exactly
            }}
          >
            FAQs
          </h2>

          {/* Accordions */}
          <div className="w-full space-y-4">
            {FAQS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="flex items-start gap-4">
                  {/* Card */}
                  <div
                    className={`flex-1 bg-gray-100 rounded-lg px-5 py-4 shadow-sm transition-all duration-300 ${
                      isOpen ? "ring-2 ring-[#d6f06f]" : ""
                    }`}
                  >
                    <button
                      onClick={() => toggle(i)}
                      className="w-full text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                    >
                      <div className="text-sm font-dmSans text-[#3f3f3f]">
                        {item.q}
                      </div>
                    </button>

                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-hidden={!isOpen}
                      className={`mt-3 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40" : "max-h-0"}`}
                    >
                      <p className="font-dmSans text-[16px] leading-[18px] text-[#000000]">
                        {item.a}
                      </p>
                    </div>
                  </div>

                  {/* Plus button */}
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => toggle(i)}
                      aria-label={isOpen ? "Collapse" : "Expand"}
                      className={`w-10 h-10 rounded-md flex items-center justify-center border-2 shadow-sm transition-transform duration-200
                        ${isOpen ? "bg-[#d6f06f] border-[#a8d22b] transform rotate-45" : "bg-white border-[#b8e05e]"}`}
                      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
                    >
                      {/* plus sign — rotated when open */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14" stroke="#274000" strokeWidth="2" strokeLinecap="round" />
                        <path d="M5 12h14" stroke="#274000" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
