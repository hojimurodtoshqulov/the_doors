import React, { useState } from "react";
import styles from "./styles.module.scss";
import ModalImages from "../ModalImages";
import { ProductType } from "@/shared/types";
import Button from "../Button";
import { log } from "console";

function ProductModal({ product }: { product: ProductType }) {
  const [form, setForm] = useState<{
    name: string;
    phone: string;
    quantity: number;
  }>({
    name: "",
    phone: "",
    quantity: 1,
  });
  function handleClick() {
    console.log("clicked");
  }
  return (
    <div className={styles.content}>
      <ModalImages images={product?.images || []} />
      {/* {JSON.stringify(product)} */}
      <div className={styles.text}>
        <h1>Шлагбаумы</h1>
        <div className={styles.price}>
          <h2>from 1 099$</h2>
          <div>
            <button
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  quantity: prev.quantity - 1 ? prev.quantity - 1 : 1,
                }))
              }
            >
              -
            </button>
            <input type="text" value={form.quantity} />
            <button
              onClick={() =>
                setForm((prev) => ({ ...prev, quantity: prev.quantity + 1 }))
              }
            >
              +
            </button>
          </div>
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          accusantium voluptates necessitatibus minus, ad ex facere quasi quas
          explicabo dolore. Pariatur fuga quis, alias voluptatem sed quasi
          debitis voluptatibus totam ut. Exercitationem perferendis, doloremque
          mollitia natus accusantium assumenda deserunt ipsum iste rerum
          deleniti molestias? Adipisci e ique expedita aut ipsam, odio vel vero
          ducimus corporis saepe ea aliquam cum nam. Nulla, aspernatur optio
          vero magni laboriosam saepe esse? Nostrum, corporis ipsam.
        </div>
        <p>Менеджеры компании ответят на все вопросы по телефону:</p>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Phone number"
            value={form.phone}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </div>
        <Button onClick={handleClick} style={{ width: "100%" }}>
          ОФОРМИТЬ ЗАКАЗ В ТАШКЕНТЕ
        </Button>
      </div>
    </div>
  );
}

export default ProductModal;
