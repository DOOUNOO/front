import "./ReviewsCarousel.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import {Pagination} from "swiper";
import React from "react";

const ReviewsCarousel = ({elements}) => {
  let swiperSlides = []
  for (let i = 0; i < elements.length; i++) {
    swiperSlides.push(<SwiperSlide key={i}>{elements[i]}</SwiperSlide>)
  }

  return (
    <Swiper
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="mySwiper">
      {swiperSlides}
    </Swiper>
  );
};

export default ReviewsCarousel;
