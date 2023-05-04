import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./styles.module.scss";
import ModalImages from "../ModalImages";
import { ProductType } from "@/shared/types";
import Button from "../Button";
import { API_URL } from "@/shared/constants";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import useIntl from "react-intl/src/components/useIntl";
import { useTarjima } from "@/utils/getContent";

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
  const getContent = useTarjima();
  const [disable, setDisable] = useState<boolean>(false);
  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
        setForm({
          fullName: "",
          phoneNumber: "",
          quantity: 1,
          productId: product.id,
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
  const intl = useIntl();
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };
  return (
    <div className={styles.content}>
      <ModalImages
        images={product?.attachmentContentIds || []}
        setBigImage={setBigImage}
      />
      {/* {JSON.stringify(product)} */}
      <form className={styles.text} onSubmit={handleClick}>
        <h1>{getContent(product.titleRu, product.titleUz)}</h1>
        <div className={styles.price}>
          <h2>
            {t("from")} {product?.price * (1 - product.discount / 100)}$
          </h2>
          <div>
            <button
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  quantity: prev.quantity - 1 ? prev.quantity - 1 : 1,
                }))
              }
              type="button"
            >
              -
            </button>
            <input type="text" value={form.quantity} />
            <button
              onClick={() =>
                setForm((prev) => ({ ...prev, quantity: prev.quantity + 1 }))
              }
              type="button"
            >
              +
            </button>
          </div>
        </div>
        <div className={styles.description}>
          {getContent(product.descriptionRu, product.descriptionUz)}
        </div>
        <p style={{ paddingTop: 15, color: "#ff4c4c" }}>
          {t("contactPageDesc")}
          {/* Менеджеры компании ответят на все вопросы по телефону: */}
        </p>
        <div className={styles.form}>
          <input
            type="text"
            placeholder={t("contactUsFullName")}
            value={form.fullName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, fullName: e.target.value }))
            }
            required
          />
          <input
            type="text"
            placeholder={t("contactUsNumber")}
            value={form.phoneNumber}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
            required
          />
        </div>
        <Button
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
          {...{ htmlType: "submit" }}
        >
          {t("order")}
        </Button>
      </form>
    </div>
  );
}

export default ProductModal;
