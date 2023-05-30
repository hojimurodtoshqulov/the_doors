import AboutPage from "@/modules/AboutPage";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="THEDOORS: O нас"
        description="thedoors: Мы в THEDOORS специализируемся на установке секционных ворот, роллетных систем, шлагбаумов и перегрузочного оборудования."
        openGraph={{
          title: "THEDOORS: O нас",
          description:
            "thedoors: Мы в THEDOORS специализируемся на установке секционных ворот, роллетных систем, шлагбаумов и перегрузочного оборудования.",
          images: [
            {
              url: "https://the-doors.herokuapp.com/api/files/62",
              alt: "The doors: about seo image",
            },
          ],
        }}
      />
      <AboutPage />
    </>
  );
}
