import MainShowcase from "@/components/sections/MainShowcase";
import React from "react";
import image from "../../../public/media/news.png";
import Adds from "@/components/Adds";

function NewsPage() {
  return (
    <div>
      <MainShowcase
        image={image.src}
        p="Менеджеры компании ответят на все
        вопросы по телефону:"
      >
        Наши последние проекты
      </MainShowcase>
      <Adds style={{ padding: "150px 7%" }} />
    </div>
  );
}

export default NewsPage;
