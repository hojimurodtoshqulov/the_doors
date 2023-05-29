import React from "react";
import styles from "./styles.module.scss";
import image1 from "../../../../public/media/photo_1_2023-05-08_13-15-15.jpg";
import image2 from "../../../../public/media/photo_2_2023-05-08_13-15-15.jpg";
import image3 from "../../../../public/media/photo_3_2023-05-08_13-15-15.jpg";
import Title from "@/components/Title";
import { useTarjima } from "@/utils/getContent";

function Certification() {
  const getContent = useTarjima();
  return (
    <div className={styles.container}>
      <Title>{getContent("ДИПЛОМЫ", "Diplomlar")}</Title>
      <div className={styles.cert}>
        <div>
          <img src={image2.src} alt="" />
          <img src={image3.src} alt="" />
        </div>
        <img src={image1.src} alt="" />
      </div>
    </div>
  );
}

export default Certification;
