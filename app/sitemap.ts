import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mahfuzul-alam.github.io";
  const now = new Date().toISOString();

  const staticPages = [
    { route: "", priority: 1.0, changeFrequency: "weekly" as const },
    { route: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/projects", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/research", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/writing", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}/`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const projectPages = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articlePages = articles.map((a) => ({
    url: `${baseUrl}/writing/${a.slug}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...projectPages, ...articlePages];
}
