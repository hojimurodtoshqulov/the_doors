import { MainPropType } from "@/shared/types";
import styles from "./title.module.scss";

function Title({style,children}:MainPropType) {
  return <h1 className={styles.title} style={style}>{children}</h1>;
}

export default Title;
