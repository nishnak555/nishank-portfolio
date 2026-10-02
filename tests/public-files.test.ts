import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";

// Static files in /public shadow the generated app/robots.ts and app/sitemap.ts routes.
describe("public/ does not shadow generated SEO routes", () => {
  it.each(["robots.txt", "sitemap.xml"])("public/%s must not exist", (f) => {
    expect(existsSync(path.resolve(__dirname, "../public", f))).toBe(false);
  });
});
