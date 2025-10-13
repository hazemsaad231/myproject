
'use client'

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Blind from "../components/framer";
import Data from "../../data/data";

const HeroComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // preload أول صورة (LCP) علشان تقلل LCP وCLS
  useEffect(() => {
    if (Data?.[0]?.image) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = Data[0].image;
      document.head.appendChild(link);
      return () => {
        try { document.head.removeChild(link); } catch (e) {}
      };
    }
  }, []);

  return (
    <div className="relative">
      {/* reserve space using aspect-ratio (أفضل من vh بالنسبة للCLS) */}
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
        className="hero-swiper"
      >
        {Data.map((item, index) => (
          <SwiperSlide key={index}>
            {/* استخدم aspect-ratio عشان نحجز المساحة من البداية */}
            <div className="relative w-full overflow-hidden hero-slide" style={{ aspectRatio: '16/7' }}>
              {/* ملاحظة: ما بنغيرش key هنا علشان ما نعيدش تركيب الـDOM وتحصّل shift */}
              <Blind src={item.image} active={activeIndex === index} />

              <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center bg-black/50">
                <p
                  className="relative z-10 text-white w-[full] sm:w-[full] md:w-[400px] lg:w-[600px] xl:w-[900px] text-center font-bold text-xl sm:text-xl md:text-3xl lg:text-4xl opacity-100 mb-8"
                  style={{ textShadow: "rgba(7, 133, 134, 0.83) 4px 2px 0px" }}
                >
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

      <style jsx>{`
        /* لضمان أن السلايدر مش يعمل repaint/shift غير لازم قبل التحميل */
        .hero-slide { min-height: 260px; /* fallback لصغار الشاشات */ }
        @media(min-width:768px){ .hero-slide { min-height: 420px; } }
        .hero-swiper { visibility: visible; } /* لو عايز تعمل hide لوقتي، حاول تجنبها لأنها ممكن تعمل CLS */
      `}</style>
    </div>
  );
}

export default HeroComponent;
