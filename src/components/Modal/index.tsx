import { ProductType } from "@/shared/types";
import styles from "./modale.module.scss";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ModalImages from "../ModalImages";
import Button from "../Button";
import ProductModal from "../ProductModal";

function Modal({
  product,
  children,
  setIsModal,
  isModal,
}: {
  product?: ProductType;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  isModal: boolean;
}) {
  useEffect(() => {
    const y = window.scrollY;
    const handleScroll = () => {
      isModal && window.scrollTo(window.scrollX, y);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isModal]);

  return (
    <div className={`${styles.modal} ${isModal && styles.active}`}>
      <p
        onClick={() => {
          setIsModal(false);
        }}
        className={styles.back}
      ></p>
      <p
        onClick={() => {
          setIsModal(false);
        }}
        className={styles.back}
      ></p>
      <div className={styles.content}>{children} </div>
    </div>
  );
}
export default Modal;
