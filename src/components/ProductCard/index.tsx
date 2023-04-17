import { MainPropType, ProductType } from "@/shared/types";
import styles from "./card.module.scss";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Button from "../Button";
import CardSlider from "../ImageSlider";
import { Dispatch, SetStateAction, useState } from "react";
import Modal from "../Modal";
import ImageSlider from "../ImageSlider";

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
  return (
    <div className={styles.product} style={style}>
      {product?.discount ? <div className={styles.discount}>15%</div> : ""}
      {product ? <ImageSlider images={product.images} /> : ""}
      <h2>Handling equipment</h2>
      <h1>
        from <span>{product?.price}</span>${" "}
        {product?.discount ? (
          <span style={{ color: "red", paddingLeft: "10px" }}>
            {product?.price * (1 - product.discount / 100)}$
          </span>
        ) : (
          ""
        )}
      </h1>
      <div className={styles.rating}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
        <FaRegStar />
        <p>{product?.rating} </p>
        <span>({product?.ratingQuantity})</span>
      </div>

      <Button
        style={{ borderRadius: 10 }}
        onClick={() => {
          setIsModal(true);
          setProduct(product);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
