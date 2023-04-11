import CardSlider from "@/components/CardSlider";
import ContactUsSection from "@/components/ContactUsSection";
import AboutSection from "@/components/sections/AboutSection";
import ClientsSection from "@/components/sections/ClientsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ProductSection from "@/components/sections/ProductSection";
import Showcase from "@/components/sections/Showcase";
import React from "react";

function HomePage() {
  return (
    <div>
      <Showcase />
      <AboutSection />
      <ProductSection />
      <ClientsSection />
      <ContactUsSection />
      <PartnersSection />
    </div>
  );
}

export default HomePage;
