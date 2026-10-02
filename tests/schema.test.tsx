import { describe, it, expect, beforeAll } from "vitest";
import { allPages, jsonLd, type PageCase } from "./helpers";
import { render } from "./helpers";
import RootLayout from "@/app/layout";
import { faqs, services } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

let pages: PageCase[] = [];
beforeAll(async () => { pages = await allPages(); });

const nodes = (html: string) => jsonLd(html).flatMap((d) => (d["@graph"] as Record<string, unknown>[]) ?? [d]);

describe("JSON-LD structured data", () => {
  it("every page emits valid JSON-LD with a schema.org context", () => {
    for (const p of pages) {
      const blocks = jsonLd(p.html);
      expect(blocks.length, p.path).toBeGreaterThan(0);
      for (const b of blocks) expect(b["@context"], p.path).toBe("https://schema.org");
    }
  });
  it("the root layout emits Organization and WebSite entities", () => {
    const html = render(RootLayout({ children: null }));
    const types = nodes(html).map((n) => n["@type"]);
    expect(types).toContain("Organization");
    expect(types).toContain("WebSite");
    const org = nodes(html).find((n) => n["@type"] === "Organization") as Record<string, unknown>;
    expect(org["@id"]).toBe(`${SITE_URL}/#organization`);
    expect(org.email).toMatch(/@/);
  });
  it("home FAQPage matches the visible FAQ exactly", () => {
    const home = pages.find((p) => p.path === "/")!;
    const faq = nodes(home.html).find((n) => n["@type"] === "FAQPage") as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] };
    expect(faq.mainEntity).toHaveLength(faqs.length);
    for (const f of faqs) {
      expect(home.html).toContain(f.q);
      expect(faq.mainEntity.some((q) => q.name === f.q && q.acceptedAnswer.text === f.a)).toBe(true);
    }
  });
  it("home ItemList enumerates every service with absolute URLs", () => {
    const home = pages.find((p) => p.path === "/")!;
    const list = nodes(home.html).find((n) => n["@type"] === "ItemList") as { itemListElement: { url: string; position: number }[] };
    expect(list.itemListElement.map((i) => i.url)).toEqual(services.map((s) => `${SITE_URL}/${s.slug}`));
    expect(list.itemListElement.map((i) => i.position)).toEqual([1, 2, 3]);
  });
  it("service pages emit Service + BreadcrumbList linked to the organization", () => {
    for (const s of services) {
      const page = pages.find((p) => p.path === `/${s.slug}`)!;
      const n = nodes(page.html);
      const svc = n.find((x) => x["@type"] === "Service") as Record<string, unknown>;
      expect(svc.provider).toEqual({ "@id": `${SITE_URL}/#organization` });
      const crumbs = n.find((x) => x["@type"] === "BreadcrumbList") as { itemListElement: { position: number; item: string }[] };
      expect(crumbs.itemListElement.at(-1)?.item).toBe(`${SITE_URL}/${s.slug}`);
      expect(crumbs.itemListElement.map((c) => c.position)).toEqual(crumbs.itemListElement.map((_, i) => i + 1));
    }
  });
  it("JSON-LD output cannot break out of its script tag", () => {
    for (const p of pages) for (const m of p.html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) expect(m[1]).not.toContain("</");
  });
});
