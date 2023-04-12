import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styles from "./slider.module.scss";

function ImageSlider({ images }: { images: string[] }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
  };
  return (
    <div className={`image-slider-component ${styles.silder}`}>
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
