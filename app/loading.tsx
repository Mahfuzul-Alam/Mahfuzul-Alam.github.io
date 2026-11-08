import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-3">
        <div className="w-6 h-6 border-2 border-apple-border border-t-apple-blue rounded-full animate-spin" />
        <span className="text-xs font-mono text-apple-tertiary">Loading content...</span>
      </div>
    </div>
  );
}
