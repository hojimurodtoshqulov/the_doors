import Title from "@/components/Title";
import styles from "./crousel.module.scss";
import ClientCarousel from "@/components/ClientCarousel";
import { useRef } from "react";
 
function ClientsSection() {
 
  const handleNextClick = () => {
    //     if (sliderRef) {
    //       sliderRef.current.slideNext();
    //     }
  };
  const handlePrevClick = () => {
    //     console.log(sliderRef.current.slideNext);
    //     if (sliderRef) {
    //       sliderRef.current.slideNext();
    //     }
  };
  return (
    <div className={styles.carousel}>
      <div className={styles.title}>
        <Title style={{ fontSize: "45px" }}>What clients say about us</Title>
        <p>
          Bobore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitat ion ullamco laboris
        </p>
        <button onClick={handleNextClick}>{"<"}</button>
        <button onClick={handlePrevClick}>{">"}</button>
      </div>
      <div className={styles.slider}>
        <ClientCarousel />
      </div>
    </div>
  );
}

export default ClientsSection;
