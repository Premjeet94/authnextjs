"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function BrandLogo({
  size,
  animateLetters = false,
}: {
  size: "large" | "small";
  animateLetters?: boolean;
}) {
  const text = "WEBBERRY";

  return (
    <motion.div
      layout
      layoutId="brand-logo"
      layoutTransition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // cinematic easing
      }}
      className={`font-semibold tracking-[0.05em] text-white ${
        size === "large" ? "text-5xl" : "text-xl"
      }`}
    >
      {animateLetters ? (
        <motion.span
          variants={container}
          initial="hidden"
          animate="show"
          className="inline-flex"
        >
          {text.split("").map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      ) : (
        text
      )}
    </motion.div>
  );
}
