import "./Carousel.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import {Navigation} from "swiper";

const Carousel = ({elements}) => {
  let swiperSlides = []
  elements.foreach((element, index) => {
    swiperSlides.push(<SwiperSlide key={index}>{element}</SwiperSlide>)
  })

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
