'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Data from "../../data/data";


const SwiperComponent = () => {
  return <div>

 <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {Data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-[80vh] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="slide-img w-full h-full"
              />

              <div className=" absolute inset-0 flex flex-col gap-6 items-center justify-center">
                <p
  className="
    relative z-10
    text-white
    w-[full]
    sm:w-[full]
    md:w-[400px]
    lg:w-[600px]
    xl:w-[900px] h-[85px]
    min-w-0 min-h-0
    max-w-none max-h-none
    text-center
    font-bold
    text-4xl
    tracking-[0px]
    opacity-100
    
  "
  style={{
    textShadow: "rgba(7, 133, 134, 0.83) 4px 2px 0px",
    transform: "translate(0px, 0px)",
  }}
>
  {item.title}
</p>

                <button className="bg-white cursor-pointer mt-8 text-xl text-black px-8 py-3 rounded-lg hover:bg-[#056158] hover:text-white  transition duration-300">
                  اقرأ المزيد
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

  </div>;
}

export default SwiperComponent;