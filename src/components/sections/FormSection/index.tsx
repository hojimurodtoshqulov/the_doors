import Link from "next/link";
import styles from "./contact.module.scss";
import Button from "../../Button";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import { useRef, useState } from "react";
import { API_URL } from "@/shared/constants";
import axios from "axios";
import { toast } from "react-toastify";
import useIntl from "react-intl/src/components/useIntl";

function FormSection() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const entity = useIntersectionObserver(ref, {});
  const [disable, setDisable] = useState<boolean>(false);
  const intl = useIntl();
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };
  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${styles.contact}`}
      id="contact"
      ref={ref}
    >
      <form
        action="/"
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formdata = new FormData(e.currentTarget);
          const data = Object.fromEntries(formdata.entries());
          setDisable(true);

          axios
            .post(`${API_URL}/api/order`, data, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .finally(() => setDisable(false))
            .then((res) => {
              formRef.current?.reset();
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
            .catch((e) => {
              toast.error("Cannot send your order", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            });
        }}
      >
        <h1 className="banana" style={{ fontWeight: "100" }}>
          {t("contactUs")}
        </h1>
        <div className={styles.line}></div>
        <input
          type="text"
          name="fullName"
          placeholder={t("contactUsProductName")}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder={t("contactUsNumber")}
          required
        />
        <textarea name="message" placeholder={t("contactUsMessage")}></textarea>
        <div className={styles.line}></div>
        <Button
          style={{
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
          {t("navBtn")}
        </Button>
      </form>
      <div className={styles.map}>
        {/* <div style="position:relative;overflow:hidden;"> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.4358375597396!2d69.29764762849813!3d41.29268984230388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5fc9896b4e7%3A0xbf82f52456417ac6!2zVEhFRE9PUlMgLSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuNC1INCy0L7RgNC-0YLQsA!5e0!3m2!1sen!2s!4v1683784030605!5m2!1sen!2s"></iframe>{" "}
        {/* <div>
          <p>20, Awesome Road, New York, Usa 4D BS3</p>

          <Link href="/">
            <a>+123 456 7890</a>
          </Link>
          <Link href="/">
            <a>hello@ulina.com</a>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default FormSection;
