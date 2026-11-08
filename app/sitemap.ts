import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mahfuzul-alam.github.io";

  const staticPages = [
    "",
    "/about",
    "/projects",
    "/research",
    "/writing",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectPages = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articlePages = articles.map((a) => ({
    url: `${baseUrl}/writing/${a.slug}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...articlePages];
}
