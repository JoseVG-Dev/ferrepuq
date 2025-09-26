import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SwiperCarousel = ({ images }) => {
  return (
    <Swiper spaceBetween={20} slidesPerView={1} loop={true}>
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-auto rounded-lg"/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
