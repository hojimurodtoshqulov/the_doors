import { MainPropType } from "@/shared/types";
import React from "react";
import styles from "../sections/Showcase/hero.module.scss";
import { BiSearch } from "react-icons/bi";

function ShowcaseContent({
  children,
  title,
  paragraph,
}: MainPropType & { title: string; paragraph: string }) {
  return (
    <div className={styles.content}>
      <div>
        <h1>{title} </h1>
        <p>{paragraph}</p>
        {children}
      </div>
      <form action="">
        <input type="text" placeholder="Search production" />
        <button type="submit">
          <BiSearch />
        </button>
      </form>
    </div>
  );
}

export default ShowcaseContent;
