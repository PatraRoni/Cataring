
import React from "react";
import { assets } from "../assets/assets"; // adjust path if needed

const images = [
  assets.img1,
  assets.img2,
  assets.img3,
  assets.img4,
  assets.img5,
  assets.img6,
  // ...add as many unique images as you like
];

export default function ScrollingGallery() {
  const doubled = images.concat(images); // duplicate for seamless loop

  return (
    <div className="w-full bg-white py-8">
      {/* Inline styles define the keyframes so no Tailwind config required */}
      <style>{`
        .sg-row { overflow: hidden; position: relative; }
        .sg-track { display: flex; gap: 16px; align-items: center; will-change: transform; }
        .sg-track-left { animation: scroll-left 28s linear infinite; }
        .sg-track-right { animation: scroll-right 28s linear infinite; }
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }

        /* fade masks at edges (works in most modern browsers) */
        .sg-row { -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent); mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent); }

        /* image sizing - tweak to taste or add responsive breakpoints */
        .sg-img { width: 220px; height: 120px; object-fit: cover; border-radius: 12px; box-shadow: 0 6px 18px rgba(0,0,0,0.08); }

        /* pause on hover for UX */
        .sg-track-left:hover, .sg-track-right:hover { animation-play-state: paused; }

        /* responsive sizes */
        @media (min-width: 768px) {
          .sg-img { width: 260px; height: 140px; }
        }
      `}</style>

      {/* Row 1: left → right (we animate the track from 0 to -50% so it loops) */}
      <div className="sg-row">
        <div className="sg-track sg-track-left">
          {doubled.map((src, i) => (
            <img key={`l-${i}`} src={src} alt={`gallery-${i}`} className="sg-img" />
          ))}
        </div>
      </div>

      {/* Row 2: right → left */}
      <div className="mt-6 sg-row">
        <div className="sg-track sg-track-right">
          {doubled.map((src, i) => (
            <img key={`r-${i}`} src={src} alt={`gallery-${i}`} className="sg-img" />
          ))}
        </div>
      </div>
    </div>
  );
}
