import { ProductType } from "@/shared/types";
import styles from "./modale.module.scss";
import { Dispatch, SetStateAction } from "react";
import ModalImages from "../ModalImages";

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
      <div className={styles.content}>
        <ModalImages images={product?.images || []} />
        {/* {JSON.stringify(product)} */}
        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat porro
          quos dolores officia unde quasi laboriosam voluptates consectetur
          totam aut possimus voluptatum provident recusandae, mollitia fuga
          accusamus rem neque minus.
        </div>
      </div>
    </div>
  );
}
export default Modal;
