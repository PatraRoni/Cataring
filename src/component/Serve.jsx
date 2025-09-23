
import React from 'react';
import { assets } from '../assets/assets';

export default function Serve() {
    return (
        <section className="relative  bg-white overflow-hidden">
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
    );
}
