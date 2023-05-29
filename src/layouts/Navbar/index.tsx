import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/media/logo the doors 1.png";
import logo1 from "../../../public/media/logo the doors.svg";
import logolight from "../../../public/media/Group (1).png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
	BsFillArrowUpLeftCircleFill,
	BsFillTelephoneFill,
	BsPerson,
} from "react-icons/bs";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { MenuRouteType, menuConfig } from "@/modules/menuConfig";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import SwitchButton from "../../components/SwitchButton";
import useIntl from "react-intl/src/components/useIntl";
import Showcase from "@/components/sections/Showcase";

function Navbar() {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const ref = useRef<HTMLHeadElement>(null);
	const route = useRouter();
	const isHome = route.pathname === "/";

	const changeColor = () => {
		if (!ref.current) return;
		if (window.pageYOffset === 0) {
			ref.current.style.setProperty("--color", isHome ? "black" : "white");
			ref.current.style.background = "transparent";
		} else {
			ref.current.style.setProperty("--color", "black");
			ref.current.style.background = "rgba(255, 255, 255)";
		}
	};

	changeColor();

	useEffect(() => {
		const handleScroll = () => {
			changeColor();
			if (!ref.current) return;

			const currentScrollPos = window.pageYOffset;
			ref.current.style.translate =
				scrollPosition < currentScrollPos && currentScrollPos > 100
					? "0 -100%"
					: "0";
			setScrollPosition(currentScrollPos);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollPosition]);
	const intl = useIntl();
	const t = (id: string) => {
		return intl.formatMessage({ id: id });
	};
	const menuConfig: MenuRouteType[] = [
		{
			id: "4",
			label: t("about"),
			link: "/about",
		},
		{
			id: "5",
			label: t("projects"),
			link: "/projects",
		},
		{
			id: "5",
			label: t("products"),
			link: "/products",
		},
		{
			id: "3",
			label: t("contact"),
			link: "/contact",
		},
		{
			id: "2",
			label: t("FAQ"),
			link: "/faq",
		},
	];
	// const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
	//   if (!e.currentTarget.dataset.to) return;
	//   if (!document.getElementById(e.currentTarget.dataset.to))
	//     return window.location.replace(`/#${e.currentTarget.dataset.to}`);

	//   document
	//     .getElementById(e.currentTarget.dataset.to)
	//     ?.scrollIntoView({ behavior: "smooth" });
	// };
	// const scrollToTop = () => {
	//   return window.scrollTo(0, 5350);
	// };
	return (
		<>
			<nav
				className={`${styles.navbar} ${
					isHome && styles.black
				} container-padding`}
				ref={ref}
			>
				<Link href="/">
					<a>
						<img src={logo.src} alt="" />
					</a>
				</Link>
				<div
					className={`${isOpen && styles.x} ${styles.menuBtn}`}
					onClick={() => setIsOpen((pre) => !pre)}
				></div>
				<div
					className={` ${isOpen && styles.open} ${styles.menu}`}
					onClick={() => setIsOpen((pre) => !pre)}
				>
					{menuConfig.map((route: MenuRouteType) => (
						<Link href={route.link} key={route.id}>
							<a className={"link"}>{route.label}</a>
						</Link>
					))}
					<SwitchButton />
					<Link href={"/#contact"}>
						<a>
							<Button
								style={{
									borderRadius: 10,
									minWidth: 160,
									gap: 10,
									alignItems: "center",
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<BsFillTelephoneFill /> {t("navBtn")}
							</Button>
						</a>
					</Link>
				</div>
			</nav>
			<Link href={"/"}>
				<a className={styles.homeicon}>
					<BsFillArrowUpLeftCircleFill />
				</a>
			</Link>
		</>
	);
}

export default Navbar;
