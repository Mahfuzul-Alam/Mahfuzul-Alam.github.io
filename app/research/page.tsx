import React from "react";
import type { Metadata } from "next";
import { researchData } from "@/data/research";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  FlaskConical,
  CheckCircle2,
  AlertCircle,
  FileText,
  Binary,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Experiments",
  description:
    "Academic research background, undergraduate thesis on Low-Code Development Platforms, and technical experiments in test flakiness and AI in software engineering by Mahfuzul Alam.",
};

export default function ResearchPage() {
  const { thesis, researchInterests, independentExperiments } = researchData;

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Page Header */}
        <header className="space-y-4">
          <SectionHeading
            eyebrow="Academic Background & Inquiries"
            title="Research & Experiments"
            description="Explorations at the intersection of automated software quality, test flakiness heuristics, applied AI, and developer productivity paradigms."
          />

          {/* Academic Integrity Clarification */}
          <div className="p-4 rounded-2xl bg-apple-subtle border border-apple-border/70 flex items-start gap-3 text-xs text-apple-secondary">
            <GraduationCap className="w-4 h-4 text-apple-blue flex-shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-apple-text">Integrity Notice:</strong> Content below distinguishes completed undergraduate research from active independent experiments. Works are presented accurately without exaggerated publication claims.
            </div>
          </div>
        </header>

        {/* Undergraduate Thesis */}
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-apple-borderSubtle">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-apple-blue" />
              <h2 className="text-xl sm:text-2xl font-semibold text-apple-text tracking-tight">
                Undergraduate Thesis
              </h2>
            </div>
            <Badge variant="blue">{thesis.status}</Badge>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-8">
            {/* Meta */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-apple-tertiary">
                {thesis.degree} • {thesis.institution} ({thesis.year})
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-apple-text tracking-tight leading-snug">
                &ldquo;{thesis.title}&rdquo;
              </h3>
            </div>

            {/* Abstract */}
            <div className="p-5 rounded-2xl bg-apple-subtle border border-apple-border/60 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-apple-text">
                Abstract
              </div>
              <p className="text-xs sm:text-sm text-apple-secondary leading-relaxed">
                {thesis.abstract}
              </p>
            </div>

            {/* Background & Problem */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-apple-text">
                  Research Background
                </h4>
                <p className="text-xs text-apple-secondary leading-relaxed">
                  {thesis.background}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-apple-text">
                  The Problem Statement
                </h4>
                <p className="text-xs text-apple-secondary leading-relaxed">
                  {thesis.problem}
                </p>
              </div>
            </div>

            {/* Objectives */}
            <div className="space-y-3 pt-4 border-t border-apple-borderSubtle">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-apple-text">
                Research Objectives
              </h4>
              <div className="space-y-2">
                {thesis.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-apple-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-apple-blue flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology & Evaluation Criteria */}
            <div className="space-y-4 pt-4 border-t border-apple-borderSubtle">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-apple-text">
                  Methodology & Evaluation Dimensions
                </h4>
                <p className="text-xs text-apple-secondary mt-1">
                  {thesis.methodology.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {thesis.methodology.criteria.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-apple-subtle border border-apple-border/50 space-y-1"
                  >
                    <div className="text-xs font-semibold text-apple-text">
                      {item.criterion}
                    </div>
                    <p className="text-[11px] text-apple-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Findings & Observations */}
            <div className="space-y-3 pt-4 border-t border-apple-borderSubtle">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-apple-text">
                Key Findings & Conclusions
              </h4>
              <div className="space-y-2">
                {thesis.keyObservations.map((obs, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-apple-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-apple-blue flex-shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{obs}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Limitations */}
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-800">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Scope & Academic Limitations</span>
              </div>
              <ul className="space-y-1 text-xs text-amber-900/80 list-disc list-inside">
                {thesis.limitations.map((lim, i) => (
                  <li key={i}>{lim}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Research & Technical Interests */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Inquiry Vectors"
            title="Current Research Interests"
            description="Technical domains where I continuously read literature, formulate hypotheses, and prototype tooling."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchInterests.map((interest) => (
              <div
                key={interest.title}
                className="p-6 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-xl bg-apple-blueLight text-apple-blue flex items-center justify-center">
                    <Binary className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-apple-text">
                    {interest.title}
                  </h3>
                  <p className="text-xs text-apple-secondary leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-apple-borderSubtle space-y-1">
                  {interest.topics.map((t, idx) => (
                    <div key={idx} className="text-[11px] text-apple-tertiary flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-apple-border" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Independent Experiments */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Active Prototypes"
            title="Independent Technical Experiments"
            description="Hands-on explorations testing practical hypotheses in software quality and automation."
          />

          <div className="space-y-4">
            {independentExperiments.map((exp, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-apple-border/80 shadow-apple-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-apple-blue" />
                    <h3 className="text-sm font-semibold text-apple-text">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-xs text-apple-secondary leading-relaxed">
                    {exp.description}
                  </p>
                  <p className="text-[11px] text-apple-tertiary">
                    <strong>Relevance:</strong> {exp.relevance}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <Badge variant={exp.status === "Prototyped" ? "green" : "neutral"}>
                    {exp.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
