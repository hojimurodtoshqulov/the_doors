import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/media/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillTelephoneFill, BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { MenuRouteType, menuConfig } from "@/modules/menuConfig";
import Button from "@/components/Button";
import { useRouter } from "next/router";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const ref = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      if (window.pageYOffset === 0) {
        ref.current.style.backdropFilter = "blur(0px)";
        ref.current.style.background = "transparent";
        console.log(1);
      } else {
        ref.current.style.backdropFilter = "blur(10px)";
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
  console.log();

  return (
    <nav
      className={`${styles.navbar} ${
        useRouter().pathname === "/" && styles.black
      } container-padding`}
      ref={ref}
    >
      <Link href="/">
        <a>
          <button className={styles.logo}>Katalog</button>
        </a>
      </Link>
      <div className={` ${styles.menu}`}>
        {menuConfig.map((route: MenuRouteType) => (
          <Link href={route.link} key={route.id}>
            <a className={"link"}>{route.label}</a>
          </Link>
        ))}
      </div>
      <Link href={"/"}>
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
    </nav>
  );
}

export default Navbar;
