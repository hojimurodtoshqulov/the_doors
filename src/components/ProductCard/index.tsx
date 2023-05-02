import { MainPropType, ProductType } from "@/shared/types";
import styles from "./card.module.scss";
import { Dispatch, SetStateAction, useRef, useState, useEffect } from "react";
import ImageSlider from "../ImageSlider";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import axios from "axios";
import { log } from "console";

function ProductCard({
  product,
  setProduct,
  style,
  setIsModal,
}: MainPropType & {
  product?: ProductType;
  setProduct: Dispatch<SetStateAction<ProductType | undefined>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}) {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});
  const [isLong, setIsLong] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState(product);

  useEffect(() => {
    (async () => {
      // Promise.race(axios.get)
      try {
        const attachmentContents: { data: string }[] = await Promise.all(
          currentProduct?.attachmentContentIds.map((id) =>
            axios.get(`https://the-doors.herokuapp.com/api/files/${id}`)
          ) || []
        );
        console.log(attachmentContents);
        setCurrentProduct(
          currentProduct && { ...currentProduct, attachmentContents }
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(currentProduct);

  return (
    <div
      className={`${styles.product} ${entity?.isIntersecting && styles.active}`}
      style={style}
      ref={ref}
      onClick={() => {
        setIsModal(true);
        setProduct(currentProduct);
      }}
    >
      {/* {product?.discount ? (
        <div className={styles.discount}>{product.discount}%</div>
      ) : (
        ""
      )} */}
      {currentProduct ? (
        <ImageSlider images={currentProduct?.attachmentContents} />
      ) : (
        ""
      )}
      <h2>{product?.titleUz}</h2>
      {/* <h1>
        from <span>{product?.price}</span>${" "}
        {product?.discount ? (
          <span style={{ color: "red", paddingLeft: "10px" }}>
            {Math.round(product?.price * (1 - product.discount / 100))}$
          </span>
        ) : (
          ""
        )}
      </h1> */}
      <p>
        {currentProduct?.descriptionUz?.slice(0, isLong ? -1 : 60)}...{" "}
        <span onClick={() => setIsLong((prev) => !prev)}>more</span>
      </p>
      {/* <Button
        style={{ borderRadius: 10 }}
         
      >
        Add to cart
      </Button> */}
    </div>
  );
}

export default ProductCard;
