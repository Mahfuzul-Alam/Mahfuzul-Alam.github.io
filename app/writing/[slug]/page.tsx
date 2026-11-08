import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, Article } from "@/data/articles";
import { Badge } from "@/components/shared/Badge";
import { SocialShare } from "@/components/writing/SocialShare";
import { SingleArticleLocalAction } from "@/components/shared/LocalEditorLinks";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ArticleProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — Mahfuzul Alam`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      url: `https://mahfuzul-alam.github.io/writing/${article.slug}/`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticleProps) {
  const { slug } = await params;
  const currentIndex = articles.findIndex((a) => a.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const article = articles[currentIndex];
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  // Related articles (same category or adjacent, max 2)
  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => (a.category === article.category ? -1 : 1))
    .slice(0, 2);

  return (
    <article className="py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link & Local Action */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/writing/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-apple-secondary hover:text-apple-text transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Writing</span>
          </Link>
          <SingleArticleLocalAction slug={article.slug} />
        </div>

        {/* Header */}
        <header className="space-y-5 pb-8 border-b border-apple-borderSubtle">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3 text-xs text-apple-tertiary">
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

            {/* Quick Share Buttons */}
            <SocialShare
              title={article.title}
              slug={article.slug}
              variant="compact"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-apple-text leading-[1.15]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-apple-secondary leading-relaxed font-normal">
            {article.subtitle}
          </p>

          <div className="pt-2 text-xs text-apple-tertiary flex items-center gap-2">
            <span>By Mahfuzul Alam</span>
            <span>•</span>
            <span>Software Development Engineer in Test (SDET)</span>
          </div>
        </header>

        {/* Article Body */}
        <div className="space-y-10 text-apple-text">
          {article.content.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-apple-text">
                {section.sectionTitle}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-apple-secondary leading-relaxed">
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>

              {section.codeBlock && (
                <div className="pt-2">
                  <div className="rounded-2xl bg-apple-subtle border border-apple-border overflow-hidden">
                    <div className="px-4 py-2 bg-black/[0.03] border-b border-apple-border/60 flex items-center justify-between text-[11px] font-mono text-apple-tertiary uppercase">
                      <span>{section.codeBlock.language}</span>
                      <span>Snippet</span>
                    </div>
                    <pre className="p-5 text-apple-text text-xs font-mono overflow-x-auto leading-relaxed">
                      <code>{section.codeBlock.code}</code>
                    </pre>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* References */}
        {article.references.length > 0 && (
          <section className="pt-8 border-t border-apple-borderSubtle space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-apple-tertiary">
              References & Reading Notes
            </h3>
            <ul className="space-y-1.5 text-xs text-apple-secondary">
              {article.references.map((ref, rIdx) => (
                <li key={rIdx} className="font-mono">
                  [{rIdx + 1}] {ref}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Social Share Box (FB, LinkedIn, Twitter, Reddit, Copy Link) */}
        <div className="pt-6">
          <SocialShare
            title={article.title}
            slug={article.slug}
            summary={article.summary}
            variant="full"
          />
        </div>

        {/* Previous / Next Article Navigation */}
        <nav className="pt-8 border-t border-apple-borderSubtle grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              href={`/writing/${prevArticle.slug}/`}
              className="p-4 rounded-2xl bg-white border border-apple-border/70 hover:border-apple-blue/40 shadow-apple-sm transition-all group flex flex-col justify-between"
            >
              <span className="text-[11px] font-semibold text-apple-tertiary uppercase tracking-wider flex items-center gap-1 group-hover:text-apple-blue">
                <ChevronLeft className="w-3.5 h-3.5" /> Previous Article
              </span>
              <span className="text-sm font-semibold text-apple-text group-hover:text-apple-blue transition-colors mt-2 line-clamp-2">
                {prevArticle.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextArticle ? (
            <Link
              href={`/writing/${nextArticle.slug}/`}
              className="p-4 rounded-2xl bg-white border border-apple-border/70 hover:border-apple-blue/40 shadow-apple-sm transition-all group flex flex-col justify-between sm:text-right"
            >
              <span className="text-[11px] font-semibold text-apple-tertiary uppercase tracking-wider flex items-center justify-start sm:justify-end gap-1 group-hover:text-apple-blue">
                Next Article <ChevronRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-sm font-semibold text-apple-text group-hover:text-apple-blue transition-colors mt-2 line-clamp-2">
                {nextArticle.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="pt-8 border-t border-apple-borderSubtle space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-apple-tertiary">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/writing/${rel.slug}/`}
                  className="p-5 rounded-2xl bg-white border border-apple-border/70 hover:shadow-apple transition-all space-y-2 group"
                >
                  <span className="text-[11px] font-mono text-apple-blue font-medium">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-semibold text-apple-text group-hover:text-apple-blue transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-apple-secondary line-clamp-2">
                    {rel.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back Link */}
        <div className="pt-4 flex items-center justify-between">
          <Link
            href="/writing/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-apple-blue hover:text-apple-blueHover"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Articles</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
