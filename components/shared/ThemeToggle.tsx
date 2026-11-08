"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
    }
  };

  // Avoid hydration mismatch by rendering placeholder with identical dimensions
  if (!mounted) {
    return (
      <div
        className={`w-8 h-8 rounded-full border border-apple-border/80 bg-white/50 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`relative w-8 h-8 rounded-full flex items-center justify-center text-apple-secondary hover:text-apple-text bg-white dark:bg-[#1C1C1E] border border-slate-300 dark:border-white/30 hover:border-slate-400 dark:hover:border-white/50 shadow-apple-xs transition-all duration-200 active:scale-90 ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-apple-secondary transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}
