// src/components/AboutUs.jsx
import React from "react";
import { assets } from "../assets/assets"; // adjust paths for your images

const HomeAbout = () => {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side (food images circle) */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center">
          {/* Main dish in center */}
          <img
            src={assets.main}
            alt="Main Dish"
            className="w-100 h-100 rounded-full shadow-lg object-cover z-10"
          />

        </div> 

        {/* Right side (text content) */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="font-dynalight font-normal text-[96px] leading-[100%] tracking-[0%] capitalize text-[#273F00] mb-6">About Us</h2>
          <p className="font-dmsans mt-4 text-sm md:text-base text-[#000000] max-w-2xl mx-auto">
            Welcome to Best Caterers — where taste meets perfection. We are passionate about transforming every occasion into a memorable celebration with our exceptional catering services. 
            Our mission is simple: to make every event special with flavors that impress and service that delights.
          </p>
          <p cclassName="font-dmsans mt-4 text-sm md:text-base text-[#000000] max-w-2xl mx-auto">
            With years of experience in the catering industry, we have mastered the art of combining fresh ingredients, creative menus, and elegant presentations. Whether it’s weddings, corporate events, or casual gatherings, our chefs and event specialists work closely with you to create a stress-free and unforgettable experience.
          </p>
          <p className="font-dmsans mt-4 text-sm md:text-base text-[#000000] max-w-2xl mx-auto">
            At Best Caterers, we believe food is more than just a meal — it’s a way to bring people together. We don’t just serve dishes, we serve happiness, one plate at a time.
          </p>
        </div>
      </div>

      {/* Decorative background icons (faint) */}
      <div className="absolute inset-0 -z-10 bg-[url('/path/to/pattern.png')] bg-contain bg-repeat opacity-10" />
    </section>
  );
};

export default HomeAbout;
