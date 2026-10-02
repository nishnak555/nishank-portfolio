import { describe, it, expect, beforeAll } from "vitest";
import { allPages, count, type PageCase } from "./helpers";

let pages: PageCase[] = [];
beforeAll(async () => { pages = await allPages(); });

const text = (html: string) => html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

describe("on-page SEO and accessibility", () => {
  it("every page has exactly one <h1> with content", () => {
    for (const p of pages) {
      expect(count(p.html, /<h1[\s>]/g), p.path).toBe(1);
      expect(text(p.html.match(/<h1[^>]*>(.*?)<\/h1>/s)![1]).length, p.path).toBeGreaterThan(5);
    }
  });
  it("heading levels never skip (h1 -> h2 -> h3)", () => {
    for (const p of pages) {
      const levels = [...p.html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
      for (let i = 1; i < levels.length; i++) expect(levels[i] - levels[i - 1], `${p.path} h${levels[i - 1]}->h${levels[i]}`).toBeLessThanOrEqual(1);
    }
  });
  it("home page has content crawlers can read without JavaScript", () => {
    const home = pages[0];
    expect(text(home.html).length).toBeGreaterThan(1500);
    for (const kw of ["web development", "AI agents", "Figma", "agentic AI"]) expect(text(home.html).toLowerCase()).toContain(kw.toLowerCase());
  });
  it("home has all landmark sections with accessible names", () => {
    const home = pages[0].html;
    for (const id of ["services", "work", "process", "team", "faq", "contact"]) expect(home, id).toContain(`id="${id}"`);
    expect(count(home, /<section[^>]*aria-labelledby=/g)).toBeGreaterThanOrEqual(7);
  });
  it("every <img> has alt text", () => {
    for (const p of pages) for (const img of p.html.match(/<img[^>]*>/g) ?? []) expect(img, p.path).toMatch(/\salt="/);
  });
  it("no empty links and no javascript: hrefs", () => {
    for (const p of pages) {
      for (const a of p.html.match(/<a\s[^>]*>/g) ?? []) {
        expect(a, p.path).toMatch(/href="[^"#]*[^"]*"/);
        expect(a, p.path).not.toMatch(/href="(#|javascript:)"/);
      }
    }
  });
  it("internal links point to routes that exist", () => {
    const valid = new Set(["/", "/web-development", "/design", "/ai-agents"]);
    for (const p of pages) for (const m of p.html.matchAll(/href="(\/[^"]*)"/g)) {
      const path = m[1].split("#")[0] || "/";
      expect(valid.has(path) || path.startsWith("/work/"), `${p.path} -> ${m[1]}`).toBe(true);
    }
  });
  it("sub-pages carry breadcrumbs", () => {
    for (const p of pages.slice(1)) expect(p.html, p.path).toContain('aria-label="Breadcrumb"');
  });
  it("mailto contact link is present", () => {
    expect(pages[0].html).toContain("mailto:mindforgea50@gmail.com");
  });
});
