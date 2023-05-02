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
import useIntl from "react-intl/src/components/useIntl";

function ProductSection() {
  const [product, setProduct] = useState<ProductType>();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [bigImage, setBigImage] = useState({ src: "", isActive: true });

  useEffect(() => {
    axios.get(`${API_URL}/api/products`).then((res) => {
      setProducts(res.data);
    });
  }, []);
  const intl = useIntl();
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };
  return (
    <div className={styles.products}>
      <Title style={{ marginBottom: "calc(20px + 2vw)" }}>
        {t("products")}
      </Title>
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
        {product && (
          <ProductModal product={product} setBigImage={setBigImage} />
        )}
      </Modal>
      <img
        src={`data:image/png;base64,${bigImage.src}`}
        className={styles.image}
        style={{
          scale: bigImage.isActive ? "1" : "0",
          opacity: bigImage.isActive ? "1" : "0",
        }}
        onClick={() => setBigImage((prev) => ({ ...prev, isActive: false }))}
      />
    </div>
  );
}

export default ProductSection;
