import React from "react";
import Link from "next/link";
import { researchData } from "@/data/research";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, Sparkles, Binary, ShieldAlert } from "lucide-react";

export function ResearchInterestsSnapshot() {
  const icons = [Sparkles, Binary, ShieldAlert];

  return (
    <section className="py-16 sm:py-24 border-b border-apple-borderSubtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Academic & Technical Inquiries"
            title="Research & Exploration"
            description="Investigating how generative models and empirical heuristic methods enhance software testability, defect discovery, and reliability."
          />
          <Link
            href="/research/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-apple-blue hover:text-apple-blueHover transition-colors whitespace-nowrap mb-10 sm:mb-12"
          >
            <span>Read Research Overview</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchData.researchInterests.map((interest, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={interest.title}
                className="p-7 rounded-3xl bg-white border border-apple-border/70 shadow-apple-sm flex flex-col justify-between hover:shadow-apple transition-all"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-apple-blueLight text-apple-blue flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-apple-text tracking-tight">
                    {interest.title}
                  </h3>
                  <p className="text-xs text-apple-secondary leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-apple-borderSubtle space-y-1.5">
                  <div className="text-[11px] font-semibold text-apple-tertiary uppercase tracking-wider">
                    Core Topics
                  </div>
                  {interest.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="text-xs text-apple-secondary flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-apple-blue" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
