import React from "react";
import Link from "next/link";
import Image from "next/image";
import { personalData } from "@/data/personal";
import { assetPath } from "@/lib/utils";
import { ArrowRight, FileText, Github, Linkedin, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-apple-borderSubtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6 max-w-2xl">
            {/* Title & Name */}
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-apple-secondary">
                {personalData.title}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-apple-text leading-[1.1]">
                {personalData.name}
              </h1>
            </div>

            {/* Primary Headline */}
            <p className="text-xl sm:text-2xl font-normal text-apple-text/90 tracking-tight leading-snug">
              &ldquo;{personalData.headline}&rdquo;
            </p>

            {/* Supporting Bio */}
            <p className="text-base text-apple-secondary leading-relaxed">
              {personalData.shortBio} {personalData.aboutBio}
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
              <Link
                href="/projects/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-apple-text hover:bg-black transition-all shadow-apple hover:shadow-apple-md"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={assetPath(personalData.resumeUrl)}
                download="Mahfuzul_Alam_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-apple-text bg-white border border-apple-border hover:bg-apple-subtle transition-all shadow-apple-sm"
              >
                <FileText className="w-4 h-4 text-apple-secondary" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Portrait Photo & Social Anchors */}
          <div className="flex-shrink-0 w-full md:w-auto flex flex-col items-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-apple-border/80 shadow-apple-md bg-white p-2 transition-transform duration-300 hover:scale-[1.01]">
              <div className="w-full h-full rounded-[20px] overflow-hidden bg-apple-subtle relative">
                <Image
                  src={assetPath(personalData.photoUrl)}
                  alt="Mahfuzul Alam — Software Development Engineer in Test (SDET)"
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                  className="object-cover object-center scale-110"
                  priority
                />
              </div>
            </div>

            {/* Social Links Under Photo */}
            <div className="mt-4 flex items-center justify-center gap-2.5">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-apple-secondary hover:text-apple-blue bg-white border border-apple-border/80 shadow-apple-sm hover:shadow-apple transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-apple-secondary hover:text-apple-text bg-white border border-apple-border/80 shadow-apple-sm hover:shadow-apple transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5 text-apple-text" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
