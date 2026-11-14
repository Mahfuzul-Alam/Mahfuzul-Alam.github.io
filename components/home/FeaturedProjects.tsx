import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import { ArrowUpRight, Github, ArrowRight, ExternalLink } from "lucide-react";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-16 sm:py-24 border-b border-apple-borderSubtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Selected Engineering Work"
            title="Featured Projects"
            description="Production implementations and technical frameworks spanning test observability, accessible systems, and automated testing."
          />
          <Link
            href="/projects/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-apple-blue hover:text-apple-blueHover transition-colors whitespace-nowrap mb-10 sm:mb-12"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featured.map((project) => (
            <div
              key={project.slug}
              className="group flex flex-col justify-between p-7 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm hover:shadow-apple-hover hover:border-apple-border transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="blue">{project.category}</Badge>
                  <span className="text-xs text-apple-tertiary font-mono">
                    {project.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-apple-text tracking-tight group-hover:text-apple-blue transition-colors mb-2">
                  <Link href={`/projects/${project.slug}/`}>
                    {project.title}
                  </Link>
                </h3>

                {/* Subtitle / summary */}
                <p className="text-[13px] sm:text-sm font-medium text-apple-secondary mb-3 leading-relaxed">
                  {project.subtitle}
                </p>

                <p className="text-[14.5px] sm:text-[15.5px] text-apple-secondary leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-apple-subtle text-apple-secondary border border-apple-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-apple-borderSubtle flex items-center justify-between gap-3 text-xs sm:text-[13.5px] font-medium">
                <Link
                  href={`/projects/${project.slug}/`}
                  className="inline-flex items-center gap-1 text-apple-text hover:text-apple-blue transition-colors font-semibold"
                >
                  <span>Read Case Study</span>
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
                      <span>Live Demo</span>
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
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
