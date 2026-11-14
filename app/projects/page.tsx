"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects, ProjectCaseStudy } from "@/data/projects";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/shared/Badge";
import { ArrowRight, ExternalLink, Github, Filter } from "lucide-react";

const CATEGORIES = [
  "All",
  "Test Automation",
  "Software Engineering",
  "Applied AI",
  "Academic Projects",
] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-10 sm:pt-14 pb-16 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <PageHeader
          eyebrow="Portfolio & Case Studies"
          title="Projects & Engineering Systems"
          description="Detailed technical case studies of test automation architectures, observability tools, and full-stack software implementations."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-apple-tertiary flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  active
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-black shadow-apple-sm"
                    : "bg-apple-subtle text-apple-secondary hover:text-apple-text hover:bg-black/5 dark:bg-white/5 dark:text-apple-secondary dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm hover:shadow-apple-hover hover:border-apple-border transition-all duration-300"
            >
              <div>
                {/* Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="blue">{project.category}</Badge>
                  <span className="text-xs font-mono text-apple-tertiary">
                    {project.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-apple-text tracking-tight group-hover:text-apple-blue transition-colors mb-2">
                  <Link href={`/projects/${project.slug}/`}>
                    {project.title}
                  </Link>
                </h3>

                {/* Subtitle */}
                <p className="text-[13px] sm:text-sm font-medium text-apple-secondary mb-3 leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-[14.5px] sm:text-[15.5px] text-apple-secondary leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-apple-subtle text-apple-secondary border border-apple-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-apple-borderSubtle flex items-center justify-between gap-4 text-xs sm:text-[13.5px] font-medium">
                <Link
                  href={`/projects/${project.slug}/`}
                  className="inline-flex items-center gap-1.5 text-apple-text hover:text-apple-blue transition-colors font-semibold"
                >
                  <span>Detailed Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <div className="flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-apple-secondary hover:text-apple-text transition-colors"
                      title="Open Live Demonstration"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live App</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-apple-secondary hover:text-apple-text transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
