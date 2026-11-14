"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalData } from "@/data/personal";
import { assetPath } from "@/lib/utils";
import { FileText } from "lucide-react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

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
            <span className="w-8 h-8 rounded-full bg-neutral-900 text-white dark:bg-white/10 dark:text-white dark:border dark:border-white/20 flex items-center justify-center text-xs font-semibold tracking-wider group-hover:bg-apple-blue dark:group-hover:bg-apple-blue transition-colors">
              {personalData.initials}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1.5">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-all ${
                    active
                      ? "text-apple-text bg-black/5 dark:bg-white/10 font-semibold"
                      : "text-apple-secondary hover:text-apple-text hover:bg-black/[0.03] dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action: Theme Toggle & Download Resume */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href={assetPath(personalData.resumeUrl)}
              download="Mahfuzul_Alam_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium text-apple-text bg-white dark:bg-[#1C1C1E] border border-slate-300 dark:border-white/30 shadow-apple-xs hover:border-slate-400 dark:hover:border-white/50 hover:bg-apple-subtle transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-apple-secondary" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Action: Theme Toggle & Quick Resume */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <a
              href={assetPath(personalData.resumeUrl)}
              download="Mahfuzul_Alam_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-apple-text bg-white dark:bg-[#1C1C1E] border border-slate-300 dark:border-white/30 shadow-apple-xs active:bg-apple-subtle active:scale-95 transition-all"
              aria-label="Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-apple-secondary" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
