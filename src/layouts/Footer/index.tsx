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
					{/* <div className={styles.icons}>
						<BsFacebook />
						<AiFillInstagram />
						<BsTwitter />
					</div> */}
				</div>
				<div className={styles.row}>
					<h2 className="banana">{t("footerAdress")}</h2>
					<Link href="/">20, Awesome Road, New York, Usa 4D BS3</Link>
					<Link href="/">+123 456 7890</Link>
					<Link href="/">hello@ulina.com</Link>
				</div>
				<div className={styles.row}>
					<h2 className="banana">{t("footerLinks")}</h2>
					<Link href="/">Shop Cupon</Link>
					<Link href="/">About Us</Link>
					<Link href="/">Carrer</Link>
					<Link href="/">Supports</Link>
				</div>
				<div className={styles.row}>
					<h2 className="banana">{t("footerCatalog")}</h2>
					<Link href="/">Lorem</Link>
					<Link href="/">Lorem</Link>
					<Link href="/">Lorem</Link>
					<Link href="/">Lorem</Link>
				</div>
			</div>
			<div className={styles.bottom}>
				<h3>©Ulina Official 2022</h3>
				<Link href={"/"}>
					<a>
						<span>
							<p>Privacy policy</p>
							<p>Cookies</p>
							<p>Terms of service</p>
						</span>
					</a>
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
