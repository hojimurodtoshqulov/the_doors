import React from "react";
import NewsCard from "../NewsCard";
import Slider from "react-slick";

function NewsSlider() {
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

    centerMode: true,
    centerPadding: "200px",

    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: { centerPadding: "50px" },
      },
      {
        breakpoint: 750,
        settings: { centerPadding: "100px", slidesToShow: 1 },
      },
      {
        breakpoint: 500,
        settings: { centerPadding: "50px", slidesToShow: 1 },
      },
      {
        breakpoint: 400,
        settings: { centerPadding: "20px", slidesToShow: 1 },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <NewsCard />
        </div>
        <div>
          <NewsCard />
        </div>
        <div>
          <NewsCard />
        </div>
        <div>
          <NewsCard />
        </div>
        <div>
          <NewsCard />
        </div>
      </Slider>
    </div>
  );
}

export default NewsSlider;
