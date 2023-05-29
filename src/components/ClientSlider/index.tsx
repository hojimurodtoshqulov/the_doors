import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./client.module.scss";
import image from "../../../public/media/hero4.png";
import { GoStar } from "react-icons/go";
import axios from "axios";
import { useTarjima } from "@/utils/getContent";

type ClientType = {
  id: number;
  commentRu: string;
  commentUz: string;
  fullName: string;
  job: string;
  contentId: number;
};

function ClientSlider() {
  const [clients, setClients] = useState<ClientType[]>([]);
  useEffect(() => {
    axios.get("https://the-doors.herokuapp.com/api/comments").then((res) => {
      setClients(res.data);
    });
  }, []);
  const getContent = useTarjima();
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
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={`client-slider-component ${styles.slider}`}>
      <Slider {...settings}>
        {clients.map((client: ClientType) => (
          <div key={client.id}>
            <div className={styles.card}>
              <div className={styles.review}>
                <div className={styles.quotes}>
                  <div></div>
                  <div></div>
                </div>
                {/* <div className={styles.stars}>
                  <GoStar color="#FFB400" />
                  <GoStar color="#FFB400" />
                  <GoStar color="#FFB400" />
                  <GoStar color="#FFB400" />
                  <GoStar color="#FFB400" />
                </div> */}
              </div>
              <p className={styles.description}>
                {getContent(client.commentRu, client.commentUz)}
              </p>
              <div className={styles.profile}>
                {/* <img
                  src={`https://the-doors.herokuapp.com/api/files/${client.contentId}`}
                  alt=""
                /> */}
                <div>
                  <h1>{client.fullName}</h1>
                  <p>{client.job}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ClientSlider;
