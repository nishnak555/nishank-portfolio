import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { services, projects } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

// Verifies the real prerendered HTML Google will crawl. Run `npm run build` first; skipped otherwise.
const dir = path.resolve(__dirname, "../.next/server/app");
const built = existsSync(path.join(dir, "index.html"));
const read = (p: string) => readFileSync(path.join(dir, p), "utf8");

const pages = [
  { url: "/", file: "index.html" },
  ...services.map((s) => ({ url: `/${s.slug}`, file: `${s.slug}.html` })),
  ...projects.map((p) => ({ url: `/work/${p.slug}`, file: `work/${p.slug}.html` })),
];

describe.skipIf(!built)("prerendered HTML (.next build output)", () => {
  it.each(pages)("$url has the full <head> in static HTML", ({ url, file }) => {
    const html = read(file);
    expect(html).toMatch(/<html lang="en"/);
    expect(html).toMatch(/<title>[^<]{10,}<\/title>/);
    expect(html).toMatch(/<meta name="description" content="[^"]{50,}"/);
    expect(html).toContain(`<link rel="canonical" href="${SITE_URL}${url === "/" ? "" : url}"`);
    expect(html).toContain('<meta property="og:image" content="');
    expect(html).toContain('<meta name="twitter:card" content="summary_large_image"');
    expect(html).toMatch(/<meta name="robots" content="index, follow/);
    expect(html).toContain("application/ld+json");
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1);
  });

  it("does not leak noindex on indexable pages", () => {
    for (const p of pages) expect(read(p.file)).not.toMatch(/noindex/);
  });

  it("404 page is noindex", () => {
    expect(read("_not-found.html")).toMatch(/noindex/);
  });
});
