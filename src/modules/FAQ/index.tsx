import MainShowcase from "@/components/sections/MainShowcase";
import { useTarjima } from "@/utils/getContent";
import React from "react";

function FAQ() {
  const getContent = useTarjima();

  return (
    <MainShowcase
      image={`/media/images.jpg`}
      p={
        getContent(
          "Менеджеры компании ответят на все вопросы по телефону:",
          "Менеджеры компании ответят на все вопросы по телефону:"
        ) || ""
      }
    >
      {" "}
      {getContent("FAQ", "FAQ")}{" "}
    </MainShowcase>
  );
}

export default FAQ;
