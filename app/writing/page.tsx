import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Technical essays, case studies, and engineering perspectives on test automation, flaky test heuristics, and applied AI in software quality by Mahfuzul Alam.",
};

export default function WritingPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <header className="space-y-4">
          <SectionHeading
            eyebrow="Technical Essays & Notes"
            title="Engineering Writing"
            description="Deep dives into test automation architectures, empirical flakiness classification, and practical AI augmentation for software quality teams."
          />
        </header>

        {/* Article Listing */}
        <div className="space-y-6">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group p-7 sm:p-8 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm hover:shadow-apple-hover hover:border-apple-border transition-all duration-300 space-y-4"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-apple-tertiary">
                <Badge variant="blue">{article.category}</Badge>
                <span className="flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readingTime}</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-apple-text tracking-tight group-hover:text-apple-blue transition-colors">
                <Link href={`/writing/${article.slug}/`}>{article.title}</Link>
              </h2>

              <p className="text-xs sm:text-sm text-apple-secondary leading-relaxed">
                {article.subtitle}
              </p>

              <p className="text-sm text-apple-secondary/90 leading-relaxed">
                {article.summary}
              </p>

              <div className="pt-2">
                <Link
                  href={`/writing/${article.slug}/`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-apple-text group-hover:text-apple-blue transition-colors"
                >
                  <span>Read Full Essay</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
