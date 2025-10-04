"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function Image() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <section className="h-screen flex items-center justify-center relative snap-center [perspective:500px]">
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
        className="w-[300px] aspect-[2/3] max-h-[90vh] m-5 relative overflow-hidden bg-white"
      >
        <img
          src={`photo.webp`}
          alt=""
          onLoad={() => setIsLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}

export default function App() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image key={image}  />
      ))}

      {/* progress bar */}
      <div className="fixed left-0 right-0 bottom-[100px] h-[5px] bg-blue-600" />

      {/* footer */}
      <footer className="fixed bottom-0 left-0 right-0 flex items-center gap-5 p-5 text-sm backdrop-blur-sm bg-[radial-gradient(rgba(0,0,0,0)_1px,var(--background)_1px)] [background-size:4px_4px]">
        <span>Photos from citizenofnowhe.re</span>
      </footer>
    </>
  );
}
