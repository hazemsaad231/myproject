
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Blind({ src, cols = 6, duration = 0.5, stagger = 0.06, direction = "in" }) {
  const C = Math.max(1, cols);
  const fromY = direction === "in" ? "100%" : "-100%";
  const toY = "0%";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        {Array.from({ length: C }).map((_, i) => {
          const leftPercent = (i * 100) / C;
          const widthPercent = 100 / C;
          const bgPosX = (i / (C - 1)) * 100;

          return (
            <motion.div
              key={i}
              initial={{ y: fromY }}
              animate={{ y: toY }}
              transition={{ duration, ease: "easeOut", delay: i * stagger }}
              style={{
                position: "absolute",
                top: 0,
                left: `${leftPercent}%`,
                width: `${widthPercent + 0.5}%`, 
                height: "100%",
                overflow: "hidden",
                backgroundImage: `url("${src}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${C * 100}% 100%`,
                backgroundPosition: `${bgPosX}% center`,
                transform: "scaleX(1.0005)", 
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

