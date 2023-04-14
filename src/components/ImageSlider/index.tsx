import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./slider.module.scss";

function ImageSlider({ images }: { images: string[] }) {
  const [isSliding, setIsSliding] = useState<boolean>(false);
  const settings = {
    infinite: isSliding,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <div
      className={`image-slider-component ${styles.silder}`}
      onMouseEnter={() => setIsSliding(true)}
      onMouseLeave={() => setIsSliding(false)}
    >
      <Slider {...settings}>
        {images.map((image, i) => (
          <div key={i}>
            <img className={styles.image} src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
