import MainShowcase from "@/components/sections/MainShowcase";
import Showcase from "@/components/sections/Showcase";
import React from "react";
import image from "../../../public/media/CONTACTHERO.png";
import Adds from "@/components/Adds";

function ContactPage() {
  return (
    <div>
      <MainShowcase
        image={image.src}
        p="Менеджеры компании ответят на все
вопросы по телефону:"
      >
        Новости
      </MainShowcase>
      <Adds style={{ padding: "150px 7%" }} />
    </div>
  );
}

export default ContactPage;
