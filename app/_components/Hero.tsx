"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative">
      <img
        src="/hero-bg.png"
        alt="hero"
        className="w-full h-screen absolute object-cover"
      />

      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="relative z-10 flex h-screen w-full items-center justify-center flex-col pb-24 md:pb-56 lg:pb-110">
        <div className="flex flex-col items-center px-4">
          <motion.p
            className="font-pixel text-[#ff8c37] text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] select-none leading-none"
            initial={{ opacity: 0, y: -80, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Pixl
          </motion.p>

          <motion.div
            className="flex w-full"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          >
            <motion.a
              href="https://rsvp.soon.it/pixl"
              target="_blank"
              className="text-center w-100 px-5 py-2 text-base sm:text-xl md:text-2xl hover:shadow-2xl shadow-[#ff8c37] bg-[#ec3750] cursor-pointer text-white hover:-translate-y-1 hover:-translate-x-1 border-black border-r-8 border-t-2 border-l-2 hover:border-b-12 border-b-8 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              RSVP
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
