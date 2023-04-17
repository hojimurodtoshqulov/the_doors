import ClientsSection from "@/components/sections/ClientsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ProductSection from "@/components/sections/ProductSection";
import Showcase from "@/components/sections/Showcase";
import React from "react";
import Adds from "@/components/Adds";
import MagnificentWork from "@/components/sections/MagnificentWork";
import FormSection from "@/components/sections/FormSection";
import NewsSection from "@/components/sections/NewsSection";
import AboutSection from "@/components/sections/AboutSection";

function HomePage() {
  return (
    <div>
      <Showcase />
      <MagnificentWork />
      {/* <VideoSection /> */}
      <Adds />
      <ProductSection />
      <ClientsSection />
      {/* <NewsSection /> */}
      <AboutSection />
      <FormSection />
      <PartnersSection />
    </div>
  );
}

export default HomePage;
