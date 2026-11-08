"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalData } from "@/data/personal";
import { assetPath } from "@/lib/utils";
import { FileText, Mail, Phone } from "lucide-react";

export function MobileStickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 280px on small screens
      setShow(window.scrollY > 280);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40 animate-fade-up">
      <div className="p-2 rounded-2xl bg-white/95 backdrop-blur-md border border-apple-border shadow-apple-hover flex items-center justify-between gap-2">
        <a
          href={assetPath(personalData.resumeUrl)}
          download="Mahfuzul_Alam_CV.pdf"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-apple-text bg-apple-subtle border border-apple-border active:bg-apple-borderSubtle transition-all"
        >
          <FileText className="w-3.5 h-3.5 text-apple-secondary" />
          <span>Resume</span>
        </a>

        <a
          href={`tel:${personalData.phone}`}
          className="flex items-center justify-center p-2 rounded-xl text-apple-text bg-apple-subtle border border-apple-border active:bg-apple-borderSubtle transition-all"
          aria-label="Call phone number"
        >
          <Phone className="w-4 h-4 text-apple-secondary" />
        </a>

        <Link
          href="/contact/"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-apple-text active:bg-black transition-all shadow-apple-sm"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </Link>
      </div>
    </div>
  );
}
