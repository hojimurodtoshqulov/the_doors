import { NextSeo } from "next-seo";
import HomePage from "@/modules/HomePage";

export default function Home() {
  return (
    <>
      <NextSeo
        title="THEDOORS: АВТОМАТИЧЕСКИЕ ВОРОТА"
        description="thedoors: Секционные гаражные ворота - это идеальный выбор в пользу качества, надёжности, долговечности и стиля!"
        openGraph={{
          title: "THEDOORS: АВТОМАТИЧЕСКИЕ ВОРОТА",
          description:
            "thedoors: Секционные гаражные ворота - это идеальный выбор в пользу качества, надёжности, долговечности и стиля!",
          images: [
            {
              url: "	https://the-doors.herokuapp.com/api/files/74",
              alt: "The doors: seo image",
            },
          ],
        }}
      />
      <HomePage />
    </>
  );
}
