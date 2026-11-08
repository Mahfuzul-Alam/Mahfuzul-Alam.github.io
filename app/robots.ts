import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/admin/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "anthropic-ai",
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
    ],
    sitemap: "https://mahfuzul-alam.github.io/sitemap.xml",
  };
}
