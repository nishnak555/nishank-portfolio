import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Workflows } from "@/components/Workflows";
import { Work } from "@/components/Work";
import { DesignCompare } from "@/components/DesignCompare";
import { Process } from "@/components/Process";
import { Team } from "@/components/Team";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { buildMetadata, faqSchema, graph, homeServicesSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: site.title, description: site.description, path: "/", absoluteTitle: true });

export default function Home() {
  return (
    <>
      <JsonLd data={graph(webPageSchema("/", site.title, site.description), homeServicesSchema, faqSchema())} />
      <Hero />
      <Services />
      <Workflows />
      <Work />
      <DesignCompare />
      <Process />
      <Team />
      <Faq />
      <Contact />
    </>
  );
}
