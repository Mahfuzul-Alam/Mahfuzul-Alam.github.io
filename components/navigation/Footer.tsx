import React from "react";
import Link from "next/link";
import { personalData } from "@/data/personal";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-apple-border/70 bg-white/60 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-apple-text text-white flex items-center justify-center text-[10px] font-semibold">
                {personalData.initials}
              </span>
              <span className="text-sm font-semibold text-apple-text">
                {personalData.name}
              </span>
            </div>
            <p className="text-xs text-apple-secondary leading-relaxed max-w-sm">
              Software Development Engineer in Test (SDET). Focused on building
              reliable software through automation engineering, software quality,
              and applied artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-apple-text uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-apple-secondary">
              <li>
                <Link href="/" className="hover:text-apple-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about/" className="hover:text-apple-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects/" className="hover:text-apple-blue transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/research/" className="hover:text-apple-blue transition-colors">
                  Research & Experiments
                </Link>
              </li>
              <li>
                <Link href="/writing/" className="hover:text-apple-blue transition-colors">
                  Technical Writing
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-apple-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin/" className="hover:text-apple-blue transition-colors text-apple-tertiary">
                  Content Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-apple-text uppercase tracking-wider">
              Connect
            </div>
            <ul className="space-y-1.5 text-xs text-apple-secondary">
              <li>
                <a
                  href={`mailto:${personalData.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-apple-blue transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-apple-blue transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-apple-tertiary" />
                </a>
              </li>
              <li>
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-apple-blue transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-apple-tertiary" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-apple-borderSubtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-apple-tertiary">
          <div>
            © {currentYear} {personalData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-apple-secondary">
            <a href={`tel:${personalData.phone}`} className="hover:text-apple-blue transition-colors">
              {personalData.phone}
            </a>
            <span>•</span>
            <Link href="/contact/" className="hover:text-apple-blue transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
