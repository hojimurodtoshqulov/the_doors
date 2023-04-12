import React from "react";
import AboutShowcase from "@/components/sections/AboutShowcase";
import Adds from "@/components/Adds";
import AboutSection from "@/components/sections/AboutSection";

function AboutPage() {
  return (
    <div>
      <AboutShowcase />
      <AboutSection />
      <Adds style={{ padding: "150px 7%" }} />
    </div>
  );
}

export default AboutPage;
