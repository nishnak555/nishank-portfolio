import type { Metadata } from "next";
import { SITE_URL, absoluteUrl, site } from "./site";
import { faqs, services, type Service, type Project } from "./content";

interface PageSeo {
  title: string;
  description: string;
  path: string;
  /** If true the title is used as-is (no "| MindForgeAi" suffix). */
  absoluteTitle?: boolean;
}

export const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} - ${site.tagline}` };

export function buildMetadata({ title, description, path, absoluteTitle }: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [OG_IMAGE.url] },
  };
}

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: site.name,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg`, width: 256, height: 256 },
  image: `${SITE_URL}/opengraph-image`,
  email: site.email,
  description: site.description,
  areaServed: "Worldwide",
  knowsAbout: ["Web development", "Figma UI/UX design", "Deployment and DevOps", "AI implementation", "Agentic AI", "AI agents"],
  contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: site.email, url: `${SITE_URL}/#contact`, availableLanguage: ["English"], areaServed: "Worldwide" }],
  ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: site.name,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

export function webPageSchema(path: string, name: string, description: string) {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en",
  };
}

export function faqSchema() {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function serviceSchema(s: Service) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(`/${s.slug}`)}#service`,
    name: s.title,
    description: s.metaDescription,
    url: absoluteUrl(`/${s.slug}`),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
    serviceType: s.eyebrow,
  };
}

export function projectSchema(p: Project) {
  return {
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(`/work/${p.slug}`)}#work`,
    name: `${p.title} - ${p.kind}`,
    description: p.summary,
    url: absoluteUrl(`/work/${p.slug}`),
    creator: { "@id": `${SITE_URL}/#organization` },
    keywords: p.tech.join(", "),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: absoluteUrl(t.path) })),
  };
}

export const homeServicesSchema = {
  "@type": "ItemList",
  name: "MindForgeAi services",
  itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(`/${s.slug}`), name: s.title })),
};

export const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });
