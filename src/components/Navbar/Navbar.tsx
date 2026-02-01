"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItem = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { name: "Services", icon: "ri-store-3-line" },
    { name: "Packages", icon: "ri-price-tag-3-line" },
    { name: "About", icon: "ri-information-line" },
  ];

  return (
    <>

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${
            scrolled
              ? "bg-black/60 backdrop-blur-xl shadow-lg border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="text-white text-xl font-semibold tracking-tight flex items-center gap-2"
          >
            <i className="ri-plant-line text-green-400"></i>
            Web<span className="text-green-400">Berry</span>
          </Link>

          {/* Desktop Links */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            className="hidden md:flex items-center gap-8 lg:gap-10 text-white/80"
          >
            {menuItems.map((item) => (
              <motion.div key={item.name} variants={navItem} className="relative group">
                <Link
                  href={`#${item.name.toLowerCase()}`}
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <i className={item.icon}></i>
                  {item.name}
                </Link>
                {/* underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-400 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop CTA */}
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-xl font-medium transition-colors duration-300"
          >
            <i className="ri-whatsapp-line text-lg"></i>
            Free Consult
          </motion.a>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl hover:text-green-400 transition"
            aria-label="Open menu"
          >
            <i className="ri-menu-3-line"></i>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -60, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -40, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="bg-black rounded-b-2xl p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Link
                  href="/"
                  className="text-white text-xl font-semibold tracking-tight flex items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  <i className="ri-plant-line text-green-400"></i>
                  Web<span className="text-green-400">Berry</span>
                </Link>

                {/* Close Button */}
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white text-3xl leading-none transition"
                  aria-label="Close menu"
                >
                  <i className="ri-close-line"></i>
                </motion.button>
              </div>

              {/* Menu Items */}
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
                className="flex flex-col gap-6 text-white/80 mb-8"
              >
                {menuItems.map((item) => (
                  <motion.div key={item.name} variants={navItem}>
                    <Link
                      href={`#${item.name.toLowerCase()}`}
                      onClick={() => setOpen(false)}
                      className="text-lg hover:text-white transition flex items-center gap-3 group"
                    >
                      <i className={`${item.icon} text-green-400 text-xl group-hover:scale-110 transition-transform`}></i>
                      {item.name}
                      <i className="ri-arrow-right-s-line ml-auto opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.a
                variants={navItem}
                whileTap={{ scale: 0.96 }}
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium transition"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                Talk on WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}