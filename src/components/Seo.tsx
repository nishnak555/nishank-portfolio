import { useEffect } from "react";
import { site, faqs, services, SITE_URL } from "@/data";

// Injects JSON-LD structured data (Organization, ProfessionalService, FAQPage).
export function Seo() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${SITE_URL}/#org`,
          name: site.name,
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.svg`,
          email: site.email,
          description: site.description,
        },
        {
          "@type": "ProfessionalService",
          name: site.name,
          url: SITE_URL,
          email: site.email,
          areaServed: "Worldwide",
          description: site.description,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services",
            itemListElement: services.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.title, description: s.description },
            })),
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify(data);
    document.head.appendChild(el);
    return () => el.remove();
  }, []);
  return null;
}
