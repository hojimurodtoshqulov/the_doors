import { ProductType } from "@/shared/types";
import styles from "./modale.module.scss";

function Modal({
  product,
  active,
  setActive,
}: {
  product: ProductType;
  active: boolean;
  setActive: (a: boolean) => void;
}) {
  return (
    <div className={`${styles.modal} ${active && styles.active}`}>
      <p
        onClick={() => {
          setActive(false);
        }}
        className={styles.back}
      ></p>
      <p
        onClick={() => {
          setActive(false);
        }}
        className={styles.back}
      ></p>
      <div className={styles.content}>{JSON.stringify(product)}</div>
    </div>
  );
}
export default Modal;
