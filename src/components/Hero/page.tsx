"use client";


import React from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroPage() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !phone) return;

    router.push(
      `/book-slot?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(
        phone,
      )}`,
    );
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <motion.div
        initial={{ scale: 1, filter: "brightness(0.9)" }}
  animate={{
    scale: [1, 1.08, 1.05, 1.08],
    filter: ["brightness(0.9)", "brightness(1)", "brightness(0.95)", "brightness(1)"],
  }}
  transition={{
    duration: 20,
    ease: "linear",
    repeat: Infinity,
  }}
        className="absolute inset-0 hero bg-cover bg-center"
      />

      {/* Animated Gradient Overlay */}
     <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
  style={{ willChange: "opacity, transform" }}

  className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.45),rgba(0,0,0,0.85)_0%)]"
/>


      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4
                pt-24 md:pt-28 pb-24 md:pb-0">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className="max-w-4xl w-full text-center text-white space-y-6 sm:space-y-8
"
        >
          {/* Headline */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: "easeOut" },
              },
            }}
          className="
  text-3xl
  sm:text-4xl
  md:text-5xl
  lg:text-6xl
  font-semibold
  leading-tight
  tracking-tight
"

          >
            Helping Local Businesses
            <br />
            <span className="text-green-400/90 font-semibold">
              Get More Customers Online
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className=" text-base md:text-lg leading-relaxed"
          >
            We set up Google Maps, WhatsApp, websites, and online selling
            systems so customers can easily find and contact your business.
          </motion.p>

          {/* Glass Form */}
          <motion.form
  onSubmit={handleSubmit}
  variants={{
    hidden: { opacity: 0, y: 40 },
    
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  }}
  whileHover={{ y: -2 }}
  className="
  mx-auto max-w-2xl
  flex flex-col md:flex-row gap-4
  rounded-2xl
  bg-white/20 md:bg-white/15
  backdrop-blur-xl
  border border-white/20
  p-4 md:p-5
  shadow-[0_12px_40px_rgba(0,0,0,0.35)]
"

>
  {/* Name Field */}
  <div className="relative flex-1">
    <i className="ri-user-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
    <input
      type="text"
      placeholder="Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="
        w-full
        pl-11 pr-4 py-3
        rounded-xl
        bg-white/95 text-black
        placeholder-gray-400
        outline-none
        focus:ring-2 focus:ring-green-500
      "
    />
  </div>

  {/* Phone Field */}
  <div className="relative flex-1">
    <i className="ri-phone-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
    <input
      type="tel"
      inputMode="numeric"
      pattern="[0-9]*"
      placeholder="Phone Number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="
        w-full
        pl-11 pr-4 py-3
        rounded-xl
        bg-white/95 text-black
        placeholder-gray-400
        outline-none
        focus:ring-2 focus:ring-green-500
      "
    />
  </div>

  {/* CTA */}
  <motion.button
    disabled={!name || !phone}
    type="submit"
   animate={{
    boxShadow: [
      "0 0 0 rgba(34,197,94,0.0)",
      "0 0 20px rgba(34,197,94,0.25)",
      "0 0 0 rgba(34,197,94,0.0)",
    ],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
    className="
      px-6 py-3
      rounded-xl
      bg-green-600 hover:bg-green-500 active:bg-green-700
      text-white font-medium
      disabled:opacity-60 disabled:cursor-not-allowed
      transition-all duration-300
    "
  >
    Schedule Free Call
  </motion.button>
</motion.form>


          {/* Trust Line */}
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 0.6 },
              },
            }}
            className="text-sm text-white/60 flex flex-wrap items-center justify-center gap-4"
          >
            <span className="flex items-center gap-1">
              <i className="ri-phone-line"></i> Free consultation
            </span>
            <span className="flex items-center gap-1">
              <i className="ri-shield-check-line"></i> No spam
            </span>
            <span className="flex items-center gap-1">
              <i className="ri-hand-heart-line"></i> Honest guidance
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
