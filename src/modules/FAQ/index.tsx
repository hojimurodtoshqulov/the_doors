import Title from "@/components/Title";
import MainShowcase from "@/components/sections/MainShowcase";
import TextSection from "@/components/sections/TextSection";
import ImageTextSection from "@/components/sections/imageTextSection";
import { useTarjima } from "@/utils/getContent";
import React from "react";
import Accordion from "@/components/sections/Accordion";

function FAQ() {
  const getContent = useTarjima();

  return (
    <div>
      <MainShowcase
        image={`/media/images.jpg`}
        p={
          getContent(
            "В данном разделе приведены ответы на часто задаваемые вопросы.",
            "Ushbu bo'lim tez-tez beriladigan savollarga javob beradi."
          ) || ""
        }
      >
        {" "}
        {getContent("FAQ", "FAQ")}
      </MainShowcase>
      {/* <TextSection /> */}
      <Accordion />
      <ImageTextSection />
    </div>
  );
}

export default FAQ;
