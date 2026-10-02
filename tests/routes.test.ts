import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";
import { SITE_URL } from "@/lib/site";
import { services, projects } from "@/lib/content";

describe("sitemap.xml", () => {
  const entries = sitemap();
  const urls = entries.map((e) => e.url);
  it("lists home, every service and every project exactly once", () => {
    expect(urls).toContain(`${SITE_URL}/`);
    for (const s of services) expect(urls).toContain(`${SITE_URL}/${s.slug}`);
    for (const p of projects) expect(urls).toContain(`${SITE_URL}/work/${p.slug}`);
    expect(new Set(urls).size).toBe(urls.length);
  });
  it("uses absolute https URLs with priorities in range", () => {
    for (const e of entries) {
      expect(e.url).toMatch(/^https:\/\//);
      expect(e.priority ?? 0).toBeGreaterThan(0);
      expect(e.priority ?? 0).toBeLessThanOrEqual(1);
    }
  });
  it("home has the highest priority", () => {
    expect(entries[0].priority).toBe(1);
  });
});

describe("robots.txt", () => {
  const r = robots();
  it("allows crawling and points to the sitemap", () => {
    expect(r.rules).toEqual([{ userAgent: "*", allow: "/" }]);
    expect(r.sitemap).toBe(`${SITE_URL}/sitemap.xml`);
  });
});
