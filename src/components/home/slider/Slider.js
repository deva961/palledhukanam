import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
function Slider() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <img src={require("../../../assets/sliders/1.jpg")} alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../../../assets/sliders/2.webp")} alt="2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../../../assets/sliders/3.jpg")} alt="3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
