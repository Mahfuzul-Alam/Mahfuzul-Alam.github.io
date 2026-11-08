import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, Article } from "@/data/articles";
import { Badge } from "@/components/shared/Badge";
import { ArrowLeft, Clock, Calendar, BookOpen } from "lucide-react";

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
    title: article.title,
    description: article.summary,
  };
}

export default async function ArticleDetailPage({ params }: ArticleProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/writing/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-apple-secondary hover:text-apple-text transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Writing</span>
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-4 pb-8 border-b border-apple-borderSubtle">
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

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-apple-text leading-[1.15]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-apple-secondary leading-relaxed">
            {article.subtitle}
          </p>
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
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {section.codeBlock && (
                <div className="pt-2">
                  <pre className="p-5 rounded-2xl bg-apple-subtle text-apple-text border border-apple-border text-xs font-mono overflow-x-auto leading-relaxed">
                    <code>{section.codeBlock.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* References */}
        {article.references.length > 0 && (
          <section className="pt-8 border-t border-apple-borderSubtle space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-apple-tertiary">
              References & Citations
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

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-apple-borderSubtle">
          <Link
            href="/writing/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-apple-blue hover:text-apple-blueHover"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Read more essays</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
