import { ProductType } from "@/shared/types";
import styles from "./modale.module.scss";
import { Dispatch, SetStateAction } from "react";

function Modal({
  product,
  setProduct,
}: {
  product?: ProductType;
  setProduct: Dispatch<SetStateAction<ProductType | undefined>>;
}) {
  return (
    <div className={`${styles.modal} ${product && styles.active}`}>
      <p
        onClick={() => {
          setProduct(undefined);
        }}
        className={styles.back}
      ></p>
      <p
        onClick={() => {
          setProduct(undefined);
        }}
        className={styles.back}
      ></p>
      <div className={styles.content}>{JSON.stringify(product)}</div>
    </div>
  );
}
export default Modal;
