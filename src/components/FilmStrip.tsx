"use client";

import { motion } from "framer-motion";

const items = [
  "WEBBERRY",
  "DIGITAL BRANDING",
  "UI / UX DESIGN",
  "WEB DEVELOPMENT",
  "PRODUCT DESIGN",
  "PERFORMANCE WEBSITES",
];

export default function FilmStrip() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="h-14 flex items-center">
        <motion.div
          className="flex items-center gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...items, ...items].map((text, index) => (
            <span
              key={index}
              className="text-sm tracking-[0.2em] font-medium text-white/70"
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}