"use client";

import React, { useState, useEffect } from "react";
import { Linkedin, Twitter, Facebook, Copy, Check, Share2 } from "lucide-react";

interface SocialShareProps {
  title: string;
  slug: string;
  summary?: string;
  variant?: "compact" | "full";
}

export function SocialShare({
  title,
  slug,
  summary,
  variant = "full",
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(`${window.location.origin}/writing/${slug}/`);
    } else {
      setCurrentUrl(`https://mahfuzul-alam.github.io/writing/${slug}/`);
    }
  }, [slug]);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedSummary = encodeURIComponent(summary || title);

  const shareLinks = [
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
      color: "hover:text-[#0A66C2] hover:bg-blue-50/70 border-apple-border/70",
      iconColor: "text-[#0A66C2]",
    },
    {
      name: "X (Twitter)",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: Twitter,
      color: "hover:text-black hover:bg-black/5 border-apple-border/70",
      iconColor: "text-black",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
      color: "hover:text-[#1877F2] hover:bg-blue-50/70 border-apple-border/70",
      iconColor: "text-[#1877F2]",
    },
    {
      name: "Reddit",
      href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      icon: RedditIcon,
      color: "hover:text-[#FF4500] hover:bg-orange-50/70 border-apple-border/70",
      iconColor: "text-[#FF4500]",
    },
  ];

  const handleCopyLink = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
    }
  };

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-apple-tertiary flex items-center gap-1 mr-1">
          <Share2 className="w-3.5 h-3.5" />
          <span>Share:</span>
        </span>
        {shareLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${item.name}`}
              title={`Share on ${item.name}`}
              className={`p-1.5 rounded-full text-apple-secondary bg-white border ${item.color} transition-all duration-200 shadow-apple-xs hover:scale-105`}
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          );
        })}
        <button
          onClick={handleCopyLink}
          type="button"
          aria-label="Copy link to article"
          title="Copy link"
          className="p-1.5 rounded-full text-apple-secondary bg-white border border-apple-border/70 hover:text-apple-blue hover:bg-blue-50/50 transition-all duration-200 shadow-apple-xs hover:scale-105"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-apple-green" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-2xl bg-apple-subtle border border-apple-border/80 space-y-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-apple-secondary">
          <Share2 className="w-4 h-4 text-apple-blue" />
          <span>Share This Article</span>
        </div>
        {copied && (
          <span className="text-xs text-apple-green font-medium animate-fade-in flex items-center gap-1">
            <Check className="w-3.5 h-3.5" /> Link copied to clipboard
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        {shareLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-apple-text bg-white border ${item.color} shadow-apple-xs hover:shadow-apple-sm transition-all duration-200`}
            >
              <Icon className={`w-3.5 h-3.5 ${item.iconColor}`} />
              <span>{item.name}</span>
            </a>
          );
        })}

        <button
          onClick={handleCopyLink}
          type="button"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-apple-text bg-white border border-apple-border/70 hover:text-apple-blue hover:border-apple-blue/30 shadow-apple-xs hover:shadow-apple-sm transition-all duration-200"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-apple-green" />
              <span className="text-apple-green font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-apple-secondary" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "w-4 h-4"}
    >
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.56 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.703zM9.25 12C8.56 12 8 12.56 8 13.25c0 .687.56 1.248 1.25 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm5.5 0c-.687 0-1.248.56-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>
  );
}
