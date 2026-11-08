import React from "react";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";

export function ExperienceSnapshot() {
  const currentExp = experiences[0];

  return (
    <section className="py-16 sm:py-24 border-b border-apple-borderSubtle bg-apple-surface/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Industry Background"
            title="Professional Experience"
            description="Engineering-led software testing across agile teams, web applications, and multi-server environments."
          />
          <Link
            href="/about/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-apple-blue hover:text-apple-blueHover transition-colors whitespace-nowrap mb-10 sm:mb-12"
          >
            <span>Full Background & Education</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-apple-borderSubtle">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-apple-blue" />
                <span className="text-base font-semibold text-apple-text">
                  {currentExp.company}
                </span>
                <Badge variant="green">Current Role</Badge>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-apple-text tracking-tight">
                {currentExp.role}
              </h3>
            </div>
            <div className="text-xs font-mono text-apple-secondary sm:text-right">
              <div>{currentExp.period}</div>
              <div className="text-apple-tertiary">{currentExp.location}</div>
            </div>
          </div>

          {/* Summary & Impact Points */}
          <div className="space-y-4">
            <p className="text-sm text-apple-secondary leading-relaxed">
              {currentExp.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {currentExp.highlights.slice(0, 4).map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-apple-secondary">
                  <CheckCircle2 className="w-4 h-4 text-apple-blue flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Workflows & Flagship Systems */}
          <div className="pt-6 border-t border-apple-borderSubtle grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentExp.projects.map((proj) => (
              <div
                key={proj.name}
                className="p-5 rounded-2xl bg-apple-subtle border border-apple-border/60 space-y-2"
              >
                <div className="text-xs font-semibold text-apple-text tracking-tight">
                  {proj.name}
                </div>
                <p className="text-xs text-apple-secondary leading-relaxed">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-white text-apple-secondary border border-apple-border/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
