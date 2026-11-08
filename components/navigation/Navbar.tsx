"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalData } from "@/data/personal";
import { assetPath } from "@/lib/utils";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
        <div className="flex items-center justify-between h-16">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-medium tracking-tight text-apple-text hover:text-apple-blue transition-colors"
          >
            <span className="w-8 h-8 rounded-full bg-apple-text text-white flex items-center justify-center text-xs font-semibold tracking-wider group-hover:bg-apple-blue transition-colors">
              {personalData.initials}
            </span>
            <span className="text-sm font-semibold tracking-tight">
              {personalData.name}
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

          {/* Right Action: Download CV */}
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-apple-secondary hover:text-apple-text hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-apple-blue"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-apple-border bg-white px-4 pt-2 pb-6 space-y-2 animate-fade-in shadow-apple-md">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? "text-apple-blue bg-apple-blueLight font-semibold"
                      : "text-apple-secondary hover:text-apple-text hover:bg-apple-subtle"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-apple-borderSubtle flex flex-col gap-2">
            <a
              href={assetPath(personalData.resumeUrl)}
              download="Mahfuzul_Alam_CV.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-medium text-apple-text bg-apple-subtle border border-apple-border hover:bg-apple-borderSubtle transition-colors"
            >
              <FileText className="w-4 h-4 text-apple-secondary" />
              <span>Download CV</span>
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full py-2 px-4 text-xs font-medium text-apple-secondary hover:text-apple-blue"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
