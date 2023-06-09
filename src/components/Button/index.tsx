import styles from "./styles.module.scss";
import { MainPropType } from "@/shared/types";
import React from "react";

function Button({
  children,
  style,
  onClick,
  disabled,
  ...rest
}: MainPropType & { onClick?: () => void; disabled?: boolean }) {
  return (
    <button
      className={styles.button + " banana"}
      style={style}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
export default Button;
