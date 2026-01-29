"use client";

import BrandLogo from "./Brandlogo";

export default function Navbar({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <BrandLogo size="small" />

        <div className="hidden md:flex gap-8 text-sm text-white/70">
          <a href="#">Home</a>
          <a href="#">Work</a>
          <a href="#">About</a>
        </div>

        <button className="px-4 py-2 rounded-full border border-white/20 text-sm text-white">
          Book a Call
        </button>
      </div>
    </nav>
  );
}