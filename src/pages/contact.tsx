import AboutPage from "@/modules/AboutPage";
import ContactPage from "@/modules/ContactPage";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="THEDOORS: Контакты"
        description="thedoors: Городской офис в Ташкенте
        Адрес: Узбекистан, г. Ташкент, ул. Фаргона Йули, 11А
        E-mail: asduz@mail.ru
        Сайт: www.thedoors.uz
        Режим работы: понедельник — пятница с 9:00 до 17:00, без перерыва"
        openGraph={{
          title: "THEDOORS: Контакты",
          description:
            "thedoors: Городской офис в Ташкенте Адрес: Узбекистан, г. Ташкент, ул. Фаргона Йули, 11А E-mail: asduz@mail.ru Сайт: www.thedoors.uz Режим работы: понедельник — пятница с 9:00 до 17:00, без перерыва",
          images: [
            {
              url: "	https://the-doors.herokuapp.com/api/files/13",
              alt: "The doors: contact seo image",
            },
          ],
        }}
      />
      <ContactPage />
    </>
  );
}
