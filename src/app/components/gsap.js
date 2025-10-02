"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Gsap({ src = "", slices = 3 }) {
  const containerRef = useRef(null);
  const slicesRef = useRef([]);

  useEffect(() => {
    // فلتر الـ refs الفاضية
    const elems = (slicesRef.current || []).filter(Boolean);
    if (!elems.length) return;

    const ctx = gsap.context(() => {
      // entrance animation for slices
      gsap.fromTo(
        elems,
        { yPercent: 2, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.12,
        }
      );

      // parallax scroll effect — animate yPercent of the image
      elems.forEach((el) => {
        const img = el.querySelector("img");
        if (!img) return;

        gsap.to(img, {
          yPercent: 12, // حركه صغيرة بالـ parallax
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

    return () => {
      ctx.revert();
      // اتأكد بنهي أي ScrollTriggers متبقية
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [slices, src]);

  // reset refs لو العدد اتغير — يحسن الاستقرار
  useEffect(() => {
    slicesRef.current = [];
  }, [slices, src]);

  const setSliceRef = (el, i) => {
    slicesRef.current[i] = el;
  };

  return (
    <div ref={containerRef} className="w-full h-[80vh] relative overflow-hidden">
      <div style={{ height: "100%", width: "100%", display: "flex" }}>
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
                  left: `${-i * 100}%`, // <<-- مهم: يحدد أي جزء من الصورة يظهر في الشريحة دي
                  width: `${100 * slices}%`, // الصورة بعرض كامل الحاوية مقسومة بصريًا
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
