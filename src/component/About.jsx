import React from 'react'
import { assets } from '../assets/assets'


const teamMembers = [
  {
    imageSrc: assets.first,
    altText: "John Doe, Head Chef",
    name: "Mr. John Doe",
    title: "Head Chef",
  },
  {
    imageSrc: assets.sceond,
    altText: "Jane Smith, Event Planner",
    name: "Mrs. Jane Smith",
    title: "Event Planner",
  },
  {
    imageSrc: assets.third,
    altText: "Michael Johnson, Operations Manager",
    name: "Mr. Michael Johnson",
    title: "Operations Manager",
  },
  {
    imageSrc: assets.forth,
    altText: "Emily Davis, Creative Director",
    name: "Mrs. Emily Davis",
    title: "Creative Director",
  },
];

const OFFERS = [
  {
    id: "01",
    title: "500+",
    title1:"event hosted",
    desc:
      "Make your big day unforgettable with curated menus, stunning presentation, and exceptional service — creating magical moments for you and your guests.",
    accent: true,
  },
  {
    id: "02",
    title: "150+",
    title1:"happy customer",
    desc:
      "From conferences to office parties, we provide professional catering that impresses clients, energizes teams, and keeps events running smoothly.",
    accent: false,
  },
  {
    id: "03",
    title: "10+",
    title1:"years of excellence",
    desc:
      "Celebrate birthdays, anniversaries, or special gatherings with delicious food and seamless service tailored to your theme and guest preferences.",
    accent: false,
  },
  {
    id: "04",
    title: "100%",
    title1:"fresh & hygienic foods",
    desc:
      "Enjoy fully personalized menus crafted by expert chefs — blending creativity, fresh ingredients, and your unique taste for a one-of-a-kind experience.",
    accent: true,
  },
];


const About = () => {
  return (
   <>
   <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-start md:items-center p-8 relative">
  <div className="w-full md:w-1/2 lg:w-2/3">
    <h1 className="font-dynalight font-normal text-[126px] leading-[100%] tracking-[0em] capitalize text-[#273F00] mb-12 relative inline-block">Our Legacy</h1>
    <div className="space-y-4 text-sm md:text-base">
      <p className="font-dmsans mt-4 text-sm md:text-base text-[#000000] max-w-2xl mx-auto">Best Caterers Was Born from a Simple Idea — to Bring People Together through Unforgettable Food. What Began as a Small Home-Based Business with a Single Employee Has Grown into a Trusted Catering Partner for Weddings, Corporate Events, and Intimate Gatherings Across the Region.</p>
      <p className="font-dmsans mt-4 text-sm md:text-base text-[#000000] max-w-2xl mx-auto">We Believe Food Is More Than Just a Meal — It's An Experience. That's Why Our Team is Dedicated to Crafting Personalized Menus and Memorable Presentations that not only delight the palate but also tell a story. Whether your vision is a Formal Dinner, a Casual Lunch, or a Themed Buffet, we work closely with you to bring your culinary dreams to life.</p>
      <p className="font-dmsans mt-4 text-sm md:text-base text-[#000000] max-w-2xl mx-auto">Over the Years, We've Had the Privilege of Serving Thousands of Happy Guests and Earning a Reputation for Quality, Creativity, and Exceptional Service. We are Proud of Our Journey and Grateful to our loyal clients who have trusted us with their most cherished events. As Best Caterers, We Don't Just Cater Events — We Create Memories that last a lifetime.</p>
    </div>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center md:items-end mt-8 md:mt-0">
    <div className="relative">
      <img src={assets.chef}alt="Catering" className="w-48 h-32 md:w-64 md:h-48 absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 z-10 rounded-lg shadow-lg" />
      <img src={assets.chef} alt="Food preparation" className="w-48 h-32 md:w-64 md:h-48 z-20 rounded-lg shadow-lg" />
      <img src={assets.chef} alt="Chef" className="w-48 h-32 md:w-64 md:h-48 absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 z-30 rounded-lg shadow-lg" />
    </div>
  </div>
</div>



<div className="text-center max-w-7xl mx-auto p-8 relative">
      <h2 className="font-dynalight font-normal  text-[126px] leading-[100%] tracking-[0em] capitalize text-[#273F00] mb-12 relative inline-block">Meet Our Team</h2>
      <div className="max-w-xl mx-auto text-sm md:text-base mb-8">
        <p className="font-dmsans mt-4 text-sm md:text-base text-[#000000] max-w-2xl mx-auto">Behind every perfect event is our passionate team — Chefs, Planners, and Servers dedicated to making your experience seamless. This is our small and dedicated team.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img 
              src={member.imageSrc} 
              alt={member.altText} 
              className="w-32 h-32 rounded-full mb-2" 
            />
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="font-dmsans mt-4 text-sm md:text-base text-[#000000] max-w-2xl mx-auto">{member.title}</p>
          </div>
        ))}
      </div>
    </div>




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
        achievements
      </h2>
    </div>

    <div className="flex justify-center md:justify-end">
      <div className="max-w-xs md:max-w-[320px]">
        <div className="w-36 h-[2px] bg-[#274000] ml-auto mb-4" />
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
  

            <div className="flex-1">
              <h3 className="text-5xl font-dynalight text-[#274000]">{o.title}</h3>
              <h3 className="font-dmSans font-semibold text-[16px] text-[#2D2D2D] mb-2">{o.title1}</h3>
              <p className="font-dmSans text-[13px] leading-[16px] text-gray-700">{o.desc}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
   </>
  )
}

export default About