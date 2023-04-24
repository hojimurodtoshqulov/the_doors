import Title from "@/components/Title";
import styles from "./product.module.scss";
import { ProductType } from "@/shared/types";
import ProductCard from "@/components/ProductCard";
// import { products } from "@/data/product";
import CardsSlider from "@/components/CardsSlider";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import ProductModal from "@/components/ProductModal";
import axios from "axios";
import { API_URL } from "@/shared/constants";

function ProductSection() {
  const [product, setProduct] = useState<ProductType>();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);

  useEffect(() => {
    axios.get(`${API_URL}/api/products`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className={styles.products}>
      <Title style={{ marginBottom: "calc(20px + 2vw)" }}>Products</Title>

      <div className={styles.cardsMax}>
        {products.map((product: ProductType) => (
          <ProductCard
            product={product}
            setProduct={setProduct}
            setIsModal={setIsModal}
            key={product.id}
          />
        ))}
      </div>
      <div className={styles.cardsMin}>
        <CardsSlider
          products={products}
          setProduct={setProduct}
          setIsModal={setIsModal}
        />
      </div>
      <Modal product={product} setIsModal={setIsModal} isModal={isModal}>
        {product && <ProductModal product={product} />}
      </Modal>
    </div>
  );
}

export default ProductSection;
