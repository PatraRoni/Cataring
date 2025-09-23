// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const getSections = () => Array.from(document.querySelectorAll("section[id]"));
    let sections = getSections();
    if (!sections.length) {
      const t = setTimeout(() => {
        sections = getSections();
        if (sections.length) initObserver(sections);
      }, 200);
      return () => clearTimeout(t);
    }
    initObserver(sections);

    function initObserver(sectionsList) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
          });
        },
        { threshold: 0.45, rootMargin: "-10% 0px -40% 0px" }
      );

      sectionsList.forEach((sec) => observer.observe(sec));
      return () => sectionsList.forEach((sec) => observer.unobserve(sec));
    }
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  // close on resize (when switching to desktop)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
    { id: "menu", label: "Menu" },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) {
      console.warn("No element with id:", id);
      return;
    }
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
    window.history.replaceState(null, "", `#${id}`);
    setMobileOpen(false); // close mobile menu when link clicked
  };

  return (
    <nav className="bg-white shadow-md p-4 sticky mx-10 top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={assets.logo1} alt="Logo" className="h-10" />
          <p className=" font-['Inter'] font-extrabold text-[20px] leading-[100%] tracking-[-0.05em] uppercase ">best <br/> caterers </p>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-gray-700 hover:text-green-500 font-semibold text-[16px] leading-[100%] tracking-[-0.05em] capitalize font-dmsans ${
                activeSection === item.id ? "border-b-2 border-green-500 pb-1" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Phone */}
        <div className="hidden md:block w-33 bg-[#7EC900] rounded-lg">
          <a href="tel:+74385937213" className="text-white font-bold text-lg">
            +74385937213
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
            className="text-gray-700 hover:text-green-500 p-2 rounded"
          >
            {mobileOpen ? (
              // X icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel (full-screen overlay) */}
      <div
        className={`fixed inset-0 z-40 transition-transform transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        aria-hidden={!mobileOpen}
      >
        {/* backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/40 ${mobileOpen ? "opacity-100" : "opacity-0"} transition-opacity`}
        />

        {/* panel */}
        <div className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-lg p-6 flex flex-col">
          <div className="mb-6 flex items-center justify-between">
            <img src={assets.logo} alt="Logo" className="h-8" />
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`block text-lg font-medium ${
                      activeSection === item.id ? "text-green-600" : "text-gray-800"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 w-full">
            <a href="tel:+74385937213" className="text-green-500 font-bold">
              +74385937213
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
