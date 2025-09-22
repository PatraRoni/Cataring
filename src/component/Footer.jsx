// src/components/Footer.jsx
import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {


  return (
    <footer className="bg-gray-900 text-gray-300 relative">

      <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              {/* debug: border + overflow-hidden to show/clip the image */}
                <img className=" h-20 w-20" src={assets.logo} alt=""/>
              

              <div>
                <h3 className=" font-inter font-extrabold text-[48px] leading-[100%] tracking-[-0.05em] uppercase text-[#9C9C9C]">
                    BEST
                    <br />
                    CATERERS
                    </h3>
              </div>
            </div>

            <p className="font-dmsans font-semibold text-[14px] leading-[16px] tracking-[0.02em] capitalize text-[#CFCFCF]  max-w-sm p-2">
                Serving Unforgettable Flavors And Flawless Service To Make Every Event Truly Memorable And Stress-Free.
            </p>

            <div className="flex items-center gap-3">
              <img className="h-6 w-6 " src={assets.facebook} alt=""/>
              <img className="h-6 w-6 " src={assets.insta} alt=""/>
              <img className="h-6 w-6 " src={assets.x} alt=""/>
            </div>

            <div className="border-t border-white pt-4 text-xs text-[#CFCFCF] font-dmsans">
              <p>All Rights Reserved | Pioneer Regis ©2025</p>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="ml-40">
            <h4 className="text-sm font-semibold text-[#FFFFFF]  mb-4 font-dmsans">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline text-[#CFCFCF] font-dmsans">Home</a></li>
              <li><a href="#" className="hover:underline text-[#CFCFCF] font-dmsans">About</a></li>
              <li><a href="#" className="hover:underline text-[#CFCFCF] font-dmsans">Services</a></li>
              <li><a href="#" className="hover:underline text-[#CFCFCF] font-dmsans">Process</a></li>
              <li><a href="#" className="hover:underline text-[#CFCFCF] font-dmsans">Testimonials</a></li>
              <li><a href="#" className="hover:underline text-[#CFCFCF] font-dmsans">FAQs</a></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h4 className="text-sm font-semibold text-[#FFFFFF] mb-4 font-dmsans">SERVICES</h4>
            <address className="not-italic text-sm space-y-3 text-[#CFCFCF] font-dmsans">
              <p className="flex gap-3"><img className="h-4 w-4 " src={assets.location} alt=""/> Pioneer Tower Premises No. 20–085, Street No. 85, Opposite Tank No. 2, 1st Floor, Action Area - I, Plot - AB-109, Newtown, West Bengal 700156</p>
              <div className="flex items-start gap-3"><img className="h-4 w-4" src={assets.phone} alt=""/><div className="text-sm text-[#CFCFCF] font-dmsans">+7439537213</div></div>
              <div className="flex items-start gap-3"><img className="h-4 w-4" src={assets.mail} alt=""/><div className="text-sm text-[#CFCFCF] font-dmsans">example@gmail.com</div></div>
              <div className="flex items-start gap-3"><img className="h-4 w-4" src={assets.browser} alt=""/><div className="text-sm text-[#CFCFCF] font-dmsans">bestcatering.com</div></div>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
