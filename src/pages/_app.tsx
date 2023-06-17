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
        <meta
          name="google-site-verification"
          content="XdiqzKaz23c93mQ-9Kl2D_dncE_Co3gG57xklQcxg2Y"
        />

        <link
          rel="alternate"
          hrefLang="uz-Oz"
          href="https://www.thedoors.uz/uz"
        ></link>

        <meta
          name="description"
          content="TheDoors is the premier destination for high-quality door products, installation, and repair services in Uzbekistan. With years of experience, we are the trusted choice for homeowners and businesses alike when it comes to all their door needs.

          At TheDoors, we offer a wide range of doors, including interior, exterior, custom, and more, to suit any style and budget. We also provide expert door installation and repair services to ensure your doors are installed correctly and functioning properly.
          
          Our team of skilled technicians has the knowledge and expertise to handle any door-related issue, from minor repairs to complete installations. We pride ourselves on providing exceptional customer service and craftsmanship on every project.
          
          Whether you need a single door replaced or an entire building outfitted with new doors, TheDoors has the expertise and resources to get the job done right. Contact us today to learn more about our products and services and to schedule your consultation.
             
          "
        ></meta>

        <title>Thedoors</title>
      </Head>
      <p style={{display:"none"}}>

      Verification: b213269430540de9

      google-site-verification: googleec7cbd23c9bf1e24.html
      </p>

      
      <AppLayout>
        <Component {...pageProps} />
        <ToastContainer />
      </AppLayout>
    </IntlProvider>
  );
}
