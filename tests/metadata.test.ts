import { describe, it, expect } from "vitest";
import { metadata as home } from "@/app/page";
import { metadata as layout } from "@/app/layout";
import { generateMetadata as serviceMeta } from "@/app/[service]/page";
import { generateMetadata as workMeta } from "@/app/work/[slug]/page";
import { services, projects } from "@/lib/content";
import { SITE_URL, absoluteUrl, site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const titleOf = (m: Metadata) => (typeof m.title === "string" ? m.title : (m.title as { absolute?: string; default?: string })?.absolute ?? (m.title as { default?: string })?.default ?? "");

async function allMeta(): Promise<{ path: string; meta: Metadata }[]> {
  const out = [{ path: "/", meta: home }];
  for (const s of services) out.push({ path: `/${s.slug}`, meta: await serviceMeta({ params: Promise.resolve({ service: s.slug }) }) });
  for (const p of projects) out.push({ path: `/work/${p.slug}`, meta: await workMeta({ params: Promise.resolve({ slug: p.slug }) }) });
  return out;
}

describe("root layout metadata", () => {
  it("sets metadataBase, robots and a title template", () => {
    expect(String(layout.metadataBase)).toBe(`${SITE_URL}/`);
    expect(layout.robots).toMatchObject({ index: true, follow: true });
    expect((layout.title as { template: string }).template).toContain("%s");
  });
  it("has a description of reasonable length and keywords", () => {
    expect(site.description.length).toBeGreaterThanOrEqual(70);
    expect(site.description.length).toBeLessThanOrEqual(200);
    expect(layout.keywords?.length).toBeGreaterThan(3);
  });
});

describe("per-page metadata", () => {
  it("every page has a canonical URL equal to its absolute path", async () => {
    for (const { path, meta } of await allMeta()) expect(meta.alternates?.canonical, path).toBe(absoluteUrl(path));
  });
  it("every page has a unique title <= 70 chars", async () => {
    const titles = new Set<string>();
    for (const { path, meta } of await allMeta()) {
      const t = titleOf(meta);
      expect(t.length, path).toBeGreaterThan(10);
      expect(t.length, path).toBeLessThanOrEqual(70);
      expect(titles.has(t), `duplicate title on ${path}`).toBe(false);
      titles.add(t);
    }
  });
  it("every page has a unique description of 50-200 chars", async () => {
    const seen = new Set<string>();
    for (const { path, meta } of await allMeta()) {
      const d = meta.description ?? "";
      expect(d.length, path).toBeGreaterThanOrEqual(50);
      expect(d.length, path).toBeLessThanOrEqual(200);
      expect(seen.has(d), `duplicate description on ${path}`).toBe(false);
      seen.add(d);
    }
  });
  it("Open Graph and Twitter cards are complete and match the canonical URL", async () => {
    for (const { path, meta } of await allMeta()) {
      expect(meta.openGraph, path).toMatchObject({ type: "website", siteName: site.name, url: absoluteUrl(path) });
      expect(meta.openGraph?.images, path).toBeTruthy();
      expect(meta.twitter, path).toMatchObject({ card: "summary_large_image" });
      expect(meta.openGraph?.description).toBe(meta.description);
    }
  });
  it("unknown slugs produce no metadata", async () => {
    expect(await serviceMeta({ params: Promise.resolve({ service: "nope" }) })).toEqual({});
    expect(await workMeta({ params: Promise.resolve({ slug: "nope" }) })).toEqual({});
  });
  it("buildMetadata appends the brand to non-absolute titles", () => {
    const m = buildMetadata({ title: "Hello", description: "d", path: "/x" });
    expect(m.openGraph?.title).toBe(`Hello | ${site.name}`);
  });
});
