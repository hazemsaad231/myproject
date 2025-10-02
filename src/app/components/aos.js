"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    // لو المستخدم عايز reduced motion نمنع الأنيميشن
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    Aos.init({
      duration: 600,
      once: true,   
      easing: "ease-out-cubic",
      mirror: false,
    });

    
    return () => Aos.refreshHard();
  }, []);

  return null;
}
