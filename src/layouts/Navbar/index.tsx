import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/media/black logo.png";
import logolight from "../../../public/media/Group (1).png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillTelephoneFill, BsPerson } from "react-icons/bs";
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
	const isLight = route.pathname === "/";
	useEffect(() => {
		const handleScroll = () => {
			if (!ref.current) return;
			if (window.pageYOffset === 0) {
				ref.current.style.backdropFilter = "blur(0px)";
				ref.current.style.background = "transparent";
			} else {
				ref.current.style.backdropFilter = "blur(10px)";
				ref.current.style.background =
					route.pathname === "/"
						? "rgba(255, 255, 255, 0.2)"
						: "rgba(0, 0, 0, 0.2)";
			}
			const currentScrollPos = window.pageYOffset;
			ref.current.style.translate = `0 ${
				scrollPosition > currentScrollPos ? 0 : "-100%"
			}`;
			setScrollPosition(currentScrollPos);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollPosition]);
	const intl = useIntl();
	const t = (id: string) => {
		return intl.formatMessage({ id: id });
	};
	console.log(t("home"));

	const menuConfig: MenuRouteType[] = [
		{
			id: "1",
			label: t("home"),
			link: "/",
		},
		{
			id: "2",
			label: t("about"),
			link: "/#about",
		},
		{
			id: "3",
			label: t("contact"),
			link: "/contact",
		},
		{
			id: "4",
			label: t("news"),
			link: "/news",
		},
		{
			id: "5",
			label: t("projects"),
			link: "/projects",
		},
	];

	return (
		<nav
			className={`${styles.navbar} ${
				isLight && styles.black
			} container-padding`}
			ref={ref}
		>
			<Link href="/">
				<a>
					<img src={isLight ? logo.src : logolight.src} alt="" />
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
							<BsFillTelephoneFill /> Request a call
						</Button>
					</a>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
