import React from "react";
import { personalData } from "@/data/personal";

export function Highlights() {
  return (
    <section className="py-12 sm:py-16 bg-apple-surface/80 border-b border-apple-borderSubtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalData.highlights.map((highlight, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-apple-border/70 shadow-apple-sm hover:shadow-apple hover:border-apple-border transition-all duration-200"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wider text-apple-tertiary mb-1">
                {highlight.label}
              </div>
              <div className="text-xl font-semibold text-apple-text tracking-tight mb-2">
                {highlight.value}
              </div>
              <p className="text-xs text-apple-secondary leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
