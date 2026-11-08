import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { personalData } from "@/data/personal";
import { experiences, education } from "@/data/experience";
import { skillCategories, certifications } from "@/data/skills";
import { assetPath } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/shared/Badge";
import {
  GraduationCap,
  Building2,
  Award,
  CheckCircle2,
  FileText,
  Mail,
  Linkedin,
  Github,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `Professional background, career progression, technical expertise, and education of ${personalData.name}, SDET.`,
};

export default function AboutPage() {
  return (
    <div className="pt-10 sm:pt-14 pb-16 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Intro Section Header */}
        <PageHeader
          eyebrow="Biography & Background"
          title="About Mahfuzul Alam"
          description="Software Development Engineer in Test (SDET) committed to building resilient software architectures through automated verification, engineering-driven QA, and applied AI."
        />

        {/* Biography Card */}
        <section>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden relative flex-shrink-0 border border-apple-border shadow-apple-sm p-1.5 bg-white">
              <div className="w-full h-full rounded-[14px] overflow-hidden relative">
                <Image
                  src={assetPath(personalData.photoUrl)}
                  alt={personalData.name}
                  fill
                  sizes="(max-width: 640px) 160px, 192px"
                  className="object-cover object-center scale-110"
                  priority
                />
              </div>
            </div>
            <div className="space-y-4 text-sm text-apple-secondary leading-relaxed">
              <p>
                I am a <strong>Software Development Engineer in Test (SDET)</strong> based in Dhaka, Bangladesh, with more than 2.5 years of industry experience across manual and automated testing.
              </p>
              <p>
                My engineering approach is rooted in the conviction that testing is not a superficial sign-off phase at the end of development, but a continuous engineering discipline that informs software design, ensures system resilience, and protects user trust.
              </p>
              <p>
                I specialize in building modular end-to-end automation test suites using <strong>Playwright</strong> and <strong>Cypress</strong>, conducting systematic API verification with Postman, and integrating modern AI tooling to discover elusive edge cases and accelerate requirement validation.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Philosophy */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Core Principles"
            title="Engineering Philosophy"
            description="How I approach quality assurance and test automation in production environments."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-apple-border/70 shadow-apple-sm space-y-3">
              <div className="w-8 h-8 rounded-xl bg-apple-blueLight text-apple-blue flex items-center justify-center font-semibold text-xs">
                01
              </div>
              <h3 className="text-base font-semibold text-apple-text tracking-tight">
                Determinism Over Quantity
              </h3>
              <p className="text-xs text-apple-secondary leading-relaxed">
                A suite of 50 fast, deterministic automated tests that engineers trust is infinitely more valuable than 500 flaky tests that are routinely ignored or re-run until green.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-apple-border/70 shadow-apple-sm space-y-3">
              <div className="w-8 h-8 rounded-xl bg-apple-blueLight text-apple-blue flex items-center justify-center font-semibold text-xs">
                02
              </div>
              <h3 className="text-base font-semibold text-apple-text tracking-tight">
                Shift-Left Quality
              </h3>
              <p className="text-xs text-apple-secondary leading-relaxed">
                Defects are cheapest to prevent during requirement refinement. I actively analyze specifications for edge cases and ambiguous boundary states before code is committed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-apple-border/70 shadow-apple-sm space-y-3">
              <div className="w-8 h-8 rounded-xl bg-apple-blueLight text-apple-blue flex items-center justify-center font-semibold text-xs">
                03
              </div>
              <h3 className="text-base font-semibold text-apple-text tracking-tight">
                Intelligent Augmentation
              </h3>
              <p className="text-xs text-apple-secondary leading-relaxed">
                Leveraging LLMs and declarative workflows not as black-box replacements for human engineers, but as cognitive force multipliers for exhaustive test scenario design.
              </p>
            </div>
          </div>
        </section>

        {/* Experience & Progression */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Work History"
            title="Professional Experience"
            description="Formal employment track record, responsibilities, and key project contributions."
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-apple-borderSubtle">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-4 h-4 text-apple-blue" />
                      <span className="text-sm font-semibold text-apple-text">
                        {exp.company}
                      </span>
                      <Badge variant="blue">{exp.type}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-apple-text tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-xs font-mono text-apple-secondary sm:text-right">
                    <div>{exp.period}</div>
                    <div className="text-apple-tertiary">{exp.location}</div>
                  </div>
                </div>

                <p className="text-sm text-apple-secondary leading-relaxed">
                  {exp.summary}
                </p>

                {/* Milestones / Responsibilities */}
                <div className="space-y-2.5">
                  <div className="text-xs font-semibold text-apple-text uppercase tracking-wider">
                    Key Engineering Contributions
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {exp.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-apple-secondary leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-apple-blue flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects at company */}
                <div className="pt-4 border-t border-apple-borderSubtle space-y-4">
                  <div className="text-xs font-semibold text-apple-text uppercase tracking-wider">
                    Associated Systems & Projects
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {exp.projects.map((proj) => (
                      <div
                        key={proj.name}
                        className="p-4 rounded-xl bg-apple-subtle border border-apple-border/50 space-y-2"
                      >
                        <div className="text-xs font-semibold text-apple-text">
                          {proj.name}
                        </div>
                        <p className="text-[11px] text-apple-secondary leading-relaxed">
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {proj.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-1.5 py-0.5 rounded text-[10px] bg-white text-apple-secondary border border-apple-border/30"
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
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Academic Foundation"
            title="Education"
            description="Formal undergraduate degree and academic thesis."
          />

          <div className="p-8 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-apple-borderSubtle">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-apple-blue" />
                  <span className="text-base font-semibold text-apple-text">
                    {education.institution}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-apple-text">
                  {education.degree}
                </h3>
                <div className="text-xs text-apple-secondary">
                  Specialization: {education.specialization}
                </div>
              </div>
              <div className="text-xs font-mono text-apple-secondary sm:text-right">
                <div>{education.period}</div>
                <div className="text-apple-tertiary">{education.location}</div>
              </div>
            </div>

            {/* Thesis Details */}
            <div className="p-5 rounded-2xl bg-apple-subtle border border-apple-border/60 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-apple-text">
                <BookOpen className="w-4 h-4 text-apple-blue" />
                <span>Undergraduate Thesis</span>
              </div>
              <div className="text-sm font-semibold text-apple-text tracking-tight">
                &ldquo;{education.thesis.title}&rdquo;
              </div>
              <p className="text-xs text-apple-secondary leading-relaxed">
                {education.thesis.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Competencies"
            title="Technical Expertise"
            description="Verified skills across test automation, programming, APIs, CI/CD, and AI tools."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="p-6 rounded-2xl bg-white border border-apple-border/70 shadow-apple-sm space-y-4"
              >
                <div>
                  <h3 className="text-sm font-semibold text-apple-text">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-apple-secondary mt-1">
                    {cat.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-apple-subtle text-apple-text border border-apple-border/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Continuous Learning"
            title="Certifications & Coursework"
            description="Recognized credentials verifying practical software testing and framework competencies."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-apple-border/70 shadow-apple-sm flex flex-col justify-between space-y-3 hover:shadow-apple transition-all"
              >
                <div className="space-y-2">
                  <Award className="w-5 h-5 text-apple-blue" />
                  <h4 className="text-xs font-semibold text-apple-text leading-snug">
                    {cert.title}
                  </h4>
                  <div className="text-[11px] text-apple-tertiary">
                    {cert.issuer} • {cert.type}
                  </div>
                </div>

                <div className="pt-2 border-t border-apple-borderSubtle flex items-center justify-between gap-2">
                  <Badge variant="green" size="sm">
                    Verified
                  </Badge>
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-apple-blue hover:text-apple-blueHover transition-colors"
                    >
                      <span>Certificate</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Download Resume Banner */}
        <section className="p-8 rounded-3xl bg-apple-subtle border border-apple-border text-center space-y-4">
          <h3 className="text-lg font-semibold text-apple-text">
            Need a formal copy of my CV?
          </h3>
          <p className="text-xs text-apple-secondary max-w-md mx-auto">
            Review my complete career history, technical stack, and verified references in a clean printable PDF.
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <a
              href={assetPath(personalData.resumeUrl)}
              download="Mahfuzul_Alam_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white bg-apple-text hover:bg-black transition-all shadow-apple"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download CV (PDF)</span>
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-medium text-apple-text bg-white border border-apple-border hover:bg-apple-borderSubtle transition-all"
            >
              <Linkedin className="w-3.5 h-3.5 text-apple-secondary" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
