import ContactUsSection from "@/components/sections/ContactUsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ProductSection from "@/components/sections/ProductSection";
import Showcase from "@/components/sections/Showcase";
import React from "react";
import VideoSection from "@/components/sections/VideoSection";
import Adds from "@/components/Adds";
import MagnificentWork from "@/components/sections/MagnificentWork";

function HomePage() {
  return (
    <div>
      <Showcase />
      <MagnificentWork />
      {/* <VideoSection /> */}
      <Adds />
      <ProductSection />
      <ClientsSection />
      <ContactUsSection />
      <PartnersSection />
    </div>
  );
}

export default HomePage;
