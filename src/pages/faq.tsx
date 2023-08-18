import FAQ from "@/modules/FAQ";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="THEDOORS: FAQ"
        description="В данном разделе приведены ответы на часто задаваемые вопросы."
        openGraph={{
          title: "THEDOORS: FAQ",
          description:
            "thedoors: В данном разделе приведены ответы на часто задаваемые вопросы.",
          images: [
            {
              url: "https://the-doors.herokuapp.com/api/files/62",
              alt: "The doors: about seo image",
            },
          ],
        }}
      />
      <FAQ />
    </>
  );
}
