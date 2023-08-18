import { MainPropType, ProductType } from "@/shared/types";
import styles from "./card.module.scss";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Button from "../Button";
import CardSlider from "../ImageSlider";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import ImageSlider from "../ImageSlider";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import useIntl from "react-intl/src/components/useIntl";
import { useTarjima } from "@/utils/getContent";
import { useRouter } from 'next/router';


function ProductCard({
  product,
  setProduct,
  style,
  setIsModal,
 }: MainPropType & { 
  product?: ProductType;
  setProduct: Dispatch<SetStateAction<ProductType | undefined>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}) {
  const ref = useRef(null);
  const getContent = useTarjima();
  const entity = useIntersectionObserver(ref, {});
  const router = useRouter();

  const intl = useIntl();
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };
  return (
    <div
      className={`${styles.product} ${entity?.isIntersecting && styles.active}`}
      style={style}
      ref={ref}
      onClick={() => {
    
          router.push(`/products/${product?.id}`);
 
      }}
    >
     
      {product ? <ImageSlider images={product?.attachmentContentIds} /> : ""}
      <h2>{getContent(product?.titleRu, product?.titleUz)}</h2>
     
      <Button style={{ borderRadius: 10 }}>{t("showMore")}</Button>
    </div>
  );
}

export default ProductCard;
