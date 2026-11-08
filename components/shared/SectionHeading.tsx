import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 sm:mb-12 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}>
      {eyebrow && (
        <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-apple-blue mb-2.5">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-apple-text">
        {title}
      </h2>
      {description && (
        <p className="mt-2.5 text-sm sm:text-base text-apple-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
