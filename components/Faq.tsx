import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="wrap narrow">
        <p className="eyebrow mono">FAQ</p>
        <h2 id="faq-title" className="h2">Questions, <em>answered.</em></h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}><summary>{f.q}</summary><p className="muted">{f.a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}
