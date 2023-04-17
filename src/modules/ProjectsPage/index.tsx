import React from "react";
import AboutShowcase from "@/components/sections/MainShowcase";
import Adds from "@/components/Adds";
import AboutSection from "@/components/sections/AboutSection";
import hero from "../../../public/media/hero3.png";

function ProjectsPage() {
  return (
    <div>
      <AboutShowcase
        image={hero.src}
        p=" Менеджеры компании ответят на все
вопросы по телефону:"
      >
        Наши последние проекты
      </AboutShowcase>
      <Adds />
    </div>
  );
}

export default ProjectsPage;
