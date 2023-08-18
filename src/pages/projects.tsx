import AboutPage from "@/modules/AboutPage";
import ProjectsPage from "@/modules/ProjectsPage";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="THEDOORS: Наши последние проекты"
        description="thedoors: Менеджеры компании ответят на все вопросы по телефону"
        openGraph={{
          title: "THEDOORS: Наши последние проекты",
          description:
            "thedoors: Менеджеры компании ответят на все вопросы по телефону",
          images: [
            {
              url: "	https://the-doors.herokuapp.com/api/files/74",
              alt: "The doors: seo image",
            },
          ],
        }}
      />
      <ProjectsPage />
    </>
  );
}
