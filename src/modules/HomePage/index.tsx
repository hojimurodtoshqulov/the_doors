import ContactUsSection from "@/components/ContactUsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ProductSection from "@/components/sections/ProductSection";
import Showcase from "@/components/sections/Showcase";
import React from "react";
import VideoSection from "@/components/sections/VideoSection";

function HomePage() {
  return (
    <div>
      <Showcase />
      <VideoSection />
      <ProductSection />
      <ClientsSection />
      <ContactUsSection />
      <PartnersSection />
    </div>
  );
}

export default HomePage;
