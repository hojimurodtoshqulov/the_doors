import React from "react";
import AboutShowcase from "@/components/sections/MainShowcase";
import Adds from "@/components/Adds";
import AboutSection from "@/components/sections/AboutSection";
import hero from "../../../public/media/hero3.png";
import { BsFillTelephoneFill } from "react-icons/bs";

function AboutPage() {
  return (
    <div>
      <AboutShowcase
        image={hero.src}
        p="Менеджеры компании ответят на все
вопросы по телефону:"
      >
        <BsFillTelephoneFill /> &nbsp; +123 456 7890
      </AboutShowcase>
      <AboutSection />
      <Adds style={{ padding: "150px 7%" }} />
    </div>
  );
}

export default AboutPage;
