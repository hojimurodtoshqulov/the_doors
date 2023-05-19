import styles from "./hero.module.scss";
import React, { useRef, useEffect, useState } from "react";
import hero1 from "../../../../public/media/showcase5.jpg";
import hero2 from "../../../../public/media/showcase4.jpg";
import hero3 from "../../../../public/media/Group.png";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import { ProductType } from "@/shared/types";
import { API_URL } from "@/shared/constants";
import axios from "axios";
import useIntl from "react-intl/src/components/useIntl";
import { useTarjima } from "@/utils/getContent";

function Showcase() {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});
  const [products, setProducts] = useState<ProductType>();
  const [productImages, setProductImages] = useState<ProductType[]>([]);
  const intl = useIntl();
  const getContent = useTarjima();
  const t = (id: string) => {
    return intl.formatMessage({ id: id });
  };
  useEffect(() => {
    axios.get(`${API_URL}/api/show-case/1`).then((res) => {
      setProducts(res?.data);
      setProductImages(res?.data?.attachmentContentIds);
    })      .catch(console.log);
    ;
  }, []);

  console.log(products);
  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${
        styles.showcase
      }`}
      ref={ref}
    >
      {/* {products.map((item) => {
				item.titleRu;
			})} */}
      <div className={styles.text}>
        <h1 className="banana">
          {getContent(products?.titleRu, products?.titleUz)}
        </h1>
        <p>{getContent(products?.descriptionRu, products?.descriptionUz)}</p>{" "}
      </div>
      <div className={styles.images}>
        <div className={styles.ovals}>
          <div className={`${styles.image} ${styles.image1}`}>
            <img src={`${API_URL}/api/files/${productImages[0]}`} alt="" />
          </div>
          <div className={styles.line}></div>{" "}
          <div className={`${styles.image} ${styles.image2}`}>
            <img src={`${API_URL}/api/files/${productImages[1]}`} alt="" />
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
