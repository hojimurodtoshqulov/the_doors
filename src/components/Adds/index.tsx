import styles from "./add.module.scss";
import poster1 from "../../../public/media/Vector.png";
import { MainPropType } from "@/shared/types";

function Adds({style}:MainPropType) {
  return (
    <div className={styles.adds} style={style}>
      <div>
        <img src={poster1.src} alt="" />
        <h1>Easy Returns</h1>
        <p>Be enim ad minim veniam liquipa ami tomader</p>
      </div>
      <div className={styles.stick}></div>
      <div>
        <img src={poster1.src} alt="" />
        <h1>Easy Returns</h1>
        <p>Be enim ad minim veniam liquipa ami tomader</p>
      </div>
      <div className={`${styles.stick} ${styles.blue}`}></div>
      <div>
        <img src={poster1.src} alt="" />
        <h1>Easy Returns</h1>
        <p>Be enim ad minim veniam liquipa ami tomader</p>
      </div>
      <div className={styles.stick}></div>
      <div>
        <img src={poster1.src} alt="" />
        <h1>Easy Returns</h1>
        <p>Be enim ad minim veniam liquipa ami tomader</p>
      </div>
    </div>
  );
}

export default Adds;
