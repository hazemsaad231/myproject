
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Blind({ src, cols = 6, duration = 0.5, stagger = 0.06, direction = "in", active = true }) {
  const C = Math.max(1, cols);
  const fromY = direction === "in" ? "100%" : "-100%";
  const toY = "0%";

  // لون خلفي placeholder يقلل الـflash لو الصورة بتاخد وقت
  const placeholderStyle = {
    backgroundColor: '#0b766f' // اختار لون قريب من dominant color للصورة
  };

  return (
    <div className="absolute inset-0 overflow-hidden" style={placeholderStyle} aria-hidden={!active}>
      <div className="relative w-full h-full">
        {Array.from({ length: C }).map((_, i) => {
          const leftPercent = (i * 100) / C;
          const widthPercent = 100 / C;
          const bgPosX = C === 1 ? 50 : (i / (C - 1)) * 100;

          return (
            <motion.div
              key={i}
              initial={{ y: fromY }}
              animate={{ y: toY }}
              exit={{ y: fromY }}
              transition={{ duration, ease: "easeOut", delay: i * stagger }}
              style={{
                position: "absolute",
                top: 0,
                left: `${leftPercent}%`,
                width: `${widthPercent + 0.09}%`,
                height: "100%",
                overflow: "hidden",
                backgroundImage: `url("${src}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${C * 100}% 100%`,
                backgroundPosition: `${bgPosX}% center`,
                transform: "scaleX(1.0005)",
                willChange: "transform",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden"
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
