import Title from "@/components/Title";
import styles from "./product.module.scss";
import { ProductType } from "@/shared/types";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/product";
import CardsSlider from "@/components/CardsSlider";
import { useState } from "react";
import Modal from "@/components/Modal";

function ProductSection() {
  const [product, setProduct] = useState<ProductType>();

  return (
    <div className={styles.products}>
      <Title style={{ marginBottom: "calc(20px + 2vw)" }}>Products</Title>

      <div className={styles.cardsMax}>
        {products.map((product: ProductType) => (
          <ProductCard
            product={product}
            setProduct={setProduct}
            key={product.id}
          />
        ))}
      </div>
      <div className={styles.cardsMin}>
        <CardsSlider products={products} setProduct={setProduct} />
      </div>
      <Modal product={product} setProduct={setProduct}></Modal>
    </div>
  );
}

export default ProductSection;
