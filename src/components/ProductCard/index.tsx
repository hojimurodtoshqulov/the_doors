import { MainPropType, ProductType } from "@/shared/types";
import styles from "./card.module.scss";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Button from "../Button";
import CardSlider from "../CardSlider";
import { useState } from "react";
import Modal from "../Modal";

function ProductCard({ product }: MainPropType & { product: ProductType }) {
  console.log(product);
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={styles.product}>
      {product.discount ? <div className={styles.discount}>15%</div> : ""}
      <CardSlider images={product.images} />
      <h2>Handling equipment</h2>
      <h1>
        from <span>{product.price}</span>${" "}
        {product.discount ? (
          <span style={{ color: "red", paddingLeft: "10px" }}>
            {product.price * (1 - product.discount / 100)}$
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
        <p>{product.rating} </p>
        <span>({product.ratingQuantity})</span>
      </div>

      <Button style={{ borderRadius: 10 }} onClick={() => setActive(true)}>
        Add to cart
      </Button>
      <Modal product={product} active={active} setActive={setActive}></Modal>
    </div>
  );
}

export default ProductCard;
