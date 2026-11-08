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
  Binary,
  Layers,
  Users,
  UserCheck,
  Check,
  X,
  Database,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Research & Thesis",
  description:
    "Official undergraduate thesis: 'A Comparison of Low Code Development Platforms in Terms of Convenience' (AIUB, May 2022), comparing OutSystems, Zoho Creator, MS PowerApps, and Salesforce.",
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
            title="Academic Research & Thesis"
            description="Empirical software engineering evaluations, formal undergraduate thesis from AIUB, and active technical inquiries in automated testing and AI."
          />

          <div className="p-4 rounded-2xl bg-apple-subtle border border-apple-border/70 flex items-start gap-3 text-xs text-apple-secondary">
            <GraduationCap className="w-4 h-4 text-apple-blue flex-shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-apple-text">Official Academic Record:</strong> The details below represent the completed and defended undergraduate project thesis submitted to the Department of Computer Science at American International University-Bangladesh (AIUB) in May 2022.
            </div>
          </div>
        </header>

        {/* Undergraduate Thesis */}
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-apple-borderSubtle">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-apple-blue" />
              <h2 className="text-xl sm:text-2xl font-semibold text-apple-text tracking-tight">
                Undergraduate Project Thesis
              </h2>
            </div>
            <Badge variant="blue">{thesis.status}</Badge>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-8">
            {/* Header / Meta */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-apple-tertiary">
                {thesis.department} • {thesis.institution} ({thesis.date})
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-apple-text tracking-tight leading-snug">
                &ldquo;{thesis.title}&rdquo;
              </h3>
            </div>

            {/* Authors & Supervisor Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-apple-subtle border border-apple-border/60">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-apple-text">
                  <Users className="w-3.5 h-3.5 text-apple-blue" />
                  <span>Research Team (Authors)</span>
                </div>
                <div className="grid grid-cols-2 gap-1 text-[11px] text-apple-secondary">
                  {thesis.authors.map((author) => (
                    <div key={author.studentId}>
                      <span className="text-apple-text font-medium">{author.name}</span>
                      <span className="text-apple-tertiary font-mono ml-1">({author.studentId})</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 sm:border-l sm:border-apple-border sm:pl-4">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-apple-text">
                  <UserCheck className="w-3.5 h-3.5 text-apple-blue" />
                  <span>Academic Supervision</span>
                </div>
                <div className="text-[11px] text-apple-secondary">
                  <div className="text-apple-text font-medium">{thesis.supervisor.name}</div>
                  <div className="text-apple-tertiary">{thesis.supervisor.designation}, {thesis.supervisor.department}</div>
                </div>
              </div>
            </div>

            {/* Verbatim Abstract */}
            <div className="p-6 rounded-2xl bg-apple-subtle/70 border border-apple-border/60 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-apple-text">
                Thesis Abstract
              </div>
              <p className="text-xs sm:text-sm text-apple-secondary leading-relaxed italic">
                &ldquo;{thesis.abstract}&rdquo;
              </p>
            </div>

            {/* Research Questions */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-apple-text">
                Core Research Questions Investigated
              </h4>
              <div className="space-y-2">
                {thesis.researchQuestions.map((q, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-apple-secondary">
                    <span className="w-4 h-4 rounded-full bg-apple-blueLight text-apple-blue font-semibold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed font-medium text-apple-text">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Four Researched Platforms */}
            <div className="space-y-4 pt-4 border-t border-apple-borderSubtle">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-apple-text">
                  The Four Analyzed Low-Code Platforms
                </h4>
                <p className="text-xs text-apple-secondary mt-1">
                  Selected to represent different architecture models: code generation, proprietary cloud runtimes, office integrations, and metadata engines.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {thesis.studiedPlatforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="p-5 rounded-2xl bg-apple-subtle border border-apple-border/60 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-semibold text-apple-text">{platform.name}</h5>
                      <span className="text-[10px] font-mono text-apple-tertiary">{platform.vendor}</span>
                    </div>
                    <div className="text-[11px] font-medium text-apple-blue">{platform.architectureType}</div>
                    <p className="text-xs text-apple-secondary leading-relaxed">{platform.keyTraits}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benchmark Practical Use Case */}
            <div className="p-6 rounded-2xl bg-white border border-apple-border shadow-apple-sm space-y-4">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-apple-blue" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-apple-text">
                  Benchmark Implementation: {thesis.benchmarkUseCase.name}
                </h4>
              </div>
              <p className="text-xs text-apple-secondary leading-relaxed">
                {thesis.benchmarkUseCase.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-apple-subtle text-xs space-y-1">
                  <div className="font-semibold text-apple-text">Entity Relationship (ER) Scope:</div>
                  <ul className="space-y-1 text-apple-secondary list-disc list-inside text-[11px]">
                    {thesis.benchmarkUseCase.entities.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-apple-subtle text-xs space-y-1">
                  <div className="font-semibold text-apple-text">Implemented Use Cases:</div>
                  <ul className="space-y-1 text-apple-secondary list-disc list-inside text-[11px]">
                    {thesis.benchmarkUseCase.operations.map((op, i) => (
                      <li key={i}>{op}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Table 4-A: Comprehensive Feature Comparison Matrix */}
            <div className="space-y-4 pt-4 border-t border-apple-borderSubtle">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-apple-text">
                    Table 4-A: Feature Comparison Between Researched Platforms
                  </h4>
                  <p className="text-[11px] text-apple-secondary mt-0.5">
                    Direct empirical comparison matrix documented from our 6-month hands-on evaluation.
                  </p>
                </div>
              </div>

              <div className="border border-apple-border rounded-2xl overflow-hidden shadow-apple-sm bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-apple-subtle border-b border-apple-border text-apple-text">
                        <th className="py-3 px-4 font-semibold">Evaluation Criteria &amp; Features</th>
                        <th className="py-3 px-3 font-semibold text-center">OutSystems</th>
                        <th className="py-3 px-3 font-semibold text-center">Zoho Creator</th>
                        <th className="py-3 px-3 font-semibold text-center">MS PowerApps</th>
                        <th className="py-3 px-3 font-semibold text-center">Salesforce</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-apple-borderSubtle">
                      {thesis.comparisonMatrix.map((category) => (
                        <React.Fragment key={category.category}>
                          <tr className="bg-apple-subtle/50 font-semibold text-apple-text text-[11px]">
                            <td colSpan={5} className="py-2 px-4 uppercase tracking-wider">
                              {category.category}
                            </td>
                          </tr>
                          {category.features.map((item, fIdx) => (
                            <tr key={fIdx} className="hover:bg-apple-subtle/30 transition-colors">
                              <td className="py-2.5 px-4 text-apple-secondary font-medium">
                                {item.feature}
                              </td>
                              <td className="py-2.5 px-3 text-center">
                                {item.outSystems ? (
                                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 font-bold">✓</span>
                                ) : (
                                  <span className="text-apple-tertiary">—</span>
                                )}
                              </td>
                              <td className="py-2.5 px-3 text-center">
                                {item.zohoCreator ? (
                                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 font-bold">✓</span>
                                ) : (
                                  <span className="text-apple-tertiary">—</span>
                                )}
                              </td>
                              <td className="py-2.5 px-3 text-center">
                                {item.powerApps ? (
                                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 font-bold">✓</span>
                                ) : (
                                  <span className="text-apple-tertiary">—</span>
                                )}
                              </td>
                              <td className="py-2.5 px-3 text-center">
                                {item.salesforce ? (
                                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 font-bold">✓</span>
                                ) : (
                                  <span className="text-apple-tertiary">—</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Key Findings from Chapter 6.1 */}
            <div className="space-y-3 pt-4 border-t border-apple-borderSubtle">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-apple-text">
                Key Findings &amp; Conclusions (From Thesis)
              </h4>
              <div className="space-y-2.5">
                {thesis.keyFindings.map((finding, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-apple-secondary leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-apple-blue flex-shrink-0 mt-0.5" />
                    <span>{finding}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Limitations from Chapter 6.2 */}
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Documented Thesis Limitations (Chapter 6.2)</span>
              </div>
              <ul className="space-y-1.5 text-xs text-amber-900/80 list-disc list-inside leading-relaxed">
                {thesis.limitations.map((lim, idx) => (
                  <li key={idx}>{lim}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Current Research Interests */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Continuous Inquiry"
            title="Current Research Interests"
            description="Technical domains where I actively read literature, track preprints, and prototype experimental quality tools."
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
