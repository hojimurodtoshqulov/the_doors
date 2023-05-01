import { MainPropType, ProductType } from "@/shared/types";
import styles from "./card.module.scss";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Button from "../Button";
import CardSlider from "../ImageSlider";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import Modal from "../Modal";
import ImageSlider from "../ImageSlider";
import useIntersectionObserver from "@/utils/InterSectionObserver";

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

  return (
    <div
      className={`${styles.product} ${entity?.isIntersecting && styles.active}`}
      style={style}
      ref={ref}
      onClick={() => {
        setIsModal(true);
        setProduct(product);
      }}
    >
      {/* {product?.discount ? (
        <div className={styles.discount}>{product.discount}%</div>
      ) : (
        ""
      )} */}
      {product ? <ImageSlider images={product?.attachmentContents} /> : ""}
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
        {product?.descriptionUz?.slice(0, isLong ? -1 : 60)}...{" "}
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
