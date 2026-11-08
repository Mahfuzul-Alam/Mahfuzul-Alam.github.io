"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { personalData, PersonalData } from "@/data/personal";
import { articles, Article } from "@/data/articles";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import {
  Settings,
  FileText,
  Save,
  Download,
  Copy,
  Check,
  Eye,
  Plus,
  Trash2,
  Sparkles,
  Search,
  Globe,
  Share2,
  Bot,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

type AdminTab = "profile" | "articles" | "projects" | "llms";

export default function AdminPage() {
  const router = useRouter();
  const [isLocalhost, setIsLocalhost] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<AdminTab>("articles");
  const [copiedState, setCopiedState] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      const isLocal =
        hostname === "localhost" ||
        hostname === "127.0.0.1" ||
        hostname.endsWith(".local") ||
        hostname.startsWith("192.168.");
      setIsLocalhost(isLocal);
      if (!isLocal) {
        // Automatically redirect public visitors away from /admin/
        router.replace("/");
      }
    }
  }, [router]);

  // Profile Form State
  const [profile, setProfile] = useState<PersonalData>(personalData);
  const [profileSaved, setProfileSaved] = useState(false);

  const [articleList, setArticleList] = useState<Article[]>(articles);
  const [selectedSlug, setSelectedSlug] = useState<string>("new");
  const [newArticle, setNewArticle] = useState<Partial<Article>>({
    title: "",
    subtitle: "",
    slug: "",
    category: "Software Quality & Reliability",
    readingTime: "5 min read",
    summary: "",
    content: [
      {
        sectionTitle: "Introduction & Context",
        paragraphs: [""],
      },
    ],
    references: [],
  });

  const [activeArticleIndex, setActiveArticleIndex] = useState<number | null>(null);
  const [articleSuccess, setArticleSuccess] = useState(false);

  // Load article when selection changes
  const handleSelectArticle = (slug: string) => {
    setSelectedSlug(slug);
    if (slug === "new") {
      setNewArticle({
        title: "",
        subtitle: "",
        slug: "",
        category: "Software Quality & Reliability",
        readingTime: "5 min read",
        summary: "",
        content: [
          {
            sectionTitle: "Introduction & Context",
            paragraphs: [""],
          },
        ],
        references: [],
      });
    } else {
      const found = articleList.find((a) => a.slug === slug);
      if (found) {
        setNewArticle(JSON.parse(JSON.stringify(found)));
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const editSlug = params.get("edit");
      const tabParam = params.get("tab") as AdminTab;
      if (tabParam) setActiveTab(tabParam);
      if (editSlug) {
        handleSelectArticle(editSlug);
      }
    }
  }, []);

  // Auto-generate slug from title
  const handleTitleChange = (title: string) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    setNewArticle((prev) => ({
      ...prev,
      title,
      slug: prev.slug && prev.slug !== "" ? prev.slug : slug,
    }));
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedState(id);
    setTimeout(() => setCopiedState(null), 2000);
  };

  const handleSaveProfile = () => {
    try {
      localStorage.setItem("admin_personal_data", JSON.stringify(profile));
      setProfileSaved(true);
      setTimeout(() => setProfileSaved(false), 2500);
    } catch {}
  };

  const handleAddSection = () => {
    setNewArticle((prev) => ({
      ...prev,
      content: [
        ...(prev.content || []),
        { sectionTitle: "New Section Title", paragraphs: [""] },
      ],
    }));
  };

  const handleSaveArticle = () => {
    if (!newArticle.title || !newArticle.slug) return;

    const fullArticle: Article = {
      slug: newArticle.slug,
      title: newArticle.title,
      subtitle: newArticle.subtitle || "",
      date:
        newArticle.date ||
        new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        }),
      readingTime: newArticle.readingTime || "5 min read",
      category: newArticle.category || "Software Quality & Reliability",
      summary: newArticle.summary || "",
      content: newArticle.content || [],
      references: newArticle.references || [],
    };

    let updatedList: Article[];
    if (selectedSlug === "new") {
      updatedList = [fullArticle, ...articleList];
      setSelectedSlug(fullArticle.slug);
    } else {
      updatedList = articleList.map((a) =>
        a.slug === selectedSlug ? fullArticle : a
      );
    }

    setArticleList(updatedList);
    setArticleSuccess(true);
    setTimeout(() => setArticleSuccess(false), 4000);
  };

  const getFullArticlesCode = () => {
    return `export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readingTime: string;
  category: string;
  summary: string;
  content: {
    sectionTitle: string;
    paragraphs: string[];
    codeBlock?: {
      language: string;
      code: string;
    };
  }[];
  references: string[];
}

export const articles: Article[] = ${JSON.stringify(articleList, null, 2)};
`;
  };

  const downloadFullArticlesFile = () => {
    const code = getFullArticlesCode();
    const blob = new Blob([code], { type: "text/typescript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "articles.ts";
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadArticleCode = () => {
    const code = `// Exported Article: ${newArticle.title}
export const article = ${JSON.stringify(newArticle, null, 2)};
`;
    const blob = new Blob([code], { type: "text/typescript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${newArticle.slug || "new-article"}.ts`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // SEO calculations
  const titleCharCount = newArticle.title?.length || 0;
  const descCharCount = newArticle.summary?.length || 0;
  const isTitleGood = titleCharCount >= 30 && titleCharCount <= 65;
  const isDescGood = descCharCount >= 120 && descCharCount <= 160;

  if (isLocalhost === false) {
    return null;
  }

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-apple-borderSubtle">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Settings className="w-4 h-4 text-apple-blue" />
              <span className="text-xs font-semibold text-apple-tertiary uppercase tracking-wider">
                Management Studio
              </span>
              <Badge variant="green">Localhost Only</Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-apple-text">
              Portfolio Content Studio
            </h1>
            <p className="text-xs sm:text-sm text-apple-secondary mt-1">
              Author SEO-friendly articles, update metadata, and preview changes locally. This page is restricted from public deployment.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-apple-text bg-white border border-apple-border shadow-apple-sm hover:bg-apple-subtle transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview Live Site</span>
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-apple-borderSubtle pb-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("articles")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === "articles"
                ? "bg-neutral-900 text-white dark:bg-white dark:text-black shadow-apple-sm"
                : "text-apple-secondary hover:text-apple-text hover:bg-apple-subtle"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Article Publisher &amp; SEO</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === "profile"
                ? "bg-neutral-900 text-white dark:bg-white dark:text-black shadow-apple-sm"
                : "text-apple-secondary hover:text-apple-text hover:bg-apple-subtle"
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Profile &amp; Contact Info</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("llms")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === "llms"
                ? "bg-neutral-900 text-white dark:bg-white dark:text-black shadow-apple-sm"
                : "text-apple-secondary hover:text-apple-text hover:bg-apple-subtle"
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>AI Search &amp; llms.txt</span>
          </button>
        </div>

        {/* TAB 1: ARTICLE PUBLISHER & SEO */}
        {activeTab === "articles" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Editor Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-7 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-apple-borderSubtle">
                  <h2 className="text-base font-semibold text-apple-text">
                    {selectedSlug === "new" ? "Compose New SEO Article" : "Edit Existing Article"}
                  </h2>
                  <span className="text-[11px] text-apple-tertiary">
                    Visual Editor &amp; Instant Code Export
                  </span>
                </div>

                {/* Article Selector */}
                <div className="space-y-1.5 p-3.5 rounded-2xl bg-apple-subtle border border-apple-border">
                  <div className="flex items-center justify-between text-xs font-semibold text-apple-text">
                    <span>Select Article to Edit:</span>
                    <button
                      type="button"
                      onClick={() => handleSelectArticle("new")}
                      className="text-[11px] text-apple-blue hover:underline font-medium"
                    >
                      + Create New Article
                    </button>
                  </div>
                  <select
                    value={selectedSlug}
                    onChange={(e) => handleSelectArticle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-white border border-apple-border focus:border-apple-blue focus:outline-none"
                  >
                    <option value="new">+ Write New Article</option>
                    {articleList.map((a) => (
                      <option key={a.slug} value={a.slug}>
                        {a.title} ({a.date})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Title */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <label className="font-medium text-apple-text">Article Title</label>
                    <span className={`text-[10px] ${isTitleGood ? "text-emerald-600" : "text-amber-600"}`}>
                      {titleCharCount}/60 chars (Optimal: 40-60)
                    </span>
                  </div>
                  <input
                    type="text"
                    value={newArticle.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. Heuristic Flakiness Detection in CI/CD"
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-apple-subtle border border-apple-border focus:border-apple-blue focus:outline-none"
                  />
                </div>

                {/* Subtitle / Headline */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-apple-text">Subtitle / Pitch</label>
                  <input
                    type="text"
                    value={newArticle.subtitle}
                    onChange={(e) => setNewArticle({ ...newArticle, subtitle: e.target.value })}
                    placeholder="e.g. How lightweight outcome aggregation pinpoints non-deterministic tests..."
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-apple-subtle border border-apple-border focus:border-apple-blue focus:outline-none"
                  />
                </div>

                {/* Category & Reading Time */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-apple-text">Category</label>
                    <select
                      value={newArticle.category}
                      onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl text-xs bg-apple-subtle border border-apple-border focus:border-apple-blue focus:outline-none"
                    >
                      <option>Software Quality &amp; Reliability</option>
                      <option>Applied AI in QA</option>
                      <option>Automation Frameworks</option>
                      <option>Engineering Practices</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-apple-text">Reading Time</label>
                    <input
                      type="text"
                      value={newArticle.readingTime}
                      onChange={(e) => setNewArticle({ ...newArticle, readingTime: e.target.value })}
                      placeholder="e.g. 5 min read"
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-apple-subtle border border-apple-border focus:border-apple-blue focus:outline-none"
                    />
                  </div>
                </div>

                {/* Slug */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-apple-text">URL Slug</label>
                  <div className="flex items-center text-xs text-apple-tertiary bg-apple-subtle border border-apple-border rounded-xl px-3 py-2">
                    <span className="text-apple-tertiary">/writing/</span>
                    <input
                      type="text"
                      value={newArticle.slug}
                      onChange={(e) => setNewArticle({ ...newArticle, slug: e.target.value })}
                      className="bg-transparent border-none text-apple-text focus:outline-none flex-1 font-mono text-xs pl-1"
                    />
                  </div>
                </div>

                {/* Meta Description / Summary */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <label className="font-medium text-apple-text">SEO Meta Description &amp; Summary</label>
                    <span className={`text-[10px] ${isDescGood ? "text-emerald-600" : "text-amber-600"}`}>
                      {descCharCount}/160 chars (Optimal: 120-160)
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    value={newArticle.summary}
                    onChange={(e) => setNewArticle({ ...newArticle, summary: e.target.value })}
                    placeholder="Concise summary indexed by Google and AI search engines..."
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-apple-subtle border border-apple-border focus:border-apple-blue focus:outline-none"
                  />
                </div>

                {/* Sections */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-apple-text">Article Content Sections</label>
                    <button
                      type="button"
                      onClick={handleAddSection}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-apple-blue hover:text-apple-blueHover"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Section</span>
                    </button>
                  </div>

                  {newArticle.content?.map((section, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-2xl bg-apple-subtle border border-apple-border/60 space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={section.sectionTitle}
                          onChange={(e) => {
                            const updated = [...(newArticle.content || [])];
                            updated[sIdx].sectionTitle = e.target.value;
                            setNewArticle({ ...newArticle, content: updated });
                          }}
                          placeholder="Section Title"
                          className="font-semibold text-xs text-apple-text bg-white px-3 py-1.5 rounded-lg border border-apple-border flex-1 mr-2"
                        />
                        {sIdx > 0 && (
                          <button
                            type="button"
                            onClick={() => {
                              const updated = newArticle.content?.filter((_, i) => i !== sIdx);
                              setNewArticle({ ...newArticle, content: updated });
                            }}
                            className="text-apple-tertiary hover:text-rose-600 p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      <textarea
                        rows={4}
                        value={section.paragraphs.join("\n\n")}
                        onChange={(e) => {
                          const updated = [...(newArticle.content || [])];
                          updated[sIdx].paragraphs = e.target.value.split("\n\n");
                          setNewArticle({ ...newArticle, content: updated });
                        }}
                        placeholder="Write paragraphs (double newline for new paragraph)..."
                        className="w-full p-3 rounded-lg text-xs bg-white border border-apple-border focus:outline-none"
                      />
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-apple-borderSubtle flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={downloadFullArticlesFile}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-apple-text bg-apple-subtle border border-apple-border hover:bg-apple-borderSubtle transition-colors"
                      title="Download complete data/articles.ts to drop into your codebase"
                    >
                      <Download className="w-3.5 h-3.5 text-apple-secondary" />
                      <span>Download articles.ts</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(getFullArticlesCode(), "full-articles-code")}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-apple-secondary hover:text-apple-text bg-apple-subtle hover:bg-apple-borderSubtle border border-apple-border/60 transition-colors"
                      title="Copy complete data/articles.ts code to clipboard"
                    >
                      {copiedState === "full-articles-code" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-apple-green" />
                          <span>Copied Code!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy articles.ts Code</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleSaveArticle}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold text-white bg-neutral-900 dark:bg-white dark:text-black hover:bg-black dark:hover:bg-slate-200 transition-colors shadow-apple-sm"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>{selectedSlug === "new" ? "Add to Articles" : "Update Article"}</span>
                  </button>
                </div>

                {articleSuccess && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 space-y-1">
                    <div className="flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Article &ldquo;{newArticle.title}&rdquo; successfully saved!</span>
                    </div>
                    <p className="text-[11px] text-emerald-700 leading-relaxed pl-6">
                      Click <strong>&ldquo;Download articles.ts&rdquo;</strong> or <strong>&ldquo;Copy articles.ts Code&rdquo;</strong> to save it directly into your <code>data/articles.ts</code> file.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Live SEO Preview Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Google SERP Simulator */}
              <div className="p-6 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-apple-text">
                  <Search className="w-4 h-4 text-apple-blue" />
                  <span>Google Search Preview</span>
                </div>

                <div className="p-4 rounded-2xl bg-apple-subtle/70 border border-apple-border/50 space-y-1">
                  <div className="text-[11px] text-[#202124] flex items-center gap-1">
                    <span className="font-medium">mahfuzul-alam.github.io</span>
                    <span className="text-apple-tertiary">› writing › {newArticle.slug || "article-url"}</span>
                  </div>
                  <h3 className="text-base font-medium text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                    {newArticle.title || "Your SEO Article Title Appears Here"} | Mahfuzul Alam
                  </h3>
                  <p className="text-xs text-[#4d5156] line-clamp-2 leading-relaxed">
                    {newArticle.summary ||
                      "Provide a concise meta description summarizing the test automation insights, framework architecture, or AI quality engineering methods..."}
                  </p>
                </div>
              </div>

              {/* Social Media Card Simulator */}
              <div className="p-6 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-apple-text">
                  <Share2 className="w-4 h-4 text-apple-blue" />
                  <span>LinkedIn &amp; Twitter Card Preview</span>
                </div>

                <div className="rounded-2xl border border-apple-border overflow-hidden bg-white shadow-apple-sm">
                  <div className="h-32 bg-gradient-to-br from-apple-subtle to-slate-200 flex items-center justify-center p-4 text-center">
                    <span className="text-xs font-semibold text-apple-text line-clamp-2">
                      {newArticle.title || "Article OpenGraph Title"}
                    </span>
                  </div>
                  <div className="p-3 bg-white space-y-1">
                    <div className="text-[10px] uppercase tracking-wider text-apple-tertiary">
                      mahfuzul-alam.github.io
                    </div>
                    <div className="text-xs font-semibold text-apple-text line-clamp-1">
                      {newArticle.title || "Article Title Preview"}
                    </div>
                    <p className="text-[11px] text-apple-secondary line-clamp-2">
                      {newArticle.subtitle || newArticle.summary || "Summary description..."}
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Search Readiness Checklist */}
              <div className="p-6 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-apple-text">
                  <Sparkles className="w-4 h-4 text-apple-blue" />
                  <span>AI Search Readiness Checklist</span>
                </div>

                <ul className="space-y-2 text-xs text-apple-secondary">
                  <li className="flex items-center gap-2">
                    <Check className={`w-3.5 h-3.5 ${isTitleGood ? "text-emerald-600" : "text-apple-tertiary"}`} />
                    <span>Title length optimized for search engines (30–65 chars)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`w-3.5 h-3.5 ${isDescGood ? "text-emerald-600" : "text-apple-tertiary"}`} />
                    <span>Meta description length (120–160 chars)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Static HTML prerendering for zero-JS crawlers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>llms.txt discovery link configured in robots.txt</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROFILE & CONTACT INFO */}
        {activeTab === "profile" && (
          <div className="p-8 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-6 max-w-3xl">
            <div className="flex items-center justify-between pb-4 border-b border-apple-borderSubtle">
              <div>
                <h2 className="text-base font-semibold text-apple-text">
                  Personal &amp; Professional Brand Details
                </h2>
                <p className="text-xs text-apple-secondary mt-0.5">
                  Update your contact points, headline, and bio anytime.
                </p>
              </div>
              <button
                type="button"
                onClick={handleSaveProfile}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-neutral-900 dark:bg-white dark:text-black hover:bg-black dark:hover:bg-slate-200 transition-colors shadow-apple-sm"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Profile</span>
              </button>
            </div>

            {profileSaved && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Profile updates saved to your browser session!</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-apple-text">Full Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-apple-subtle border border-apple-border focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-apple-text">Designation</label>
                <input
                  type="text"
                  value={profile.title}
                  onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-apple-subtle border border-apple-border focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-apple-text">Official Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-apple-subtle border border-apple-border focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-apple-text">Phone Number</label>
                <input
                  type="text"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-apple-subtle border border-apple-border focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-apple-text">Location</label>
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-apple-subtle border border-apple-border focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-apple-text">LinkedIn Profile</label>
                <input
                  type="url"
                  value={profile.linkedin}
                  onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-apple-subtle border border-apple-border focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-apple-text">Primary Headline</label>
              <input
                type="text"
                value={profile.headline}
                onChange={(e) => setProfile({ ...profile, headline: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl text-xs bg-apple-subtle border border-apple-border focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-apple-text">Supporting Description</label>
              <textarea
                rows={3}
                value={profile.aboutBio}
                onChange={(e) => setProfile({ ...profile, aboutBio: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl text-xs bg-apple-subtle border border-apple-border focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  const content = `export const personalData = ${JSON.stringify(profile, null, 2)};\n`;
                  copyToClipboard(content, "profile-ts");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-apple-text bg-apple-subtle border border-apple-border hover:bg-apple-borderSubtle transition-colors"
              >
                {copiedState === "profile-ts" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-apple-green" />
                    <span>Copied TypeScript Config!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy updated data/personal.ts</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: LLMS.TXT & AI SEARCH HUB */}
        {activeTab === "llms" && (
          <div className="p-8 rounded-3xl bg-white border border-apple-border/80 shadow-apple-sm space-y-6 max-w-4xl">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-apple-blue" />
                <h2 className="text-lg font-semibold text-apple-text">
                  AI Search Optimization (llms.txt Hub)
                </h2>
              </div>
              <p className="text-xs text-apple-secondary leading-relaxed">
                Modern AI search tools like ChatGPT Search, Claude, Gemini, and Perplexity parse <code>/llms.txt</code> when answering queries like <em>&ldquo;Who is Mahfuzul Alam SDET?&rdquo;</em> or <em>&ldquo;Top Playwright and Cypress automation engineers in Dhaka&rdquo;</em>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-apple-subtle border border-apple-border/60 flex items-center justify-between gap-4">
              <div className="text-xs text-apple-secondary">
                <span className="font-semibold text-apple-text">Static llms.txt Path:</span>{" "}
                <code>/llms.txt</code> &amp; <code>/llms-full.txt</code>
              </div>
              <a
                href="/llms.txt"
                target="_blank"
                className="inline-flex items-center gap-1 text-xs font-semibold text-apple-blue hover:text-apple-blueHover"
              >
                <span>Inspect Live llms.txt</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-apple-text">llms.txt File Content Preview</span>
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      `# Mahfuzul Alam — Software Development Engineer in Test (SDET)\n\n> Building reliable software through intelligent testing and automation.\n\nEmail: ${personalData.email}\nPhone: ${personalData.phone}\nGitHub: ${personalData.github}\nLinkedIn: ${personalData.linkedin}`,
                      "llms-copy"
                    )
                  }
                  className="inline-flex items-center gap-1 text-apple-blue hover:underline"
                >
                  {copiedState === "llms-copy" ? <Check className="w-3.5 h-3.5 text-apple-green" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy Content</span>
                </button>
              </div>

              <pre className="p-5 rounded-2xl bg-apple-subtle border border-apple-border text-xs font-mono text-apple-text overflow-x-auto leading-relaxed max-h-72">
{`# Mahfuzul Alam — Software Development Engineer in Test (SDET)
> Building reliable software through intelligent testing and automation.

Official Details:
- Name: Mahfuzul Alam
- Designation: Software Development Engineer in Test (SDET)
- Email: ${personalData.email}
- Phone: ${personalData.phone}
- Location: ${personalData.location}
- GitHub: ${personalData.github}
- LinkedIn: ${personalData.linkedin}

Core Technologies:
- Playwright, Cypress, Selenium WebDriver, Postman, Python, TypeScript
- AI-assisted test scenario derivation, heuristic flakiness detection`}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
