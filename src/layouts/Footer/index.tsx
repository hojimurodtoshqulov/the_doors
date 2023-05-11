import { MainPropType } from "@/shared/types";
import styles from "./footer.module.scss";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import Link from "next/link";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import { useRef } from "react";
import useIntl from "react-intl/src/components/useIntl";

function Footer({ style }: MainPropType) {
	const ref = useRef(null);
	const entity = useIntersectionObserver(ref, {});
	const intl = useIntl();
	const t = (id: string) => {
		return intl?.formatMessage({ id: id });
	};
	return (
		<footer
			style={style}
			className={`${entity?.isIntersecting && styles.active} ${styles.footer}`}
			ref={ref}
		>
			<div className={styles.top}>
				<div className={styles.row}>
					<h1 className="banana">The Doors</h1>
					<p>{t("footerMainDesc")}</p>
				</div>
				<div className={styles.row}>
					<h2 className="banana">{t("footerAdress")}</h2>
					<Link href="https://maps.windows.com/?form=WNAMSH&collection=point.41.292513_69.298799_Point">
						{t("map")}
					</Link>
					<Link href="tel:+998935910050">+(998) 93 591 00 50</Link>
					<Link href="tel:+998901854773">+(998) 90 185 47 73</Link>
					<Link href="tel:+998712936877">+(998) 71 293 68 77</Link>
				</div>
				<div className={styles.row}>
					<h2 className="banana">{t("footerLinks")}</h2>
					<Link href="/">{t("about")}</Link>
					<Link href="/">{t("projects")}</Link>
					<Link href="/">{t("contact")}</Link>
					<Link href="/">{t("FAQ")}</Link>
				</div>
			</div>
			<div className={styles.bottom}>
				<h3>
					<Link href={"https://rounded.uz/"}>©Rounded Official 2023</Link>
				</h3>
				{/* <Link href={"/"}>
					<a>
						<span>
							<p>Privacy policy</p>
							<p>Cookies</p>
							<p>Terms of service</p>
						</span>
					</a>
				</Link> */}
			</div>
		</footer>
	);
}

export default Footer;
