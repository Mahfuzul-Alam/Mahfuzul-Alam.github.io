import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/admin"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "cohere-ai",
          "meta-externalagent",
          "Bytespider",
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt", "/writing/", "/projects/", "/about/", "/research/"],
      },
    ],
    sitemap: "https://mahfuzul-alam.github.io/sitemap.xml",
    host: "https://mahfuzul-alam.github.io",
  };
}
