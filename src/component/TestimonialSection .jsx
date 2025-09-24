
import React from "react";
import { assets } from "../assets/assets";

const TestimonialSection = ({
  title = "What Our Client Says",
  quote = "Best Caterers! Made our event unforgettable. The food was delicious, service flawless, and every detail handled perfectly. Our guests are still talking about it!",
  name = "John Doe",
  role = "Happy Client",
  avatar = assets.test1,
  image = assets.chef,
}) => {
  const chefImg = image || "";

  return (
    <section className="relative w-full bg-white py-8 md:py-12 overflow-visible">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Inline responsive CSS variables and small helper rules */}
        <style>{`
          /* CSS variables for image size & offsets; adjust values as needed */
          :root {
            --img-w: 260px;   /* mobile fallback (not used because image hidden on sm) */
            --off-x: 16px;
            --off-y: -40px;
            --card-max: 920px;
          }

          /* md and up: show and size image */
          @media (min-width: 768px) {
            :root {
              --img-w: 320px;
              --off-x: 28px;
              --off-y: -80px;
            }
          }

          /* lg and up: larger image */
          @media (min-width: 1024px) {
            :root {
              --img-w: 400px;
              --off-x: 40px;
              --off-y: -120px;
            }
          }

          /* xl: fine tune */
          @media (min-width: 1280px) {
            :root {
              --img-w: 480px;
              --off-x: 56px;
              --off-y: -140px;
            }
          }

          /* helper classes used below */
          .ts-card {
            max-width: var(--card-max);
            padding-right: calc(var(--img-w) * 0.45);
          }

          .ts-image-wrap {
            width: var(--img-w);
            right: calc(var(--off-x) * -1);
            top: calc(50% + var(--off-y));
            transform: translateY(-50%);
          }

          /* Make title responsive with clamp */
          .ts-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(1.6rem, 4.2vw, 3.8rem); /* scales between mobile and desktop */
            line-height: 1;
          }
        `}</style>

        {/* Title */}
        <h2  className="font-dynalight font-normal text-[48px] md:text-[72px] lg:text-[96px] leading-[100%] tracking-normal capitalize text-[#273F00] mb-8 md:mb-10">
          {title}
        </h2>

        {/* Card + image wrapper */}
        <div className="relative">
          {/* Card - responsive padding and spacing */}
          <div
            className="bg-gray-900 text-gray-200 rounded-2xl p-6 md:p-10 shadow-lg mx-auto relative z-10 ts-card"
            aria-live="polite"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
              <div className="flex-shrink-0">
                {avatar ? (
                  <img
                    src={avatar}
                    alt={name}
                    className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover ring-2 ring-green-400"
                  />
                ) : (
                  <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-gray-700 flex items-center justify-center text-sm">
                    {name.split(" ").map(n => n[0]).slice(0,2).join("")}
                  </div>
                )}
              </div>

              <div className="flex-1">
                <p className="text-sm md:text-base text-gray-300 mb-4">
                  {quote}
                </p>

                <div className="mt-2">
                  <p className="text-white font-semibold">{name}</p>
                  {role && <p className="text-xs md:text-sm text-gray-400">{role}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Right image overlapping the card (visible md+) */}
          {chefImg && (
            <div
              className="hidden md:block absolute ts-image-wrap"
              aria-hidden
              style={{
                zIndex: 20,
                pointerEvents: "none",
              }}
            >
              <img
                src={chefImg}
                alt="chef"
                className="object-contain w-full h-auto drop-shadow-2xl"
                style={{ display: "block" }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
