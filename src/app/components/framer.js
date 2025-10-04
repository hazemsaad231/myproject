"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function BlindsSlider({
  images = [],
  cols = 6,
  duration = 0.5,
  delayStep = 0.08,
  interval = 3000,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextIndex, setNextIndex] = useState(null);
  const colsArr = Array.from({ length: Math.max(1, cols) });

  // safety: if no images or single image
  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className={`relative w-full h-[400px] overflow-hidden ${className}`}>
        <Image src={images[0]} alt="only" fill />
      </div>
    );
  }

  useEffect(() => {
    // auto move only when not currently transitioning
    if (isTransitioning) return;
    const timer = setTimeout(() => startTransition((index + 1) % images.length), interval);
    return () => clearTimeout(timer);
  }, [index, isTransitioning, images.length, interval]);

  function startTransition(targetIdx) {
    if (isTransitioning) return;
    setNextIndex(targetIdx);
    setIsTransitioning(true);

    // after animation completes, swap the base image and clear transitioning
    const maxDelay = delayStep * (colsArr.length - 1);
    const total = (duration + maxDelay) * 1000; // ms
    setTimeout(() => {
      setIndex(targetIdx);
      setIsTransitioning(false);
      setNextIndex(null);
    }, total + 50); // + small buffer
  }

  const currentImage = images[index];
  const incomingImage = nextIndex !== null ? images[nextIndex] : null;

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* base image (current) */}
      <Image src={currentImage} alt={`img-${index}`} fill className="object-cover" />

      {/* لو في transition، نرندر الشرائح اللي جايه فوق الـbase */}
      {isTransitioning && incomingImage && (
       
        <div className="absolute inset-0 flex z-20 pointer-events-none">
          {colsArr.map((_, i) => {
         
            const posPercent = colsArr.length === 1 ? 50 : (i / (colsArr.length - 1)) * 100;
            return (
              <motion.div
                key={i}
                className="h-full flex-1 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${incomingImage})`,
                  backgroundPosition: `${posPercent}% center`,
                  backgroundSize: `${colsArr.length * 100}% 100%`,
                }}
               
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration,
                  delay: i * delayStep,
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              />
            );
          })}
        </div>
      )}

    </div>
  );
}
