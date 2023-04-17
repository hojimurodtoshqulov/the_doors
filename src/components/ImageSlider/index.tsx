import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./slider.module.scss";

function ImageSlider({ images }: { images: string[] }) {
  const [isSliding, setIsSliding] = useState<boolean>(false);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 2000,
    autoplay: isSliding,
    pauseOnHover: false,
    cssEase: "linear",
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
