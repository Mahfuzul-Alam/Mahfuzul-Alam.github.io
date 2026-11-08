"use client";

import React, { useState } from "react";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  ShieldCheck,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <header className="space-y-4">
          <SectionHeading
            eyebrow="Direct Communication"
            title="Get in Touch"
            description="Whether you're exploring SDET recruitment, discussing test automation strategies, or collaborating on quality engineering experiments, I welcome thoughtful communication."
          />
        </header>

        {/* Primary Contact Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-apple-borderSubtle">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-apple-tertiary">
                Primary Channel
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-apple-text tracking-tight mt-1">
                Direct Email
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="green">Response within 24–48h</Badge>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-5 rounded-2xl bg-apple-subtle border border-apple-border/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-apple-border flex items-center justify-center text-apple-blue shadow-apple-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-apple-tertiary">Official Email Address</div>
                <div className="text-base font-semibold text-apple-text">
                  {personalData.email}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`mailto:${personalData.email}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-white bg-apple-text hover:bg-black transition-colors"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-apple-text bg-white border border-apple-border hover:bg-apple-borderSubtle transition-colors shadow-apple-sm"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-apple-green" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-apple-secondary" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Location & Timezone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-apple-subtle/60 border border-apple-border/40 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-apple-blue flex-shrink-0" />
              <div className="text-xs">
                <div className="text-apple-tertiary">Location</div>
                <div className="font-medium text-apple-text">
                  {personalData.location}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-apple-subtle/60 border border-apple-border/40 flex items-center gap-3">
              <Clock className="w-4 h-4 text-apple-blue flex-shrink-0" />
              <div className="text-xs">
                <div className="text-apple-tertiary">Time Zone</div>
                <div className="font-medium text-apple-text">
                  Asia/Dhaka (GMT+6)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social / Professional Networks */}
        <section className="space-y-4">
          <h3 className="text-base font-semibold text-apple-text tracking-tight">
            Verified Professional Networks
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* LinkedIn */}
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm hover:shadow-apple-hover hover:border-apple-border transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-apple-blueLight text-apple-blue flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-apple-tertiary group-hover:text-apple-blue transition-colors" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-apple-text group-hover:text-apple-blue transition-colors">
                  LinkedIn
                </h4>
                <p className="text-xs text-apple-secondary mt-1">
                  Connect for professional networking, recommendations, and industry updates.
                </p>
              </div>
              <div className="text-[11px] font-mono text-apple-tertiary">
                linkedin.com/in/1-mahfuzul-alam
              </div>
            </a>

            {/* GitHub */}
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm hover:shadow-apple-hover hover:border-apple-border transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-apple-subtle text-apple-text flex items-center justify-center">
                  <Github className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-apple-tertiary group-hover:text-apple-text transition-colors" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-apple-text transition-colors">
                  GitHub
                </h4>
                <p className="text-xs text-apple-secondary mt-1">
                  Explore open-source test suites, automation utilities, and architecture prototypes.
                </p>
              </div>
              <div className="text-[11px] font-mono text-apple-tertiary">
                github.com/Mahfuzul-Alam
              </div>
            </a>
          </div>
        </section>

        {/* Security & Confidentiality Notice */}
        <div className="p-6 rounded-2xl bg-white border border-apple-border/70 shadow-apple-sm flex items-start gap-3.5 text-xs text-apple-secondary">
          <ShieldCheck className="w-5 h-5 text-apple-blue flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-semibold text-apple-text">
              Public Portfolio Communication Notice
            </div>
            <p className="leading-relaxed">
              In accordance with enterprise data protection and GitHub Pages static hosting, this website does not process sensitive personal data through unauthenticated contact endpoints. All links connect directly to verified personal communications channels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
