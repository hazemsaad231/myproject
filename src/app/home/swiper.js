'use client'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Data from "../../data/data";


const SwiperComponent = () => {




  return <div className="relative">

 <Swiper
        slidesPerView={1}
          navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {Data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-[60vh] sm:h-[60vh] md:h-[80vh] lg:h-[80vh] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="slide-img w-full h-full"
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

{/* الزرار اللي انت جايبه */}
      <button
        aria-label="Previous"
        className="mt-4 custom-prev absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button
        aria-label="Next"
        className="mt-4 custom-next absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>


      

  </div>;
}

export default SwiperComponent;