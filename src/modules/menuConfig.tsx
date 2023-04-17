import AboutPage from "./AboutPage";
import HomePage from "./HomePage";

export const menuConfig: MenuRouteType[] = [
  {
    id: "1",
    label: "Home",
    link: "/",
  },
  {
    id: "3",
    label: "Contact",
    link: "/#contact",
  },
  {
    id: "4",
    label: "News",
    link: "/#news",
  },
  {
    id: "2",
    label: "About",
    link: "/about",
  },
];

export type MenuRouteType = {
  id: string | number;
  link: string;
  label: string;
};
