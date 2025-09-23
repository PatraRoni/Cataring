// src/components/MenuGrid.jsx
import React from "react";

/**
 * Requirements:
 * - Tailwind CSS (JIT) configured
 * - Add this to public/index.html:
 *   <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
 * - Optional: extend tailwind.config.js with font families:
 *   extend: { fontFamily: { dynalight: ["Great Vibes", "cursive"], dmsans: ['"DM Sans"', 'sans-serif'] } }
 */

const CATEGORIES = [
  { id: "welcome", label: "Welcome Drink", highlighted: false },
  { id: "soup", label: "Soup", highlighted: false },
  { id: "startersVeg", label: "Starters (Veg)", highlighted: false },
  { id: "startersNonVeg", label: "Starters (Non-Veg)", highlighted: true },
  { id: "breads", label: "Breads", highlighted: false },
  { id: "lentils", label: "Lentils", highlighted: false },
  { id: "rice", label: "Rice", highlighted: true },
  { id: "salads", label: "Salads", highlighted: false },
  { id: "vegBengali", label: "Veg Items (Bengali)", highlighted: true },
  { id: "nonvegBengali", label: "Non Veg Items (Bengali)", highlighted: false },
  { id: "chicken", label: "Chicken Dishes", highlighted: false },
  { id: "mutton", label: "Mutton Dishes", highlighted: true },
  { id: "chutney", label: "Chutney", highlighted: false },
  { id: "desserts", label: "Desserts", highlighted: true },
  { id: "icecream", label: "Ice Cream", highlighted: false },
  { id: "pan", label: "Pan", highlighted: false },
];

export default function MenuGrid() {
  return (
    <section className="py-12 px-4 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start mb-8">
          <div className="md:col-span-3 text-center">
            <h1
              className="font-dynalight font-normal text-[126px] leading-[100%] tracking-[0em] capitalize text-[#273F00] mb-12 relative inline-block"
            >
              Craft Your Food Menu
            </h1>
            <div className="flex justify-center mt-2">
              <div className="h-[2px] w-36 bg-emerald-700 rounded" />
            </div>
          </div>

          {/* Right small paragraph (aligned to right on large screens) */}
          <p className="hidden md:block md:col-start-3 md:row-start-2 text-sm text-gray-600 text-right max-w-xs">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do Eiusmod Tempor Incididunt Ut Labore Et
            Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={`rounded-lg p-4 md:p-6 shadow-sm border ${
                cat.highlighted ? "bg-[#D0F494] border-[#D0F494]" : "bg-gray-50 border-gray-100"
              }`}
            >
              <div className="flex flex-col">
                <label htmlFor={`sel-${cat.id}`} className="font-dmsans font-medium text-sm text-gray-800 mb-3 capitalize">
                  {cat.label}
                </label>

                <div className="flex">
                  <select
                    id={`sel-${cat.id}`}
                    aria-label={`${cat.label} select`}
                    className={`w-full rounded-full py-2 px-4 text-sm font-dmsans outline-none border ${
                      cat.highlighted
                        ? "border-[#9F9F9F] bg-white"
                        : "border-[#9F9F9F] bg-white"
                    } focus:ring-2 focus:ring-emerald-200`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose A {cat.label}
                    </option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: small footer spacer */}
        <div className="h-8 md:h-12" />
      </div>

      <style>{`
        /* ensure rounded select arrow doesn't overflow on some browsers */
        select::-ms-expand { display: none; }
      `}</style>
    </section>
  );
}
