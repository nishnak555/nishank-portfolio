import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/lib/content";
import { breadcrumbSchema, buildMetadata, graph, serviceSchema, webPageSchema } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ service: s.slug }));

type Props = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const s = services.find((x) => x.slug === service);
  if (!s) return {};
  return buildMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/${s.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const s = services.find((x) => x.slug === service);
  if (!s) notFound();
  const path = `/${s.slug}`;
  return (
    <article className="page">
      <JsonLd data={graph(webPageSchema(path, s.metaTitle, s.metaDescription), serviceSchema(s), breadcrumbSchema([{ name: "Home", path: "/" }, { name: s.title, path }]))} />
      <div className="wrap">
        <nav aria-label="Breadcrumb" className="crumbs mono"><Link href="/">Home</Link> / <span>{s.title}</span></nav>
        <p className="eyebrow mono">{s.eyebrow}</p>
        <h1 className="h1">{s.title}</h1>
        <p className="lead">{s.lead}</p>

        <h2 className="h3">What we do</h2>
        <div className="grid-2">
          {s.offers.map((o) => (
            <div key={o.title} className="card"><h3>{o.title}</h3><p className="muted">{o.text}</p></div>
          ))}
        </div>

        <h2 className="h3">What you get</h2>
        <ul className="checks">{s.deliverables.map((d) => <li key={d}><Check size={16} aria-hidden="true" /> {d}</li>)}</ul>

        <h2 className="h3">Technology</h2>
        <ul className="chips">{s.stack.map((t) => <li key={t}>{t}</li>)}</ul>

        <p className="page-cta"><Link href="/#contact" className="btn btn-dark">Start a project</Link></p>
      </div>
    </article>
  );
}
