"use client";

import { motion } from "framer-motion";

export function WTFISTHIS() {
  return (
    <section
      className="my-30 mx-20 text-center flex flex-col items-center gap-2"
      id="what"
    >
      <motion.p
        className="text-6xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        What is Pixl?
      </motion.p>
      <motion.p
        className="max-w-3xl text-[20px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        Pixl is a pixel-themed world where you don&apos;t just build projects —
        you live in them. Spawn in a village, explore a cyberpunk city, dive
        into a submerged region, and pick up sidequests along the way. Help a
        street vendor build an online store. Wire up hardware for a local
        merchant. Ship real software and hardware, earn coins and funding, and
        upgrade to villages where merchants pay you more. It&apos;s a YSWS
        disguised as an open world — and the map keeps growing.
      </motion.p>
    </section>
  );
}
