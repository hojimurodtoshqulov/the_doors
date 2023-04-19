import styles from "./partners.module.scss";
import { PartnerType } from "../sections/PartnersSection";
import Link from "next/link";
import { useRef } from "react";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import Slider from "react-slick";

function Partners({ partners }: { partners: PartnerType[] }) {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${
        styles.parnters
      }`}
      ref={ref}
    >
      <Slider {...settings}>
        {partners.map((partners: PartnerType) => (
          <div>
            <Link href={partners.link} key={partners.id}>
              <a>
                <img src={partners.image} alt="" />
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Partners;
