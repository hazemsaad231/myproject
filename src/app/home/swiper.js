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



const SwiperComponent = () => {

   const [activeIndex, setActiveIndex] = useState(0);

  const rows = 2; 
  const cols = 2; 

  // دالة لتوليد أجزاء الصورة مع إزاحات عشوائية
  const generateParts = (image) => {
    const parts = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        parts.push({
          bgPos: `${(x / (cols - 1)) * 100}% ${(y / (rows - 1)) * 100}%`,
          xOffset: (Math.random() - 0.5) * 300,
          yOffset: (Math.random() - 0.5) * 300,
          image,
        });
      }
    }
    return parts;
  };


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
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      
        className="mySwiper"
      >
        {Data.map((p, i) => (
          <SwiperSlide key={i}>
            <motion.div className="relative w-full h-[65vh] sm:h-[65vh] md:h-[80vh] lg:h-[80vh] overflow-hidden"
              style={{ backgroundImage: `url(${p.image})`, backgroundPosition: p.bgPos }}
                      // initial={{ opacity: 0, x: p.xOffset, y: p.yOffset }}
                      animate={activeIndex === i ? { opacity: 1, x: 0, y: 0 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}>
              <img
                alt={p.title}
                src={p.image}
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
    mb-8
    
  "
  style={{
    textShadow: "rgba(7, 133, 134, 0.83) 4px 2px 0px",
    transform: "translate(0px, 0px)",
  }}
>
  {p.title}
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

export default SwiperComponent





// 'use client';
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Autoplay, Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import Data from "../../data/data";

// const SwiperComponent = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const rows = 2; // عدد الصفوف للأجزاء
//   const cols = 2; // عدد الأعمدة للأجزاء

//   // دالة لتوليد أجزاء الصورة مع إزاحات عشوائية
//   const generateParts = (image) => {
//     const parts = [];
//     for (let y = 0; y < rows; y++) {
//       for (let x = 0; x < cols; x++) {
//         parts.push({
//           bgPos: `${(x / (cols - 1)) * 100}% ${(y / (rows - 1)) * 100}%`,
//           xOffset: (Math.random() - 0.5) * 300,
//           yOffset: (Math.random() - 0.5) * 300,
//           image,
//         });
//       }
//     }
//     return parts;
//   };

//   return (
//     <div className="relative">
//       <Swiper
//         modules={[Autoplay, Navigation]}
//         loop={true}
//         slidesPerView={1}
//         navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//       >
//         {Data.map((item, index) => {
//           const parts = generateParts(item.image);
//           return (
//             <SwiperSlide key={item.id}>
//               <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[80vh] overflow-hidden">
//                 <div className="relative w-full h-full grid grid-rows-2 grid-cols-2">
//                   {parts.map((p, i) => (
//                     <motion.div
//                       key={i}
//                       className="w-full h-full bg-cover"
//                       style={{ backgroundImage: `url(${p.image})`, backgroundPosition: p.bgPos }}
//                       // initial={{ opacity: 0, x: p.xOffset, y: p.yOffset }}
//                       animate={activeIndex === index ? { opacity: 1, x: 0, y: 0 } : { opacity: 0 }}
//                       transition={{ duration: 0.8, delay: i * 0.1 }}
//                     />
//                   ))}
//                 </div>

//                 <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center bg-black/40">
//                   <p className="text-white text-center font-bold text-3xl md:text-4xl"
//                      style={{ textShadow: "rgba(7, 133, 134, 0.83) 4px 2px 0px" }}>
//                     {item.title}
//                   </p>
//                   <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-[#056158] hover:text-white transition duration-300">
//                     اقرأ المزيد
//                   </button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// };

// export default SwiperComponent;
