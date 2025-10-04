'use client'



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-flip";
import { motion } from "framer-motion";
import { Navigation, Autoplay } from "swiper/modules";
import { EffectCube, EffectCoverflow, EffectFlip } from "swiper/modules";
import { useState } from "react";
import Data from "../../data/data";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";



const HeroComponent = () => {




  return <div className="relative">

 <Swiper
   modules={[Autoplay, Navigation, EffectCube, EffectCoverflow, EffectFlip]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
        slidesPerView={1}
          navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      
        className="mySwiper"
      >
        {Data.map((item , index) => (
          <SwiperSlide key={index}>
            <motion.div className="relative w-full h-[65vh] sm:h-[65vh] md:h-[80vh] lg:h-[80vh] overflow-hidden"
               
              >
            <Image
  src={`/${item.image}`}      
  alt={item.title}
  fill                        
  className="object-center"
  priority={index === 0}     
/>

              <div className=" absolute inset-0 flex flex-col gap-6 items-center justify-center bg-black/50">
                <p
  className="
    relative z-10
    text-white
    w-[full]
    sm:w-[full]
    md:w-[400px]
    lg:w-[600px]
    xl:w-[900px]
    min-w-0 min-h-0
    max-w-none max-h-none
    text-center
    font-bold
    text-xl sm:text-xl md:text-3xl lg:text-4xl
    tracking-[0px]
    opacity-100
    mb-8
    
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
            </motion.div>
          </SwiperSlide>
        ))}



      </Swiper>


{/* الزرار اللي انت جايبه */}
      <button
        aria-label="Previous"
        className="mt-4 custom-prev absolute left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14  rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition"
      >
        <FaArrowLeft className="text-white text-md" />
   
      </button>

      <button
        aria-label="Next"
        className="mt-4 custom-next absolute right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition"
      >
        <FaArrowRight className="text-white text-md" />
    
      </button>

      

  </div>;
}

export default HeroComponent



