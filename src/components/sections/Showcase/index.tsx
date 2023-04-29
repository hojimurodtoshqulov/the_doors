import styles from "./hero.module.scss";
import React, { useRef } from "react";
import hero1 from "../../../../public/media/photo_2023-04-29_12-40-56.jpg";
import hero2 from "../../../../public/media/Image (3).png";
import hero3 from "../../../../public/media/Group.png";
import useIntersectionObserver from "@/utils/InterSectionObserver";

import useIntl from "react-intl/src/components/useIntl";

function Showcase() {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});

  const intl = useIntl();
  const t = (id: string) => {
    return intl.formatMessage({ id: id });
  };

  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${
        styles.showcase
      }`}
      ref={ref}
    >
      <div className={styles.text}>
        <h1>
          {/* <span>ECOHOUSE</span> <span>Style</span> */}
          <span>{t("showcase.title")}</span>
        </h1>
        <p>
          Stay informed about the market with real estate news and insights
          provided by real estate professionals and government agencies.
        </p>
        {/* <div className={styles.buttons}>
          <button>See Our Case Studies</button>
          <button className={styles.shaffof}>Watch A Demo</button>
        </div> */}
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
