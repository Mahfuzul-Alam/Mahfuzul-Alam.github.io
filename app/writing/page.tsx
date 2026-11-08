import React from "react";
import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WritingList } from "@/components/writing/WritingList";
import { WritingPageLocalAction } from "@/components/shared/LocalEditorLinks";
export const metadata: Metadata = {
  title: "Engineering Writing",
  description:
    "Technical essays, case studies, and engineering perspectives on test automation, flaky test heuristics, and applied AI in software quality by Mahfuzul Alam.",
};

export default function WritingPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <header className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Technical Essays & Notes"
              title="Engineering Writing"
              description="Practical insights on incorporating AI as a thinking partner in software testing, architecting maintainable Playwright automation, and tackling real-world QA blockers."
            />
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
