import React from "react";
import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WritingList } from "@/components/writing/WritingList";
import { WritingPageLocalAction } from "@/components/shared/LocalEditorLinks";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "The SDET Journal & Technical Writing",
  description:
    "Real experiences, practical testing methodologies, and smarter engineering practices. First-person essays on AI-assisted testing, Playwright automation, and quality engineering by Mahfuzul Alam.",
};

export default function WritingPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <header className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-apple-blue font-mono">
                <BookOpen className="w-3.5 h-3.5" />
                <span>The SDET Journal • Real Experiences. Practical Testing. Smarter Engineering.</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-apple-text">
                Engineering Writing
              </h1>
              <p className="text-base sm:text-lg text-apple-secondary leading-relaxed max-w-2xl">
                Practical insights on incorporating AI as a thinking partner in software testing, architecting maintainable Playwright automation, and tackling real-world QA blockers.
              </p>
            </div>
            <div className="mb-2 sm:mb-4">
              <WritingPageLocalAction />
            </div>
          </div>
        </header>

        {/* Interactive Filterable Article List */}
        <WritingList articles={articles} />
      </div>
    </div>
  );
}
