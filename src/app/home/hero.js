

'use client'

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Blind from "../components/framer";
import Data from "../../data/data";

const HeroComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, EffectCoverflow]}
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
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {Data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[65vh] sm:h-[65vh] md:h-[80vh] lg:h-[80vh] overflow-hidden">
              {/* key مختلف لكل مرة slide يتغير → animation مضمون */}
              <Blind key={activeIndex === index ? item.image : item.image + '-2'} src={`/${item.image}`} />

              <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center bg-black/50">
                <p className="relative z-10 text-white w-[full] sm:w-[full] md:w-[400px] lg:w-[600px] xl:w-[900px] text-center font-bold text-xl sm:text-xl md:text-3xl lg:text-4xl opacity-100 mb-8" style={{textShadow: "rgba(7, 133, 134, 0.83) 4px 2px 0px"}}>
                  {item.title}
                </p>
                <button className="bg-white cursor-pointer font-bold mt-8 text-xl text-black px-8 py-3 rounded-lg hover:bg-[#056158] hover:text-white transition duration-300">
                  اقرأ المزيد
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أزرار التنقل */}
      <button aria-label="Previous" className="mt-4 custom-prev absolute left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition">
        <FaArrowLeft className="text-white text-md" />
      </button>
      <button aria-label="Next" className="mt-4 custom-next absolute right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition">
        <FaArrowRight className="text-white text-md" />
      </button>
    </div>
  );
}

export default HeroComponent;
