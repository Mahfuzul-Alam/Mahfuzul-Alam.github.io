import React from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode; // Optional right-side action slot (e.g. editor links or status badge)
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: PageHeaderProps) {
  return (
    <header className={`pb-6 sm:pb-8 border-b border-apple-borderSubtle ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          {eyebrow && (
            <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-apple-blue font-mono">
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-apple-text leading-[1.15]">
            {title}
          </h1>
          {description && (
            <p className="text-base sm:text-[17px] text-apple-secondary leading-relaxed pt-1.5">
              {description}
            </p>
          )}
        </div>
        {children && <div className="flex-shrink-0">{children}</div>}
      </div>
    </header>
  );
}
