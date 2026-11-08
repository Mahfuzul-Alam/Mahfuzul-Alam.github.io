"use client";

import React, { useState, useEffect } from "react";
import { Cookie, X, Check } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) {
        // Show after a brief delay for smooth appearance
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage access blocked or restricted
    }
  }, []);

  const handleConsent = (level: "accepted" | "declined") => {
    try {
      localStorage.setItem("cookie_consent", level);
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Privacy and cookies notice"
      className="fixed bottom-16 sm:bottom-6 left-3 right-3 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-fade-up"
    >
      <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-apple-border shadow-apple-hover flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-apple-subtle text-apple-secondary flex items-center justify-center flex-shrink-0">
              <Cookie className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-apple-text">
              Privacy &amp; Local Persistence
            </span>
          </div>
          <button
            type="button"
            onClick={() => handleConsent("declined")}
            className="text-apple-tertiary hover:text-apple-text p-1 rounded-md"
            aria-label="Dismiss notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] text-apple-secondary leading-relaxed">
          This portfolio respects your privacy. We use client-side storage solely for application preferences, dark/light modes, and offline demo features. No third-party profiling trackers are loaded.
        </p>

        <div className="flex items-center justify-end gap-2 pt-1 border-t border-apple-borderSubtle">
          <button
            type="button"
            onClick={() => handleConsent("declined")}
            className="px-3 py-1.5 rounded-full text-[11px] font-medium text-apple-secondary hover:text-apple-text hover:bg-apple-subtle transition-colors"
          >
            Necessary Only
          </button>
          <button
            type="button"
            onClick={() => handleConsent("accepted")}
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[11px] font-medium text-white bg-apple-text hover:bg-black transition-colors shadow-apple-sm"
          >
            <Check className="w-3 h-3" />
            <span>Acknowledge</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
