"use client";

import React, { useState } from "react";
import { researchData } from "@/data/research";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import {
  BookOpen,
  ChevronDown,
  Layers,
  Sparkles,
  FlaskConical,
  Binary,
  CheckCircle2,
  Check,
  ShieldCheck,
  Cpu,
  Users,
} from "lucide-react";

export default function ResearchPage() {
  const { thesis, researchInterests, independentExperiments } = researchData;
  const [showAuthors, setShowAuthors] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Header */}
        <header className="space-y-4">
          <SectionHeading
            eyebrow="Academic Research & Inquiries"
            title="Research & Experiments"
            description="Engineering studies examining developer ergonomics, test automation architectures, and applied artificial intelligence."
          />
        </header>

        {/* Featured Thesis Card */}
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-apple-borderSubtle">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-apple-blue" />
              <h2 className="text-xl sm:text-2xl font-semibold text-apple-text tracking-tight">
                Undergraduate Project Thesis
              </h2>
            </div>
            <Badge variant="blue">AIUB • {thesis.year}</Badge>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-8">
            {/* Title & Overview */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-semibold text-apple-text tracking-tight leading-snug">
                &ldquo;{thesis.title}&rdquo;
              </h3>
              <p className="text-sm sm:text-base text-apple-secondary leading-relaxed">
                {thesis.summary}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-apple-subtle border border-apple-border/60">
                <div className="text-lg font-semibold text-apple-text">4 Platforms</div>
                <div className="text-[11px] text-apple-tertiary">Side-by-side evaluation</div>
              </div>
              <div className="p-4 rounded-2xl bg-apple-subtle border border-apple-border/60">
                <div className="text-lg font-semibold text-apple-text">6 Months</div>
                <div className="text-[11px] text-apple-tertiary">Empirical investigation</div>
              </div>
              <div className="p-4 rounded-2xl bg-apple-subtle border border-apple-border/60">
                <div className="text-lg font-semibold text-apple-text">Benchmark App</div>
                <div className="text-[11px] text-apple-tertiary">Contact Management</div>
              </div>
              <div className="p-4 rounded-2xl bg-apple-subtle border border-apple-border/60">
                <div className="text-lg font-semibold text-apple-text">Zero Custom Code</div>
                <div className="text-[11px] text-apple-tertiary">Platform-default build</div>
              </div>
            </div>

            {/* Core Problem */}
            <div className="p-5 rounded-2xl bg-apple-subtle/70 border border-apple-border/60 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-apple-text">
                The Research Problem
              </div>
              <p className="text-xs sm:text-sm text-apple-secondary leading-relaxed">
                {thesis.problem}
              </p>
            </div>

            {/* The 4 Evaluated Platforms */}
            <div className="space-y-4 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-apple-text">
                Evaluated Platforms &amp; Architecture Models
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {thesis.platforms.map((p) => (
                  <div
                    key={p.name}
                    className="p-5 rounded-2xl bg-apple-subtle border border-apple-border/60 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-apple-text">{p.name}</h4>
                      <span className="text-[11px] text-apple-blue font-medium">{p.approach}</span>
                    </div>
                    <p className="text-xs text-apple-secondary leading-relaxed">
                      {p.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Engineering Takeaways */}
            <div className="space-y-3 pt-4 border-t border-apple-borderSubtle">
              <div className="text-xs font-semibold uppercase tracking-wider text-apple-text">
                Key Engineering Takeaways
              </div>
              <div className="space-y-3">
                {thesis.takeaways.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-apple-border/70 shadow-apple-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-apple-blue flex-shrink-0 mt-0.5" />
                    <div className="space-y-0.5 text-xs text-apple-secondary">
                      <strong className="text-apple-text font-semibold">{item.title}: </strong>
                      <span>{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Collapsible: Full Feature Comparison Matrix */}
            <div className="pt-4 border-t border-apple-borderSubtle">
              <button
                type="button"
                onClick={() => setShowMatrix(!showMatrix)}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-apple-subtle hover:bg-apple-borderSubtle border border-apple-border transition-colors text-xs font-semibold text-apple-text"
              >
                <span>View Full Platform Comparison Matrix (Table 4-A)</span>
                <ChevronDown
                  className={`w-4 h-4 text-apple-secondary transition-transform duration-200 ${
                    showMatrix ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showMatrix && (
                <div className="mt-4 border border-apple-border rounded-2xl overflow-hidden bg-white shadow-apple-sm animate-fade-in">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-apple-subtle border-b border-apple-border text-apple-text">
                          <th className="py-3 px-4 font-semibold">Evaluation Criteria</th>
                          <th className="py-3 px-3 font-semibold text-center">OutSystems</th>
                          <th className="py-3 px-3 font-semibold text-center">Zoho Creator</th>
                          <th className="py-3 px-3 font-semibold text-center">PowerApps</th>
                          <th className="py-3 px-3 font-semibold text-center">Salesforce</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-apple-borderSubtle">
                        {thesis.comparisonMatrix.map((cat) => (
                          <React.Fragment key={cat.category}>
                            <tr className="bg-apple-subtle/50 font-semibold text-apple-text text-[11px]">
                              <td colSpan={5} className="py-2 px-4 uppercase tracking-wider">
                                {cat.category}
                              </td>
                            </tr>
                            {cat.features.map((item, fIdx) => (
                              <tr key={fIdx} className="hover:bg-apple-subtle/30 transition-colors">
                                <td className="py-2 px-4 text-apple-secondary font-medium">
                                  {item.feature}
                                </td>
                                <td className="py-2 px-3 text-center">
                                  {item.outSystems ? <Check className="w-3.5 h-3.5 text-emerald-600 mx-auto" /> : <span className="text-apple-tertiary">—</span>}
                                </td>
                                <td className="py-2 px-3 text-center">
                                  {item.zohoCreator ? <Check className="w-3.5 h-3.5 text-emerald-600 mx-auto" /> : <span className="text-apple-tertiary">—</span>}
                                </td>
                                <td className="py-2 px-3 text-center">
                                  {item.powerApps ? <Check className="w-3.5 h-3.5 text-emerald-600 mx-auto" /> : <span className="text-apple-tertiary">—</span>}
                                </td>
                                <td className="py-2 px-3 text-center">
                                  {item.salesforce ? <Check className="w-3.5 h-3.5 text-emerald-600 mx-auto" /> : <span className="text-apple-tertiary">—</span>}
                                </td>
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Collapsible: Academic Collaborators & Supervision (No IDs, Arrow reveal) */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowAuthors(!showAuthors)}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-apple-subtle hover:bg-apple-borderSubtle border border-apple-border transition-colors text-xs font-semibold text-apple-text"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-apple-blue" />
                  <span>Research Collaborators &amp; Academic Supervision</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-apple-secondary transition-transform duration-200 ${
                    showAuthors ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showAuthors && (
                <div className="mt-3 p-5 rounded-2xl bg-white border border-apple-border shadow-apple-sm space-y-4 animate-fade-in text-xs">
                  <div className="space-y-1.5">
                    <div className="font-semibold text-apple-text">Research Team (Co-Authors):</div>
                    <div className="flex flex-wrap gap-2 text-apple-secondary">
                      {thesis.authors.map((name) => (
                        <span
                          key={name}
                          className="px-3 py-1 rounded-full bg-apple-subtle border border-apple-border/60 text-apple-text font-medium"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-apple-borderSubtle space-y-1">
                    <div className="font-semibold text-apple-text">Thesis Supervisor:</div>
                    <div className="text-apple-secondary">
                      {thesis.supervisor.name} • {thesis.supervisor.designation}, {thesis.supervisor.department}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Current Research Interests */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Continuous Inquiry"
            title="Current Research Interests"
            description="Technical domains where I actively follow literature and prototype experimental tooling."
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

        {/* Active Independent Experiments */}
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
