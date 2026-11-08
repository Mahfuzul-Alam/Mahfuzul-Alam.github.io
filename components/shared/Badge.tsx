import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "neutral" | "blue" | "green" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "neutral",
  size = "sm",
}: BadgeProps) {
  const base =
    "inline-flex items-center font-medium rounded-full transition-colors";

  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs",
  };

  const variantClasses = {
    neutral: "bg-apple-subtle text-apple-secondary border border-apple-border/50",
    blue: "bg-apple-blueLight text-apple-blue border border-apple-blue/10",
    green: "bg-emerald-50 text-emerald-700 border border-emerald-200/50",
    outline: "bg-transparent text-apple-secondary border border-apple-border",
  };

  return (
    <span className={`${base} ${sizeClasses[size]} ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}
