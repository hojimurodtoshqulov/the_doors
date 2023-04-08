import Title from "@/components/Title";
import styles from "./product.module.scss";
import { ProductType } from "@/shared/types";
import ProductCard from "@/components/ProductCard";
import image1 from "../../../../public/media/hero1.png";
import image2 from "/public/media/hero2.png";

const products: ProductType[] = [
  {
    images: [image1.src, image2.src],
    title: "Handling equipment",
    price: 1099,
    rating: 4,
    ratingQuantity: 232,
  },
  {
    images: [image1.src, image2.src],
    title: "Handling equipment",
    price: 1099,
    rating: 4,
    ratingQuantity: 232,
  },
  {
    images: [image1.src, image2.src],
    title: "Handling equipment",
    price: 1099,
    rating: 4,
    ratingQuantity: 232,
  },
  {
    images: [image1.src, image2.src],
    title: "Handling equipment",
    price: 1099,
    rating: 4,
    ratingQuantity: 232,
  },
  {
    images: [image1.src, image2.src],
    title: "Handling equipment",
    price: 1099,
    rating: 4,
    ratingQuantity: 232,
  },
  {
    images: [image1.src, image2.src],
    title: "Handling equipment",
    price: 1099,
    rating: 4,
    ratingQuantity: 232,
  },
  {
    images: [image1.src, image2.src],
    title: "Handling equipment",
    price: 1099,
    rating: 4,
    ratingQuantity: 232,
  },
  {
    images: [image1.src, image2.src],
    title: "Handling equipment",
    price: 1099,
    rating: 4,
    ratingQuantity: 232,
  },
];

function ProductSection() {
  return (
    <div className={styles.products}>
      <Title>Products</Title>

      <div className={styles.cards}>
        {products.map((product: ProductType) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
