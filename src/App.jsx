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
