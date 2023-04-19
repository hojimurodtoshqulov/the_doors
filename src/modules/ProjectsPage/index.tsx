import React from "react";
import AboutShowcase from "@/components/sections/MainShowcase";
import Adds from "@/components/Adds";
import AboutSection from "@/components/sections/AboutSection";
import hero from "../../../public/media/hero3.png";
import OurProjects from "@/components/sections/OurProjects";

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
      <OurProjects />
      <Adds />
    </div>
  );
}

export default ProjectsPage;
