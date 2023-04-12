import Title from "@/components/Title";
import styles from "./crousel.module.scss";
import ClientCarousel from "@/components/ClientCarousel";
import { useRef } from "react";
import ClientSlider from "@/components/ClientSlider";
import Blob from "@/components/Blob";

function ClientsSection() {
  return (
    <div className={styles.carousel}>
      <Blob blobType="first" color="blue" />
      <Blob blobType="second" color="blue" />
      <Blob blobType="third" color="blue" />
      <Blob blobType="fourth" color="blue" />
      <div className={styles.about}>
        <Title style={{ fontSize: 45 }}>What clients say about us</Title>
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
