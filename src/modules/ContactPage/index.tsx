import MainShowcase from "@/components/sections/MainShowcase";
import Showcase from "@/components/sections/Showcase";
import React from "react";
import image from "../../../public/media/CONTACTHERO.png";
import Adds from "@/components/Adds";
import SocialSection from "@/components/sections/SocialSection";
import { BsFillTelephoneFill } from "react-icons/bs";

function ContactPage() {
  return (
    <div>
      <MainShowcase
        image={image.src}
        p="Менеджеры компании ответят на все
вопросы по телефону:"
      >
        <BsFillTelephoneFill />
        <span> +123 456 7890</span>{" "}
      </MainShowcase>
      <SocialSection />
      <Adds style={{ padding: "150px 7%" }} />
    </div>
  );
}

export default ContactPage;
