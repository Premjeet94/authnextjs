"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  
  // Detect scroll for background
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
const theme = document.body.getAttribute("data-theme");
setIsDark(theme === "dark");
}, []);

  // Toggle theme
 const toggleTheme = () => {
const body = document.body;
const next = isDark ? "light" : "dark";
body.setAttribute("data-theme", next);
setIsDark(next === "dark");
};

  return (
    <nav
      className={`
fixed top-0 left-0 w-full z-50 transition-all
${
  scrolled
    ? isDark
      ? "backdrop-blur bg-black/60"
      : "backdrop-blur bg-white border-b border-black/10"
    : "bg-transparent"
}
`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <a href="/" className="font-semibold tracking-wide text-white">
          WEBBERRY
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
          <a href="#expertise" className="hover:text-white transition">
            Expertise
          </a>
          <a href="#work" className="hover:text-white transition">
            Work
          </a>
          <a href="#services" className="hover:text-white transition">
            Services
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white text-sm"
          >
            ☾
          </button>

          {/* CTA */}
          <button className="hidden sm:block px-4 py-2 rounded-full border border-white/20 text-sm text-white hover:border-white/40 transition">
            Book a Call
          </button>

          {/* HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-5 text-white">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#expertise" onClick={() => setMenuOpen(false)}>
              Expertise
            </a>
            <a href="#work" onClick={() => setMenuOpen(false)}>
              Work
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <button className="mt-4 px-4 py-3 rounded-full bg-[var(--brand-accent)] text-black font-medium">
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
