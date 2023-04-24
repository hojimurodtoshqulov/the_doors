import AppLayout from "@/layouts/AppLayout";
import "@/shared/scss/globals.scss";
import "@/styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { appWithTranslation } from "next-i18next";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<AppLayout>
			<Component {...pageProps} />
		</AppLayout>
	);
};
export default appWithTranslation(App)