import { MainPropType, ProductType } from "@/shared/types";
import styles from "./card.module.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Button from "../Button";
import Link from "next/link";

function ProductCard({ product }: MainPropType & { product: ProductType }) {
  return (
    <div className={styles.product}>
      <div className={styles.images}>
        <img src={product.images[0]} alt="" />
      </div>
      <h2>Handling equipment</h2>
      <h1>
        from <span>{product.price}</span>${" "}
        <span style={{ color: "red", paddingLeft: "10px" }}>
          {product.price}$
        </span>
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
      <Link href="/">
        <a>
          <Button>Add to cart</Button>
        </a>
      </Link>
    </div>
  );
}

export default ProductCard;
