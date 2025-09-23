// src/components/MenuSection.jsx
import React, { useState } from "react";

const DATA = [
  {
    key: "welcome",
    title: "Welcome Drinks",
    items: [
      "Lemon & Mint Cooler",
      "Virgin Mojito",
      "Citrus Sangria (non-alcoholic)",
      "Iced Hibiscus Tea",
      "Sparkling Ginger Punch",
      "Peach Iced Tea",
      "Cucumber Cooler",
      "Watermelon Slush",
    ],
  },
  {
    key: "starters",
    title: "Starters",
    items: [
      "Paneer Tikka Skewers",
      "Veg Spring Rolls",
      "Garlic Butter Prawns",
      "Bruschetta Trio",
      "Mini Samosa Platter",
      "Crispy Mushroom Bites",
      "Cheese & Herb Crostini",
      "Stuffed Baby Potatoes",
    ],
  },
  {
    key: "main",
    title: "Main Courses",
    items: [
      "Herb Roasted Chicken",
      "Paneer Lababdar",
      "Truffle Mushroom Risotto",
      "Baked Salmon with Dill",
      "Rogan Josh",
      "Vegetable Biryani",
      "Grilled Veg Platter",
      "Creamy Alfredo Pasta",
    ],
  },
  {
    key: "desserts",
    title: "Desserts",
    items: [
      "Classic Tiramisu",
      "Gulab Jamun",
      "Chocolate Fondant",
      "Fruit Tartlets",
      "Rasmalai",
      "Pistachio Kulfi",
      "Cheesecake Bites",
      "Creme Brulee",
    ],
  },
  {
    key: "extras",
    title: "Extras",
    items: [
      "Bread Basket with Dips",
      "Cheese Board",
      "Assorted Pickles",
      "Live Chaat Counter",
      "Kulfis & Pops",
      "Chilled Salad Bar",
      "Soup Shots",
      "Warm Naan & Rotis",
    ],
  },
];

export default function MenuSection() {
  const [active, setActive] = useState(DATA[0].key);

  const activeCategory = DATA.find((d) => d.key === active) || DATA[0];

  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top categories - scroll on mobile */}
        <div className="mb-8">
          <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 px-1 md:justify-center">
            {DATA.map((cat) => {
              const isActive = cat.key === active;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`flex-shrink-0 w-45 h-35 rounded-md px-4 py-3 text-left transition-colors duration-200
                    ${isActive ? "bg-[#a2d948] text-emerald-900 shadow-sm" : "bg-[#D0F494] text-emerald-900/90 hover:bg-[#b1de66]"}
                  `}
                  aria-pressed={isActive}
                >
                  <span className="font-dmsans font-extrabold text-[36px] leading-[36px] tracking-[-0.06em] capitalize">{cat.title}</span>
                  <div className="font-dmsans text-xs text-emerald-900/70 mt-1">Click To View</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cursive title */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="font-dynalight text-[#273F00] text-5xl md:text-xl lg:text-8xl"
          >
            {activeCategory.title}
          </h2>
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {activeCategory.items.map((text, i) => (
            <div
              key={i}
              className="flex items-start  gap-4 bg-white p-3 md:p-4 rounded-md shadow-xl/20 hover:shadow-md transition-shadow duration-200 "
            >
              {/* Number box */}
              <div className="flex items-center justify-center w-10 h-10 rounded-md text-[#548800] font-dmsans font-black text-[34px] leading-[34px] tracking-[-0.04em] capitalize">

                {i + 1}
              </div> 

              {/* Text */}
              <p className="font-dmsans  text-sm md:text-base text-[#273F00] leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* small spacer */}
        <div className="h-8 md:h-12" />
      </div>

      {/* tiny style to hide the browser scrollbar on overflow-x for the top row */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
