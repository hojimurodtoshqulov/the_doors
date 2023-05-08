import AppLayout from "@/layouts/AppLayout";

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import ru from "../../lang/ru.json";
import uz from "../../lang/uz.json";

import "@/shared/scss/globals.scss";
import "@/styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const messages: { [key: string]: { [key: string]: string } } = {
  ru,
  uz,
};
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const { locale = "ru" } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no viewport-fit=cover"
        />

        <meta property="og:type" content="website" />
        <link
          rel="alternate"
          hrefLang="uz-Oz"
          href="https://www.thedoors.uz/uz"
        ></link>
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.thedoors.uz"
        ></link>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          name="description"
          content="The doors: Секционные гаражные ворота-это идеальный выбор в пользу качества, надёжности, долговечности и стиля!"
        ></meta>
        <meta property="og:url" content="https://www.thedoors.uz/"></meta>
        <meta
          property="og:title"
          content="The doors: Секционные гаражные ворота-это идеальный выбор в пользу качества, надёжности, долговечности и стиля!"
        ></meta>
        <meta
          property="og:description"
          content="Мы в THEDOORS специализируемся на автоматической установке дверей, рольставен, шлагбаумов и погрузочно-разгрузочного оборудования."
        ></meta>
        <meta
          property="og:image"
          content="https://the-doors.herokuapp.com/api/files/703"
        ></meta>
        <link rel="canonical" href="https://www.thedoors.uz/"></link>

        <title>Thedoors</title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
        <ToastContainer />
      </AppLayout>
    </IntlProvider>
  );
}
