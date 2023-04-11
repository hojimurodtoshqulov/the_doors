import styles from "./styles.module.scss";
import { MainPropType } from "@/shared/types";
import React from "react";

function Button({
  children,
  style,
  onClick,
}: MainPropType & { onClick?: () => void }) {
  return (
    <button className={styles.button} style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
