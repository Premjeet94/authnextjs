"use client";

import { useEffect } from "react";

export default function ThemeInit() {
  useEffect(() => {
    // Default theme (branding decision)
    document.body.setAttribute("data-theme", "dark");
  }, []);

  return null;
}