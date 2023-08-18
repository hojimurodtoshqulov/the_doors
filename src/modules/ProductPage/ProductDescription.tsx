import { API_URL } from "@/shared/constants";
import styles from "./product.module.scss";
import { ProductType } from "@/shared/types";
import { useTarjima, useTarjimaNode } from "@/utils/getContent";
 import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useIntl } from "react-intl";
import Button from "@/components/Button";

function ProductDescription({ product }: { product?: ProductType }) {
  const [form, setForm] = useState<{
    fullName: string;
    phoneNumber: string;
    productId?: number | string;
  }>({
    fullName: "",
    phoneNumber: "",
    productId: product?.id,
  });
  const getContent = useTarjimaNode();
  const getContentString = useTarjima();
  const intl = useIntl();
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };
  const [disable, setDisable] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductType[]>([]);
 
  useEffect(() => {
    setForm((prev) => ({ ...prev, productId: product?.id}))

  }, [product?.id]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch(console.log);
  }, []);

  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
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
          productId: product?.id,
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
    <div className={styles.description}>
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{
          __html:
            getContentString(product?.descriptionRu, product?.descriptionUz) ||
            "",
        }}
      ></div>

      <form className={styles.text} onSubmit={handleClick}>
        {getContent(
          <p style={{ paddingTop: 15, color: "#003D76" }}>
            Как сделать заказ?
            <br />
           онлайн (на сайте компании); с помощью звонка на контактные
            телефоны организации.
          </p>,
          <p style={{ paddingTop: 15, color: "#003D76" }}>
            Buyurtmani qanday qilish kerak?
            <br />
          Onlayn (kompaniya veb-saytida); Kontakt raqamlariga telefon
            qilish orqali.
          </p>
        )}

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
        <select
          onChange={(e) =>
            setForm((prev) => ({ ...prev, productId: e.target.value }))
          }
          value={form.productId}
        >
          {products.map((product) => (
            <option value={product.id}>
              {getContent(product.titleRu, product.titleUz)}
            </option>
          ))}
        </select>
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

export default ProductDescription;
