"use client";

import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroLoaderProps {
  onComplete?: () => void;
  children: ReactNode;
}

export default function IntroLoader({
  onComplete,
  children,
}: IntroLoaderProps): JSX.Element {
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
      onComplete?.();
    }, 3500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
  <motion.div
    key="intro-loader"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
    className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
  >
    <div className="relative z-10 flex flex-col items-center gap-8 max-w-full px-6">
      
      {/* Logo */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold tracking-tight"
      >
        <span className="text-white">Web</span>
        <span className="text-green-400">Berry</span>
      </motion.h1>

      {/* Subtle loading dots */}
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="w-2 h-2 bg-green-400 rounded-full"
          />
        ))}
      </div>

    </div>
  </motion.div>
)}

      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
