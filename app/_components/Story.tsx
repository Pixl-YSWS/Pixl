"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const rhythm = [
  {
    title: "Chapters (~3 weeks)",
    text: "The story moves forward in chapters. Each chapter is a push to repair a part of the world: you take sidequests from the regions already unlocked, ship real projects, and your work counts toward the chapter's restoration goal. When the community hits it, the story advances: a new region opens, new NPCs return, new sidequests appear.",
    shadow: "#000",
  },
  {
    title: "Operations (~1 week)",
    text: "Between chapters, short themed events: a game jam, a hackathon, a tool-building week. One week, one theme, one piece of the world brought back online. Perfect if you want something intense with a clear deadline.",
    shadow: "#ff8c37",
  },
  {
    title: "Joining late? All good",
    text: "Unlocked regions never close. Whenever you arrive, you can pick any available sidequest, ship it, and earn your prizes and pixels like everyone else. Chapters only decide what unlocks next, never what you're allowed to build.",
    shadow: "#ec3750",
  },
];

const mechanics = [
  {
    title: "You always win",
    text: "Every shipped project earns you its prize and pixels, no matter what the rest of the community does.",
  },
  {
    title: "Restoration Energy",
    text: "Hours of shipped work convert into Restoration Energy. Keep shipping and it stacks into multipliers on what you earn.",
  },
  {
    title: "Community goals",
    text: "All Restoration Energy also repairs the world itself. At big milestones, new regions unlock, NPCs return and the Core gives back more of what it holds.",
  },
];

export function Story() {
  return (
    <section className="my-10 md:my-20 px-4 md:px-8 flex flex-col items-center gap-14" id="story">
      <div className="text-center">
        <motion.p
          className="text-sm font-bold uppercase tracking-widest text-black/50 mb-2 font-sans"
          {...fadeUp}
          transition={{ duration: 0.5 }}
        >
          The Restoration
        </motion.p>
        <motion.h2
          className="text-5xl md:text-6xl font-black"
          {...fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          How it works
        </motion.h2>
        <motion.p
          className="mt-3 text-black/60 text-base md:text-lg max-w-xl mx-auto font-sans"
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Pixl runs as a story in seasons: chapters move the world forward, and everything you ship
          repairs it.
        </motion.p>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-4">
        {rhythm.map((c, i) => (
          <motion.div
            key={c.title}
            className="bg-[#fffaf7] border-2 border-black px-6 py-5 text-left"
            style={{ boxShadow: `4px 4px 0px ${c.shadow}` }}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p className="font-pixel text-xl mb-2">{c.title}</p>
            <p className="font-sans text-sm md:text-base text-black/60 leading-relaxed">{c.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4">
        {mechanics.map((c, i) => (
          <motion.div
            key={c.title}
            className="bg-[#fffaf7] border-2 border-black px-5 py-5 text-left"
            style={{ boxShadow: "4px 4px 0px #ff8c37" }}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="font-pixel text-lg mb-2">{c.title}</p>
            <p className="font-sans text-sm text-black/60 leading-relaxed">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
