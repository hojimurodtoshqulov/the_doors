import React from "react";
import styles from "./layout.module.scss";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { MainPropType } from "@/shared/types";

function AppLayout({ children }: MainPropType) {
  return (
    <div className={styles.layout}>
      <Navbar /> {children} <Footer style={{ marginTop: "auto" }} />
    </div>
  );
}

export default AppLayout;
