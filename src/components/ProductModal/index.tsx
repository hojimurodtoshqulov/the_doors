import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./styles.module.scss";
import ModalImages from "../ModalImages";
import { ProductType } from "@/shared/types";
import Button from "../Button";
import { API_URL } from "@/shared/constants";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function ProductModal({
  product,
  setBigImage,
}: {
  product: ProductType;
  setBigImage: Dispatch<
    SetStateAction<{
      src: string;
      isActive: boolean;
    }>
  >;
}) {
  const [form, setForm] = useState<{
    fullName: string;
    phoneNumber: string;
    quantity: number;
    productId: number | string;
  }>({
    fullName: "",
    phoneNumber: "",
    quantity: 1,
    productId: product.id,
  });
  const [disable, setDisable] = useState<boolean>(false);

  function handleClick() {
    setDisable(true);
    axios
      .post(`${API_URL}/api/order`, form)
      .finally(() => setDisable(false))
      .then((res) => {
        toast.success("Order sent", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(() =>
        toast.error("Cannot send your order", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  }
  return (
    <div className={styles.content}>
      <ModalImages
        images={product?.attachmentContents || []}
        setBigImage={setBigImage}
      />
      {/* {JSON.stringify(product)} */}
      <div className={styles.text}>
        <h1>{product.titleUz}</h1>
        <div className={styles.price}>
          <h2>from {product?.price * (1 - product.discount / 100)}$</h2>
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
        <div className={styles.description}>{product.descriptionUz}</div>
        <p style={{ paddingTop: 15 }}>
          Менеджеры компании ответят на все вопросы по телефону:
        </p>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, fullName: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Phone number"
            value={form.phoneNumber}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
          />
        </div>
        <Button
          onClick={handleClick}
          style={{
            width: "100%",
            borderRadius: 10,
            ...(disable
              ? {
                  background:
                    "linear-gradient(100.85deg, #0060ba8e -6.27%, #0067d58c 52.36%)",
                }
              : {}),
          }}
          disabled={disable}
        >
          ОФОРМИТЬ ЗАКАЗ В ТАШКЕНТЕ
        </Button>
      </div>
    </div>
  );
}

export default ProductModal;
