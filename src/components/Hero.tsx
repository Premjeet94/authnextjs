"use client";

import { motion } from "framer-motion";
import FilmStrip from "./FilmStrip";

export default function Hero() {
  return (
    <section className="relative min-h-screen px-6 flex flex-col">
      {/* TOP SPACER */}
      <div className="flex-1" />

      {/* HERO CONTENT — TRUE CENTER */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-3xl lg:max-w-4xl leading-snug md:leading-tight text-center"
      >
        <h1
          className="
text-3xl sm:text-4xl md:text-5xl lg:text-6xl
font-semibold leading-tight
text-black
dark:text-white
"
        >
          We Build Digital Products{" "}
          <span
            className="
text-[var(--brand-accent)]
dark:text-[var(--brand-accent)]
"
          >
            That Convert
          </span>
        </h1>

        <p
          className="
mt-6 text-sm sm:text-base md:text-lg
text-black/60
dark:text-[var(--dark-text-secondary)]
max-w-2xl mx-auto
"
        >
          Premium websites and digital experiences for ambitious brands ready to
          scale. No templates. No shortcuts. Just results.
        </p>

        <div className="mt-10 flex justify-center">
          <button className="px-6 py-3 rounded-full bg-[var(--brand-accent)] text-black font-medium hover:opacity-90 transition">
            Book a Free Strategy Call →
          </button>
        </div>
      </motion.div>

      {/* SPACER BETWEEN HERO & STRIP */}
      <div className="flex-1" />

      {/* FILM STRIP — ANCHORED */}
      <div className="pb-12 sm:pb-16">
        <FilmStrip />
      </div>
    </section>
  );
}
