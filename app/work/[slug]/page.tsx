import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { projects } from "@/lib/content";
import { breadcrumbSchema, buildMetadata, graph, projectSchema, webPageSchema } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return buildMetadata({ title: `${p.title}: ${p.kind}`, description: p.summary + " " + p.detail.slice(0, 80), path: `/work/${p.slug}` });
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const path = `/work/${p.slug}`;
  return (
    <article className="page">
      <JsonLd data={graph(webPageSchema(path, p.title, p.summary), projectSchema(p), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Work", path: "/#work" }, { name: p.title, path }]))} />
      <div className="wrap narrow">
        <nav aria-label="Breadcrumb" className="crumbs mono"><Link href="/">Home</Link> / <Link href="/#work">Work</Link> / <span>{p.title}</span></nav>
        <p className="eyebrow mono">{p.kind}</p>
        <h1 className="h1">{p.title}</h1>
        <p className="lead">{p.summary}</p>
        <p>{p.detail}</p>
        <h2 className="h3">Technology</h2>
        <ul className="chips">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
        <p className="page-cta"><Link href="/#contact" className="btn btn-dark">Build something similar</Link></p>
      </div>
    </article>
  );
}
