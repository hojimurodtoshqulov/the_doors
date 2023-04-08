import styles from "./hero.module.scss";
import React from "react";
import hero1 from "../../../../public/media/hero1.png";
import hero2 from "../../../../public/media/hero2.png";
import hero3 from "../../../../public/media/hero3.png";
import hero4 from "../../../../public/media/hero4.png";

function Showcase() {
  return (
    <div className={styles.showcase}>
      <img src={hero1.src} alt="" className={`${styles.image}`} />
      <img src={hero2.src} alt="" className={`${styles.image}`} />
      <img src={hero3.src} alt="" className={`${styles.image}`} />
      <img src={hero4.src} alt="" className={`${styles.image}`} />
      <img src={hero4.src} alt="" className={`${styles.image}`} />
      <div className={styles.content}>
        <div>
          <h1>Lorem ipsum Lorem ipsom lorem</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>About more</button>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
