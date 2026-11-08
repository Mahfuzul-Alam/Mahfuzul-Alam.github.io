"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { personalData } from "@/data/personal";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/shared/Badge";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Send,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  general?: string;
}

export default function ContactPage() {
  const router = useRouter();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) {
      errs.name = "Please provide your full name.";
    }
    if (!form.email.trim()) {
      errs.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) {
      errs.subject = "Please specify a subject for your inquiry.";
    }
    if (!form.message.trim()) {
      errs.message = "Message content cannot be blank.";
    } else if (form.message.trim().length < 15) {
      errs.message = "Please include at least 15 characters describing your inquiry.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Prepare mailto link as resilient client-side static fallthrough
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${form.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const mailtoUrl = `mailto:${personalData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      // Trigger client mailto window
      window.location.href = mailtoUrl;
      setSubmitting(false);
      // Navigate to dedicated thank you confirmation page
      router.push("/contact/thank-you/");
    }, 600);
  };

  return (
    <div className="pt-10 sm:pt-14 pb-16 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <PageHeader
          eyebrow="Direct Communication"
          title="Get in Touch"
          description="Whether you're exploring SDET recruitment, discussing test automation strategies, or inquiring about software quality engineering, I welcome thoughtful collaboration."
        />

        {/* Direct Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-apple-blueLight text-apple-blue flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <Badge variant="green">Primary</Badge>
            </div>
            <div>
              <div className="text-xs text-apple-tertiary">Email Address</div>
              <a
                href={`mailto:${personalData.email}`}
                className="text-sm font-semibold text-apple-text hover:text-apple-blue transition-colors"
              >
                {personalData.email}
              </a>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <a
                href={`mailto:${personalData.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-apple-text dark:bg-white dark:text-black dark:hover:bg-slate-200 hover:bg-black transition-colors"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="p-2 rounded-xl text-apple-secondary bg-apple-subtle hover:bg-apple-borderSubtle transition-colors"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-apple-green" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-apple-subtle text-apple-text flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <Badge variant="neutral">Direct Line</Badge>
            </div>
            <div>
              <div className="text-xs text-apple-tertiary">Direct Telephone</div>
              <a
                href={`tel:${personalData.phone}`}
                className="text-sm font-semibold text-apple-text hover:text-apple-blue transition-colors font-mono"
              >
                {personalData.phone}
              </a>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <a
                href={`tel:${personalData.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-apple-text bg-apple-subtle border border-apple-border hover:bg-apple-borderSubtle transition-colors"
              >
                <span>Call Directly</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={copyPhone}
                className="p-2 rounded-xl text-apple-secondary bg-apple-subtle hover:bg-apple-borderSubtle transition-colors"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-apple-green" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form with Validation & Error States */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-apple-text">
              Send a Direct Message
            </h2>
            <p className="text-xs text-apple-secondary">
              Fill out the details below. This generates an authenticated direct inquiry to my inbox.
            </p>
          </div>

          {errors.general && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errors.general}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-medium text-apple-text">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="e.g. Sarah Jenkins"
                  className={`w-full px-4 py-2.5 rounded-xl text-xs bg-apple-subtle border transition-colors focus:outline-none focus:ring-2 focus:ring-apple-blue/20 ${
                    errors.name ? "border-rose-400 bg-rose-50/20" : "border-apple-border focus:border-apple-blue"
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium text-apple-text">
                  Your Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-2.5 rounded-xl text-xs bg-apple-subtle border transition-colors focus:outline-none focus:ring-2 focus:ring-apple-blue/20 ${
                    errors.email ? "border-rose-400 bg-rose-50/20" : "border-apple-border focus:border-apple-blue"
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-medium text-apple-text">
                Subject / Role Inquiry <span className="text-rose-500">*</span>
              </label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={(e) => {
                  setForm({ ...form, subject: e.target.value });
                  if (errors.subject) setErrors({ ...errors, subject: undefined });
                }}
                placeholder="e.g. SDET Opportunity / Automation Project Inquiry"
                className={`w-full px-4 py-2.5 rounded-xl text-xs bg-apple-subtle border transition-colors focus:outline-none focus:ring-2 focus:ring-apple-blue/20 ${
                  errors.subject ? "border-rose-400 bg-rose-50/20" : "border-apple-border focus:border-apple-blue"
                }`}
              />
              {errors.subject && (
                <p className="text-[11px] text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.subject}</span>
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-medium text-apple-text">
                Message &amp; Project Context <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: undefined });
                }}
                placeholder="Please share details about your team, tech stack, or testing challenges..."
                className={`w-full px-4 py-2.5 rounded-xl text-xs bg-apple-subtle border transition-colors focus:outline-none focus:ring-2 focus:ring-apple-blue/20 ${
                  errors.message ? "border-rose-400 bg-rose-50/20" : "border-apple-border focus:border-apple-blue"
                }`}
              />
              {errors.message && (
                <p className="text-[11px] text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-apple-tertiary">
                * All fields are required for verification
              </span>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-apple-text dark:bg-white dark:text-black dark:hover:bg-slate-200 hover:bg-black disabled:opacity-50 transition-all shadow-apple"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Preparing Dispatch...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Location & Timezone info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-apple-border/70 shadow-apple-sm flex items-center gap-3">
            <MapPin className="w-4 h-4 text-apple-blue flex-shrink-0" />
            <div className="text-xs">
              <div className="text-apple-tertiary">Location</div>
              <div className="font-medium text-apple-text">{personalData.location}</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-apple-border/70 shadow-apple-sm flex items-center gap-3">
            <Clock className="w-4 h-4 text-apple-blue flex-shrink-0" />
            <div className="text-xs">
              <div className="text-apple-tertiary">Working Timezone</div>
              <div className="font-medium text-apple-text">Asia/Dhaka (GMT+6) • Global Remote Friendly</div>
            </div>
          </div>
        </div>

        {/* Social / Professional Networks */}
        <section className="space-y-4">
          <h3 className="text-base font-semibold text-apple-text tracking-tight">
            Verified Professional Networks
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm hover:shadow-apple-hover hover:border-apple-border transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-apple-blueLight text-apple-blue flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-apple-tertiary group-hover:text-apple-blue transition-colors" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-apple-text group-hover:text-apple-blue transition-colors">
                  LinkedIn
                </h4>
                <p className="text-xs text-apple-secondary mt-1">
                  Connect for professional networking, recommendations, and industry updates.
                </p>
              </div>
              <div className="text-[11px] font-mono text-apple-tertiary">
                linkedin.com/in/1-mahfuzul-alam
              </div>
            </a>

            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm hover:shadow-apple-hover hover:border-apple-border transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-apple-subtle text-apple-text flex items-center justify-center">
                  <Github className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-apple-tertiary group-hover:text-apple-text transition-colors" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-apple-text transition-colors">
                  GitHub
                </h4>
                <p className="text-xs text-apple-secondary mt-1">
                  Explore open-source test suites, automation utilities, and architecture prototypes.
                </p>
              </div>
              <div className="text-[11px] font-mono text-apple-tertiary">
                github.com/Mahfuzul-Alam
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
