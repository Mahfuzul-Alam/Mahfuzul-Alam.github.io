"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Edit3, PlusCircle } from "lucide-react";

export function WritingPageLocalAction() {
  const [isLocal, setIsLocal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const h = window.location.hostname;
      setIsLocal(h === "localhost" || h === "127.0.0.1" || h.endsWith(".local"));
    }
  }, []);

  if (!isLocal) return null;

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/admin/?tab=articles"
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-apple-blue bg-apple-blueLight hover:bg-apple-blue/15 border border-apple-blue/20 transition-all shadow-apple-sm"
      >
        <PlusCircle className="w-3.5 h-3.5" />
        <span>Write New Article</span>
      </Link>
      <Link
        href="/admin/?tab=articles"
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-apple-text bg-white hover:bg-apple-subtle border border-apple-border shadow-apple-sm transition-all"
      >
        <Edit3 className="w-3.5 h-3.5 text-apple-secondary" />
        <span>Manage Existing Articles</span>
      </Link>
    </div>
  );
}

export function SingleArticleLocalAction({ slug }: { slug: string }) {
  const [isLocal, setIsLocal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const h = window.location.hostname;
      setIsLocal(h === "localhost" || h === "127.0.0.1" || h.endsWith(".local"));
    }
  }, []);

  if (!isLocal) return null;

  return (
    <Link
      href={`/admin/?tab=articles&edit=${encodeURIComponent(slug)}`}
      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-apple-blue bg-apple-blueLight hover:bg-apple-blue/15 border border-apple-blue/20 transition-all shadow-apple-sm"
    >
      <Edit3 className="w-3.5 h-3.5" />
      <span>Edit This Article in Studio</span>
    </Link>
  );
}
