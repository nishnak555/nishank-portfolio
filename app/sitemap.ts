import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { projects, services } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...services.map((s) => ({ url: absoluteUrl(`/${s.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...projects.map((p) => ({ url: absoluteUrl(`/work/${p.slug}`), lastModified: now, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
