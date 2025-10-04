// src/app/components/ProgressOnce.tsx
"use client";

import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, trickleSpeed: 200 });

export default function ProgressOnce() {
  useEffect(() => {
    // safety: لو sessionStorage مش متاح نتجنب الغلط
    const canUseSession = typeof window !== "undefined" && !!window.sessionStorage;

    try {
      // لو اتعرض قبل كده في نفس التاب — متعرضش تاني
      if (canUseSession && sessionStorage.getItem("nprogress_shown")) {
        return;
      }

      // لو الصفحة جاهزة من الأول (مثلاً refresh بعد SSR) متعرضش
      if (typeof document !== "undefined" && document.readyState === "complete") {
        // نعلّم إننا اتعرضنا؟ لا — لأننا ما عرضناش النوجرس أصلاً.
        return;
      }

      // شغّل النوجرس
      NProgress.start();

      // نوقف النوجرس على load أو بعد رندر + delay صغير
      const onFinish = () => {
        NProgress.done();
        try { if (canUseSession) sessionStorage.setItem("nprogress_shown", "1"); } catch {}
      };

      // لو الهتمل/اسِتاتش جهزت
      const raf = requestAnimationFrame(() => {
        // ندي 400ms عشان الhydration أو أي client rendering يخلص
        const t = window.setTimeout(() => {
          onFinish();
          clearTimeout(t);
        }, 400);
      });

      // لو كل الموارد خلصت
      window.addEventListener("load", onFinish);

      // safety fallback بعد 6 ثواني
      const safety = window.setTimeout(() => {
        onFinish();
        console.warn("[ProgressOnce] safety fallback triggered");
      }, 6000);

      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("load", onFinish);
        clearTimeout(safety);
        NProgress.done();
      };
    } catch (e) {
      // لو حصل أي خطأ، نتأكد نبعت done وننتهي
      NProgress.done();
    }
  }, []);

  return null;
}
