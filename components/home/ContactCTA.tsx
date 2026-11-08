"use client";

import React, { useState } from "react";
import { personalData } from "@/data/personal";
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight } from "lucide-react";

export function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-apple-border shadow-apple-sm space-y-6">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-apple-blue">
            Initiate Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-apple-text">
            Let&rsquo;s discuss software reliability and quality engineering.
          </h2>
          <p className="text-sm sm:text-base text-apple-secondary max-w-xl mx-auto leading-relaxed">
            I am currently open to SDET roles, technical quality engineering positions,
            and research discussions on automated testing and applied AI.
          </p>

          {/* Email Card & Copy */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${personalData.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-slate-200 hover:bg-black transition-all shadow-apple hover:shadow-apple-md"
            >
              <Mail className="w-4 h-4" />
              <span>{personalData.email}</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-apple-text bg-apple-subtle border border-apple-border hover:bg-apple-borderSubtle transition-all"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-apple-green" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-apple-secondary" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* External Links */}
          <div className="pt-6 border-t border-apple-borderSubtle flex items-center justify-center gap-6 text-xs text-apple-secondary">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-apple-blue transition-colors font-medium"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3 h-3 text-apple-tertiary" />
            </a>
            <span className="text-apple-border">•</span>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-apple-text transition-colors font-medium"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repositories</span>
              <ArrowUpRight className="w-3 h-3 text-apple-tertiary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
