import React from 'react'
import Slider from 'react-slick'
import styles from "./slider.module.scss"

function ProductImageSlider({attachmentContentIds}:{attachmentContentIds?:number[]}) {
  const settings = {
    customPaging: function () {
      return (
        <a>
          <button></button>{" "}
        </a>
      );
    },

    dots: true,    dotsClass: "slick-dot",

    
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    //  autoplaySpeed: 2000, 

    responsive: [
       {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
             
          }
     
       
      }
    ]
  };

  return (
    <div className='image-slider'>
      <Slider {...settings}>
         {attachmentContentIds?.map((attachmentContentId:number) =>       <div key={attachmentContentId}>
          <img className={styles.image} src={`https://the-doors.herokuapp.com/api/files/${attachmentContentId}`} alt=""   />
         </div>
)}
      </Slider>
    </div>
  )
}

export default ProductImageSlider