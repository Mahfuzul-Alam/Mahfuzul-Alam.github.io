"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Article } from "@/data/articles";
import { Badge } from "@/components/shared/Badge";
import { SocialShare } from "./SocialShare";
import { ArrowRight, Clock, Calendar, Sparkles, Filter } from "lucide-react";

interface WritingListProps {
  articles: Article[];
}

export function WritingList({ articles }: WritingListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Applied AI in QA",
    "Software Quality & Reliability",
    "Test Design & Strategy",
    "Test Automation Engineering",
    "Real-World QA & Engineering Practices",
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  const featuredArticle = articles.find((a) => a.featured);

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        <span className="text-xs text-apple-tertiary flex items-center gap-1.5 mr-1 font-medium">
          <Filter className="w-3.5 h-3.5" />
          <span>Category:</span>
        </span>
        {categories.map((cat) => {
          const count =
            cat === "All"
              ? articles.length
              : articles.filter((a) => a.category === cat).length;
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                isSelected
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-black shadow-apple-sm"
                  : "bg-apple-subtle text-apple-secondary hover:text-apple-text hover:bg-apple-borderSubtle dark:bg-white/5 dark:text-apple-secondary dark:hover:text-white"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? "bg-white/20 text-white dark:bg-black/20 dark:text-black" : "bg-black/5 dark:bg-white/10 text-apple-tertiary"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Featured Article Banner (Only on 'All' view) */}
      {selectedCategory === "All" && featuredArticle && (
        <section className="relative p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-white via-white to-blue-50/40 dark:from-[#1C1C1E] dark:via-[#1C1C1E] dark:to-blue-950/30 border border-apple-blue/20 dark:border-blue-500/30 shadow-apple hover:shadow-apple-md transition-all duration-300 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-apple-blueLight text-apple-blue text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Essay</span>
            </div>
            <SocialShare
              title={featuredArticle.title}
              slug={featuredArticle.slug}
              variant="compact"
            />
          </div>

          <div className="space-y-2.5">
            <h2 className="text-2xl sm:text-3xl font-semibold text-apple-text tracking-tight hover:text-apple-blue transition-colors leading-tight">
              <Link href={`/writing/${featuredArticle.slug}/`}>
                {featuredArticle.title}
              </Link>
            </h2>
            <p className="text-sm sm:text-base text-apple-secondary font-medium leading-relaxed">
              {featuredArticle.subtitle}
            </p>
          </div>

          <p className="text-sm text-apple-secondary/90 leading-relaxed max-w-3xl">
            {featuredArticle.summary}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-apple-borderSubtle/60">
            <div className="flex items-center gap-3 text-xs text-apple-tertiary">
              <Badge variant="blue">{featuredArticle.category}</Badge>
              <span className="flex items-center gap-1 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>{featuredArticle.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>{featuredArticle.readingTime}</span>
              </span>
            </div>

            <Link
              href={`/writing/${featuredArticle.slug}/`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-apple-blue hover:text-apple-blueHover"
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      )}

      {/* Article Listing Grid */}
      <div className="space-y-6">
        {filteredArticles
          .filter((a) => selectedCategory !== "All" || !a.featured)
          .map((article) => (
            <article
              key={article.slug}
              className="group p-7 sm:p-8 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm hover:shadow-apple-hover hover:border-apple-border transition-all duration-300 space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-apple-tertiary">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="blue">{article.category}</Badge>
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readingTime}</span>
                  </span>
                </div>

                <SocialShare
                  title={article.title}
                  slug={article.slug}
                  variant="compact"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-apple-text tracking-tight group-hover:text-apple-blue transition-colors">
                <Link href={`/writing/${article.slug}/`}>{article.title}</Link>
              </h3>

              <p className="text-xs sm:text-sm text-apple-secondary font-medium leading-relaxed">
                {article.subtitle}
              </p>

              <p className="text-sm text-apple-secondary/90 leading-relaxed">
                {article.summary}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-apple-borderSubtle/60">
                <Link
                  href={`/writing/${article.slug}/`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-apple-text group-hover:text-apple-blue transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <span className="text-[11px] font-mono text-apple-tertiary">
                  /writing/{article.slug}/
                </span>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}
