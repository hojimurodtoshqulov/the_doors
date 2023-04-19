import ProjectImage from "@/components/ProjectImage";
import Title from "../../Title";
import styles from "./projects.module.scss";
import image from "/public/media/hero3.png";
import React from "react";
import Slider from "react-slick";

const images = [
  image.src,
  image.src,
  image.src,
  image.src,
  image.src,
  image.src,
  image.src,
  image.src,
];

function OurProjects() {
  const settings = {
    customPaging: function () {
      return (
        <a>
          <button></button>{" "}
        </a>
      );
    },
    dotsClass: "slick-dot",
    dots: true,

    autoplay: true,
    autoplaySpeed: 4000,

    className: styles.slider,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.projects}>
      <Title>Наши проекты</Title>
      <div className={styles.images}>
        <div className={styles.row}>
          <ProjectImage src={image.src} />
          <ProjectImage src={image.src} />
        </div>
        <div className={styles.row}>
          {" "}
          <ProjectImage src={image.src} />
          <ProjectImage src={image.src} />
        </div>
        <div className={styles.row}>
          {" "}
          <ProjectImage src={image.src} />
          <ProjectImage src={image.src} />
        </div>
        <div className={styles.row}>
          {" "}
          <ProjectImage src={image.src} />
          <ProjectImage src={image.src} />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <img src={image.src} style={{ transition: ".3s" }} />
        </div>
        <div>
          <img src={image.src} style={{ transition: ".3s" }} />
        </div>
        <div>
          <img src={image.src} style={{ transition: ".3s" }} />
        </div>
        <div>
          <img src={image.src} style={{ transition: ".3s" }} />
        </div>
        <div>
          <img src={image.src} style={{ transition: ".3s" }} />
        </div>
        <div>
          <img src={image.src} style={{ transition: ".3s" }} />
        </div>
      </Slider>
    </div>
  );
}

export default OurProjects;
