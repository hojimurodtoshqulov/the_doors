import Title from "@/components/Title";
import styles from "./crousel.module.scss";
import { useRef } from "react";
import ClientSlider from "@/components/ClientSlider";
import Blob from "@/components/Blob";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import { useTarjima } from "@/utils/getContent";

function ClientsSection() {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});
  const getContent = useTarjima();

  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${
        styles.carousel
      }`}
      ref={ref}
    >
      <Blob blobType="first" color="blue" />
      <Blob blobType="second" color="blue" />
      <Blob blobType="third" color="blue" />
      <Blob blobType="fourth" color="blue" />
      <div className={styles.about}>
        <Title style={{ fontSize: 45 }}>
          {getContent("Что говорят о нас клиенты", "Mizjozlarmizning fikrlari")}
        </Title>
        <p>
          Bobore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitat ion ullamco laboris
        </p>
      </div>
      <ClientSlider />
    </div>
  );
}

export default ClientsSection;
