import React from "react";
import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { PageHeader } from "@/components/shared/PageHeader";
import { WritingList } from "@/components/writing/WritingList";
import { WritingPageLocalAction } from "@/components/shared/LocalEditorLinks";

export const metadata: Metadata = {
  title: "Engineering Writing",
  description:
    "Technical essays, case studies, and engineering perspectives on test automation, flaky test heuristics, and applied AI in software quality by Mahfuzul Alam.",
};

export default function WritingPage() {
  return (
    <div className="pt-10 sm:pt-14 pb-16 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <PageHeader
          eyebrow="Technical Essays & Notes"
          title="Engineering Writing"
          description="Practical insights on incorporating AI as a thinking partner in software testing, architecting maintainable Playwright automation, and tackling real-world QA blockers."
        >
          <WritingPageLocalAction />
        </PageHeader>

        {/* Interactive Filterable Article List */}
        <WritingList articles={articles} />
      </div>
    </div>
  );
}
