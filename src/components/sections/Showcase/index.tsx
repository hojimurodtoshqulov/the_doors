import styles from "./hero.module.scss";
import React from "react";
import hero1 from "../../../../public/media/hero1.png";
import hero2 from "../../../../public/media/hero2.png";
import hero3 from "../../../../public/media/hero3.png";
import hero4 from "../../../../public/media/hero4.png";
import { BiSearch } from "react-icons/bi";
import Button from "@/components/Button";
import ShowcaseContent from "@/components/ShowcaseContent";

function Showcase() {
  return (
    <div className={styles.showcase}>
      <img src={hero1.src} alt="" className={`${styles.image}`} />
      <img src={hero2.src} alt="" className={`${styles.image}`} />
      <img src={hero3.src} alt="" className={`${styles.image}`} />
      <img src={hero4.src} alt="" className={`${styles.image}`} />
      <img src={hero4.src} alt="" className={`${styles.image}`} />
      <ShowcaseContent
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        title="Lorem ipsum Lorem ipsom lorem"
      >
        <Button style={{ borderRadius: "20px", padding: "12px 30px" }}>
          About more
        </Button>
      </ShowcaseContent>
    </div>
  );
}

export default Showcase;
