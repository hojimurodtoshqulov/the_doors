import React, { useState } from 'react'
import Slider from 'react-slick'
import styles from "./slider.module.scss"
import { log } from 'console';

function ProductImageSlider({attachmentContentIds}:{attachmentContentIds?:number[]}) {
  const [modalImage,setModalImage] = useState<{attachmentContentId?:number,isActive:boolean}>({isActive:false}) 
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
      <img className={styles.modalImage} src={`https://the-doors.herokuapp.com/api/files/${modalImage.attachmentContentId}` } alt=""  style={{transform:`scale(${modalImage.isActive ? 1: 0})`}} onClick={()=> setModalImage(prev => ({...prev,isActive:false}))}/>
      <Slider {...settings}>
         {attachmentContentIds?.map((attachmentContentId:number) =>       <div key={attachmentContentId}>
          <img className={styles.image} src={`https://the-doors.herokuapp.com/api/files/${attachmentContentId}`} alt=""  onClick={()=> {
            console.log(1);
            
            setModalImage( {isActive:true, attachmentContentId}) }}  />
         </div>
)}
      </Slider>
    </div>
  )
}

export default ProductImageSlider