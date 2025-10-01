"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SplitHeader({
  src = "https://plus.unsplash.com/premium_photo-1758741334969-ecd2fce500df?w=1200&auto=format&fit=crop&q=80",
  slices = 8,
}) {
  const containerRef = useRef(null);
  const slicesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elems = slicesRef.current;

      // entrance animation
      gsap.fromTo(
        elems,
        { yPercent: 2, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.2,
        }
      );

      // parallax scroll effect
      elems.forEach((el, i) => {
        gsap.to(el.querySelector("img"), {
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [slices]);

  const setSliceRef = (el, i) => {
    slicesRef.current[i] = el;
  };

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen relative overflow-hidden"
    >
      <div
        style={{
          height: "100%",
          width: "100vw",
          display: "flex",
        }}
      >
        
          {Array.from({ length: slices }).map((_, i) => {
  const sliceWidth = 100 / slices; 

  return (
    <div
      key={i}
      ref={(el) => setSliceRef(el, i)}
      className="slice"
      style={{
        width: `${sliceWidth}%`,
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={src}
        alt={`slice-${i}`}
        draggable="false"
        style={{
          position: "absolute",
          top: 0,
          width: `${100 * slices}%`, // الصورة الكبيرة كلها على قد كل الـ slices
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    </div>
  );
})}

      </div>
    </div>
  );
}
