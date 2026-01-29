"use client";

import { motion } from "framer-motion";
import BrandLogo from "./Brandlogo";

export default function IntroOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BrandLogo size="large" animateLetters />
    </motion.div>
  );
}