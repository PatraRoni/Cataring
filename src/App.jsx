import React from "react";
import Footer from "./component/Footer";
import "./index.css"; // make sure this imports Tailwind
import HowItWorks from "./component/HowItWorks";
import FaqsSection from "./component/FaqsSection";
import WhatWeOffer from "./component/WhatWeOffer";
import Serve from "./component/Serve";
import ServicesSection from "./component/ServicesSection";
import MenuSection from "./component/MenuSection";
import About from "./component/About";
import MenuGrid from "./component/MenuGrid";
import CustomerForm from "./component/CustomerForm";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto p-10">
          <h1 className="text-3xl font-bold mb-6">Page content above footer</h1>
          <p>Scroll down to see the footer.</p>
          <div style={{height: "600px"}}></div>
        </div>
      </main>
      <Navbar/>
        <main>
        <section id="home" className="min-h-screen flex items-center justify-center scroll-mt-20">
          <h1 className="text-4xl">Home Section</h1>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center scroll-mt-20">
          <h1 className="text-4xl">About Section</h1>
        </section>

        <section id="services" className="min-h-screen flex items-center justify-center scroll-mt-20">
          <h1 className="text-4xl">Services Section</h1>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center scroll-mt-20">
          <h1 className="text-4xl">Contact Section</h1>
        </section>

        <section id="menu" className="min-h-screen flex items-center justify-center scroll-mt-20">
          <h1 className="text-4xl">Menu Section</h1>
        </section>
      </main>
      <MenuGrid/>
      <CustomerForm/>
      <About/>
      <MenuSection/>
      <ServicesSection/>
      <Serve/>
      <WhatWeOffer/>
      <HowItWorks/>
      <FaqsSection/>
      <Footer />
    </div>
  );
}

export default App;
