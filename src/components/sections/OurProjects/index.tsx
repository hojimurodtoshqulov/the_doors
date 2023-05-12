import Title from "../../Title";
import styles from "./projects.module.scss";
import image1 from "/public/media/av1 (1).jpg";
import image2 from "/public/media/ibu1 (2).jpg";
import image3 from "/public/media/ibu1 (3).jpg";
import image4 from "/public/media/kd2.jpg";
import image5 from "/public/media/1212.jpg";
import image6 from "/public/media/1213.jpg";
import image7 from "/public/media/1214.jpg";
import image8 from "/public/media/1215.jpg";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "./Image";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import useIntl from "react-intl/src/components/useIntl";
import axios from "axios";
import { log } from "console";

const images = [
  [image1.src, image2.src],
  [image3.src, image4.src],
  [image5.src, image6.src],
  [image7.src, image8.src],
];

function OurProjects() {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, { rootMargin: "-100px 0px" });
  const [mainImage, setMainImage] = useState({ isActive: false, src: "" });

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
  const intl = useIntl();
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };
  console.log(mainImage);

  return (
    <>
      <img
        src={mainImage.src}
        alt=""
        style={{ transform: `scale(${mainImage.isActive ? 1 : 0})` }}
        className={styles.mainImage}
        onClick={() => setMainImage((prev) => ({ ...prev, isActive: false }))}
      />
      <div
        className={`${entity?.isIntersecting && styles.active} ${
          styles.projects
        }`}
        ref={ref}
      >
        <Title>{t("projects")}</Title>
        <div className={styles.images}>
          {images.map((image) => (
            <div className={styles.row}>
              <Image
                src={image[0]}
                onClick={() =>
                  setMainImage((prev) => ({ src: image[0], isActive: true }))
                }
              />
              <Image
                src={image[1]}
                onClick={() =>
                  setMainImage((prev) => ({ src: image[1], isActive: true }))
                }
              />
            </div>
          ))}
        </div>
        <Slider {...settings}>
          {images.map((image) => (
            <div>
              <Image
                src={image[0]}
                style={{ transition: ".3s" }}
                onClick={() =>
                  setMainImage((prev) => ({ src: image[0], isActive: true }))
                }
              />
            </div>
          ))}
          {images.map((image) => (
            <div>
              <Image
                src={image[1]}
                style={{ transition: ".3s" }}
                onClick={() =>
                  setMainImage((prev) => ({ src: image[1], isActive: true }))
                }
              />
            </div>
          ))}
        </Slider>
      </div>{" "}
    </>
  );
}

export default OurProjects;
