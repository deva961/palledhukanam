import React, { useState } from "react";
import { BsBasket, BsHeartFill } from "react-icons/bs";
// import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { bestSeller } from "../../../constants/products";

function BestSeller() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }
  return (
    <div className="my-8">
      <div className="flex items-center justify-center space-x-5">
        <span className="h-[2px] w-16 bg-green-700"></span>
        <img src={require("../../../assets/tree.jpg")} alt="Leaves" />
        <span className="h-[2px] w-16 bg-green-700"></span>
      </div>
      <p className="text-center text-green-700 text-3xl">
        Best Seller Products
      </p>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        className="mySwiper mt-10"
      >
        {bestSeller.map((item) => (
          <SwiperSlide
            className="rounded-md text-center p-3 bestSeller-slider"
            key={item.id}
          >
            <div className="features relative flex items-center justify-between">
              <button className="p-3 rounded-full border shadow-md">
                <BsBasket />
              </button>
              <button className="p-3 rounded-full border shadow-md">
                <BsHeartFill />
              </button>
            </div>
            <img
              src={item.img}
              alt={item.name}
              className="h-56 w-auto mx-auto"
            />
            <p className="text-green-700 font-semibold">{item.name}</p>
            <p className="font-light">
              {item.quantity} <span className="font-sans">₹</span> {item.price}
            </p>
            <div className="flex items-center space-x-3 justify-center mt-2">
              <button
                className="border border-green-700 px-2 rounded"
                onClick={decrementCounter}
              >
                -
              </button>
              <input
                className="border border-green-700 w-12 px-2 rounded text-center"
                value={counter}
              />

              <button
                className="border border-green-700 px-2 rounded"
                onClick={incrementCounter}
              >
                +
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BestSeller;
