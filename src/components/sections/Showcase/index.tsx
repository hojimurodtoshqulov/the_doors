import styles from "./hero.module.scss";
import React, { useRef } from "react";
import hero1 from "../../../../public/media/hero1.png";
import hero2 from "../../../../public/media/hero2.png";
import hero3 from "../../../../public/media/Group.png";
import hero4 from "../../../../public/media/hero4.png";
import { BiSearch } from "react-icons/bi";
import Button from "@/components/Button";
import ShowcaseContent from "@/components/ShowcaseContent";
import useIntersectionObserver from "@/utils/InterSectionObserver";

function Showcase() {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});
  console.log(entity?.isIntersecting);

  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${
        styles.showcase
      }`}
      ref={ref}
    >
      <div className={styles.text}>
        <h1>
          <span>ECOHOUSE</span> <span>Style</span>
        </h1>
        <p>
          Stay informed about the market with real estate news and insights
          provided by real estate professionals and government agencies.
        </p>
        <div className={styles.buttons}>
          <button>See Our Case Studies</button>
          <button className={styles.shaffof}>Watch A Demo</button>
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles.ovals}>
          <div className={`${styles.image} ${styles.image1}`}>
            {" "}
            <img src={hero1.src} alt="" />
          </div>
          <div className={styles.line}></div>{" "}
          <div className={`${styles.image} ${styles.image2}`}>
            {" "}
            <img src={hero2.src} alt="" />
          </div>
        </div>
        <img src={hero3.src} alt="" />
      </div>
    </div>
  );
}

export default Showcase;

//   return (
//     <div className={styles.showcase}>
//       <img src={hero1.src} alt="" className={`${styles.image}`} />
//       <img src={hero2.src} alt="" className={`${styles.image}`} />
//       <img src={hero3.src} alt="" className={`${styles.image}`} />
//       <img src={hero4.src} alt="" className={`${styles.image}`} />
//       <img src={hero4.src} alt="" className={`${styles.image}`} />
//       <ShowcaseContent
//         paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         title="Lorem ipsum Lorem ipsom lorem"
//       >
//         <Button style={{ borderRadius: "20px", padding: "12px 30px" }}>
//           About more
//         </Button>
//       </ShowcaseContent>
//     </div>
//   );
// }

// export default Showcase;
