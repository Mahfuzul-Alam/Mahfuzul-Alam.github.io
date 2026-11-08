import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, BookOpen, Layers, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6">
      <div className="max-w-md w-full text-center space-y-8 p-8 sm:p-10 rounded-3xl bg-white border border-apple-border shadow-apple-sm">
        <div className="space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-apple-subtle text-apple-secondary flex items-center justify-center mx-auto text-sm font-mono font-semibold">
            404
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-apple-text">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-apple-secondary leading-relaxed">
            The page you are seeking doesn’t exist or has moved. Explore the sections below to find what you need.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs font-medium">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 p-3 rounded-xl bg-apple-subtle hover:bg-apple-borderSubtle text-apple-text transition-colors"
          >
            <Home className="w-4 h-4 text-apple-secondary" />
            <span>Home</span>
          </Link>
          <Link
            href="/projects/"
            className="flex items-center justify-center gap-2 p-3 rounded-xl bg-apple-subtle hover:bg-apple-borderSubtle text-apple-text transition-colors"
          >
            <Layers className="w-4 h-4 text-apple-secondary" />
            <span>Projects</span>
          </Link>
          <Link
            href="/research/"
            className="flex items-center justify-center gap-2 p-3 rounded-xl bg-apple-subtle hover:bg-apple-borderSubtle text-apple-text transition-colors"
          >
            <BookOpen className="w-4 h-4 text-apple-secondary" />
            <span>Research</span>
          </Link>
          <Link
            href="/contact/"
            className="flex items-center justify-center gap-2 p-3 rounded-xl bg-apple-subtle hover:bg-apple-borderSubtle text-apple-text transition-colors"
          >
            <Mail className="w-4 h-4 text-apple-secondary" />
            <span>Contact</span>
          </Link>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-apple-blue hover:text-apple-blueHover"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
