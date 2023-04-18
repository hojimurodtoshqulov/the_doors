import styles from "./add.module.scss";
import poster1 from "../../../public/media/Vector.png";
import { MainPropType } from "@/shared/types";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import { useRef } from "react";

function Adds({ style }: MainPropType) {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});

  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${styles.adds}`}
      style={style}
      ref={ref}
    >
      <div className={styles.image}>
        <img src={poster1.src} alt="" />
        <h1>Easy Returns</h1>
        <p>Be enim ad minim veniam liquipa ami tomader</p>
      </div>
      <div className={styles.stick}></div>
      <div className={styles.image}>
        <img src={poster1.src} alt="" />
        <h1>Easy Returns</h1>
        <p>Be enim ad minim veniam liquipa ami tomader</p>
      </div>
      <div className={`${styles.stick} ${styles.blue}`}></div>
      <div className={styles.image}>
        <img src={poster1.src} alt="" />
        <h1>Easy Returns</h1>
        <p>Be enim ad minim veniam liquipa ami tomader</p>
      </div>
      <div className={styles.stick}></div>
      <div className={styles.image}>
        <img src={poster1.src} alt="" />
        <h1>Easy Returns</h1>
        <p>Be enim ad minim veniam liquipa ami tomader</p>
      </div>
    </div>
  );
}

export default Adds;
