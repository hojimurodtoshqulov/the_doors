import React from "react";
import logo from "../../../public/media/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import styles from "./navbar.module.scss";
import Link from "next/link";

type MenuRouteType = {
  link: string;
  label: string;
};

const menuRoutes: MenuRouteType[] = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/",
    label: "About",
  },
  {
    link: "/",
    label: "Blog",
  },
  {
    link: "/",
    label: "Contact",
  },
];

function Navbar() {
  return (
    <nav className={`${styles.navbar} container-padding`}>
      <Link href="/">
        <a className="logo">
          <img src={logo.src} />
        </a>
      </Link>
      <div className={styles.menu}>
        {menuRoutes.map((route: MenuRouteType) => (
          <Link href={route.link}>
            <a className={"link"}>{route.label}</a>
          </Link>
        ))}
      </div>
      <div className="icons">
        <BiSearch />
        <BsPerson />
        <AiOutlineShoppingCart />
      </div>
    </nav>
  );
}

export default Navbar;
