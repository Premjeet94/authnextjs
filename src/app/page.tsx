"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroOverlay from "@/src/components/IntroOverlay";
import Navbar from "@/src/components/NavBar";
import Hero from "@/src/components/Hero";
import FilmStrip from "../components/FilmStrip";

export default function HomePage() {
  const [phase, setPhase] = useState<"intro" | "ready">("intro");

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("ready");
    }, 1800); // logo animation + hold

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden transition-all duration-300">
      {/* INTRO */}
      <AnimatePresence>
        {phase === "intro" && <IntroOverlay />}
      </AnimatePresence>

      {/* NAVBAR */}
      <Navbar show = {phase === "ready"} />

      {/* HERO */}
      {phase === "ready" && <Hero />}
    </div>
  );
}