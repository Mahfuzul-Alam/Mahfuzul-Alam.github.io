import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Mail, Phone, Home } from "lucide-react";
import { personalData } from "@/data/personal";

export const metadata: Metadata = {
  title: "Message Received — Thank You",
  description: "Thank you for reaching out to Mahfuzul Alam, SDET.",
};

export default function ThankYouPage() {
  return (
    <div className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-lg mx-auto text-center space-y-8 p-8 sm:p-12 rounded-3xl bg-white border border-apple-border shadow-apple-sm">
        <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200/60 shadow-apple-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
            Dispatch Successful
          </span>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-apple-text">
            Thank You for Reaching Out
          </h1>
          <p className="text-xs sm:text-sm text-apple-secondary leading-relaxed">
            Your inquiry has been prepared. I typically respond to technical and career discussions within 24 to 48 hours.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-apple-subtle border border-apple-border/60 text-xs text-apple-secondary space-y-2 text-left">
          <div className="font-semibold text-apple-text">Direct Contact Summary:</div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-apple-blue" />
            <a href={`mailto:${personalData.email}`} className="hover:text-apple-blue underline">
              {personalData.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-apple-blue" />
            <a href={`tel:${personalData.phone}`} className="hover:text-apple-blue">
              {personalData.phone}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-slate-200 hover:bg-black transition-all shadow-apple"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/projects/"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-medium text-apple-text bg-apple-subtle border border-apple-border hover:bg-apple-borderSubtle transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
