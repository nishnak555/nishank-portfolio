import { faqs } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FaqSection() {
  return (
    <section id="faq" className="section">
      <div className="container faq-wrap">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions, "
          highlight="answered"
          subtitle="Quick answers about working with MindForgeAi."
          align="center"
        />
        <div className="faq-list mt-10">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
