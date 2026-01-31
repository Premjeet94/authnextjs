"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mount check
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll detection — MUST be above return
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ❗ SAFE to return after ALL hooks
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all
        ${
          scrolled
            ? "backdrop-blur bg-white/70 dark:bg-black/60 border-b border-black/10 dark:border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-wide text-black dark:text-white">
          WEBBERRY
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-black/70 dark:text-white/70">
          {["Home", "Expertise", "Work", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-black dark:hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="w-9 h-9 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center text-sm"
          >
            {isDark ? "☀" : "☾"}
          </button>

          <button className="hidden sm:block px-4 py-2 rounded-full border border-black/20 dark:border-white/20 text-sm text-black dark:text-white">
            Book a Call
          </button>

          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-[2px] bg-black dark:bg-white" />
            <span className="w-6 h-[2px] bg-black dark:bg-white" />
            <span className="w-6 h-[2px] bg-black dark:bg-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}
