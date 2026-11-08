"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalData } from "@/data/personal";
import { assetPath } from "@/lib/utils";
import { FileText } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/projects/", label: "Projects" },
  { href: "/research/", label: "Research" },
  { href: "/writing/", label: "Writing" },
  { href: "/contact/", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-apple-border/60 shadow-apple-sm"
          : "bg-apple-bg/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo / Monogram */}
          <Link
            href="/"
            aria-label={`${personalData.name} — Home`}
            className="group flex items-center font-medium tracking-tight text-apple-text hover:text-apple-blue transition-colors"
          >
            <span className="w-8 h-8 rounded-full bg-apple-text text-white flex items-center justify-center text-xs font-semibold tracking-wider group-hover:bg-apple-blue transition-colors">
              {personalData.initials}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    active
                      ? "text-apple-text bg-black/5 font-semibold"
                      : "text-apple-secondary hover:text-apple-text hover:bg-black/[0.03]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action: Download CV */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={assetPath(personalData.resumeUrl)}
              download="Mahfuzul_Alam_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-apple-text bg-white border border-apple-border shadow-apple-sm hover:border-apple-secondary/40 hover:bg-apple-subtle transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-apple-secondary" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Action: Quick CV Download */}
          <div className="md:hidden flex items-center">
            <a
              href={assetPath(personalData.resumeUrl)}
              download="Mahfuzul_Alam_CV.pdf"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-apple-text bg-white border border-apple-border/80 shadow-apple-xs active:bg-apple-subtle active:scale-95 transition-all"
              aria-label="Download CV"
            >
              <FileText className="w-3.5 h-3.5 text-apple-secondary" />
              <span>CV</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
