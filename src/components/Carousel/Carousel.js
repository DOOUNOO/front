import "./Carousel.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import {Navigation} from "swiper";
import React from "react";

const Carousel = ({elements}) => {
  let swiperSlides = []
  for (let i = 0; i < elements.length; i++) {
    swiperSlides.push(<SwiperSlide key={i}>{elements[i]}</SwiperSlide>)
  }

  return (
    <Swiper slidesPerView={4}
            slidesPerGroup={4}
            navigation={true}
            modules={[Navigation]}
            spaceBetween={20}
            className="mySwiper">
      {swiperSlides}
    </Swiper>
  );
};

export default Carousel;
