import AboutPage from "@/modules/AboutPage";
import ProductsPage from "@/modules/ProductsPage";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="THEDOORS: Продукты"
        description="thedoors: Секционные гаражные ворота - это идеальный выбор в пользу качества, надёжности, долговечности и стиля!"
        openGraph={{
          title: "THEDOORS: Продукты",
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
      <ProductsPage />
    </>
  );
}
