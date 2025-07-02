import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import pizzaImg from '../assets/Pizza-2.jpg';
import chickenImg from '../assets/exps98665__SD143206C04_03_7b.jpg';
import salmonImg from '../assets/salmon.jpg';
import foodImg from '../assets/360.jpg';


const Slider = () => {
    return (
        <div>
             <div className="w-11/12 my-20 mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide>
            <img
              src={pizzaImg}
              alt="Pizza"
              className="mx-auto block h-60 md:h-80 lg:h-[480px] object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={chickenImg}
              alt="Chicken"
              className="mx-auto block h-60 md:h-80 lg:h-[480px] object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={salmonImg}
              alt="Salmon"
              className="mx-auto block h-60 md:h-80 lg:h-[480px] object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={foodImg}
              alt="Food"
              className="mx-auto block h-60 md:h-80 lg:h-[480px] object-contain"
            />
          </SwiperSlide>
       
       
        </Swiper>
      </div>
        </div>
    );
};

export default Slider;