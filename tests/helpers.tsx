import { renderToStaticMarkup } from "react-dom/server";
import type { ReactElement } from "react";
import Home from "@/app/page";
import ServicePage from "@/app/[service]/page";
import WorkPage from "@/app/work/[slug]/page";
import { services, projects } from "@/lib/content";

export const render = (el: ReactElement) => renderToStaticMarkup(el);

export interface PageCase { path: string; html: string }

export async function allPages(): Promise<PageCase[]> {
  const pages: PageCase[] = [{ path: "/", html: render(<Home />) }];
  for (const s of services) pages.push({ path: `/${s.slug}`, html: render(await ServicePage({ params: Promise.resolve({ service: s.slug }) })) });
  for (const p of projects) pages.push({ path: `/work/${p.slug}`, html: render(await WorkPage({ params: Promise.resolve({ slug: p.slug }) })) });
  return pages;
}

export function jsonLd(html: string): Record<string, unknown>[] {
  return [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => JSON.parse(m[1].replace(/\\u003c/g, "<")));
}

export const count = (html: string, re: RegExp) => (html.match(re) ?? []).length;
