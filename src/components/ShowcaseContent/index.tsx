import { MainPropType } from "@/shared/types";
import React from "react";
import styles from "./style.module.scss";
import { BiSearch } from "react-icons/bi";

function ShowcaseContent({
  children,
  title,
  paragraph,
}: MainPropType & { title: React.ReactNode; paragraph: string }) {
  return (
    <div className={styles.content}>
      <div>
        <h1>{title} </h1>
        <p>{paragraph}</p>
        {children}
      </div>
    </div>
  );
}

export default ShowcaseContent;
