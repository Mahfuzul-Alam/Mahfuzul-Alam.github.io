import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`space-y-1.5 ${
        isCenter ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-apple-secondary font-mono">
          {eyebrow}
        </span>
      )}
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-apple-text">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-apple-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
