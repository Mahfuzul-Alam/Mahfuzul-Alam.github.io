import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, ProjectCaseStudy } from "@/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: CaseStudyProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-10 sm:pt-14 pb-16 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Back Link */}
        <div>
          <Link
            href="/projects/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-apple-secondary hover:text-apple-text transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="space-y-6 pb-8 border-b border-apple-borderSubtle">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="blue">{project.category}</Badge>
            <span className="text-xs font-mono text-apple-tertiary">
              {project.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-apple-text leading-[1.15]">
            {project.title}
          </h1>

          <p className="text-lg text-apple-secondary leading-relaxed">
            {project.subtitle}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-slate-200 hover:bg-black transition-all shadow-apple"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Launch Live Application</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-apple-text bg-white border border-apple-border hover:bg-apple-subtle transition-all shadow-apple-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>

          {/* Technologies Stack Bar */}
          <div className="pt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md text-xs font-medium bg-apple-subtle text-apple-secondary border border-apple-border/50"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* 1. Project Overview */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-apple-text tracking-tight flex items-center gap-2">
            <span>01. Project Overview</span>
          </h2>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm text-sm sm:text-base text-apple-secondary leading-relaxed space-y-4">
            <p>{project.overview}</p>
          </div>
        </section>

        {/* 2. Problem Statement */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-apple-text tracking-tight flex items-center gap-2">
            <span>02. Problem Statement</span>
          </h2>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm text-sm sm:text-base text-apple-secondary leading-relaxed">
            <p>{project.problemStatement}</p>
          </div>
        </section>

        {/* 3. Objectives */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-apple-text tracking-tight flex items-center gap-2">
            <span>03. Objectives & Core Requirements</span>
          </h2>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-3">
            {project.objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-apple-secondary">
                <CheckCircle2 className="w-4 h-4 text-apple-blue flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{obj}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Role & Contributions */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-apple-text tracking-tight flex items-center gap-2">
            <span>04. Role & Key Contributions</span>
          </h2>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-3">
            {project.roleAndContributions.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-apple-secondary">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. System Architecture */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-apple-text tracking-tight flex items-center gap-2">
            <span>05. System Architecture</span>
          </h2>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-4">
            <p className="text-sm text-apple-secondary leading-relaxed">
              {project.architecture.description}
            </p>
            {project.architecture.diagram && (
              <div className="pt-2">
                <pre className="p-5 rounded-2xl bg-apple-subtle text-apple-text border border-apple-border text-xs font-mono overflow-x-auto leading-relaxed">
                  {project.architecture.diagram.trim()}
                </pre>
              </div>
            )}
          </div>
        </section>

        {/* 6. Implementation Details */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-apple-text tracking-tight flex items-center gap-2">
            <span>06. Implementation Details</span>
          </h2>
          <div className="space-y-4">
            {project.implementationDetails.map((detail, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-apple-border/80 shadow-apple-sm space-y-2"
              >
                <h3 className="text-sm font-semibold text-apple-text">
                  {detail.title}
                </h3>
                <p className="text-xs sm:text-sm text-apple-secondary leading-relaxed">
                  {detail.description}
                </p>
                {detail.codeSnippet && (
                  <pre className="p-4 rounded-xl bg-apple-subtle text-apple-text border border-apple-border text-xs font-mono overflow-x-auto mt-3">
                    {detail.codeSnippet}
                  </pre>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 7. Key Features */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-apple-text tracking-tight flex items-center gap-2">
            <span>07. Verified Capabilities & Features</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white border border-apple-border/70 shadow-apple-sm flex items-start gap-2.5 text-xs text-apple-secondary"
              >
                <Sparkles className="w-4 h-4 text-apple-blue flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Results & Observations */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-apple-text tracking-tight flex items-center gap-2">
            <span>08. Results & Empirical Observations</span>
          </h2>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-3">
            {project.resultsAndObservations.map((res, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-apple-secondary">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{res}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Challenges & Technical Trade-offs */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-apple-text tracking-tight flex items-center gap-2">
            <span>09. Engineering Challenges</span>
          </h2>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-3">
            {project.challenges.map((chal, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-apple-secondary">
                <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{chal}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Limitations & Future Improvements */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-apple-text tracking-tight flex items-center gap-2">
            <span>10. Limitations & Planned Enhancements</span>
          </h2>
          <div className="p-6 sm:p-8 rounded-3xl bg-apple-subtle border border-apple-border/70 space-y-3">
            {project.limitationsAndFuture.map((lim, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-apple-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-apple-tertiary mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{lim}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-apple-borderSubtle flex items-center justify-between">
          <Link
            href="/projects/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-apple-blue hover:text-apple-blueHover"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore Other Projects</span>
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-apple-secondary hover:text-apple-text"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
