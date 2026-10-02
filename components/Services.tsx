import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="wrap">
        <p className="eyebrow mono">What we do</p>
        <h2 id="services-title" className="h2">What could we <em>build together?</em></h2>
        <div className="grid-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <article className="card service-card">
                <p className="mono card-eyebrow">{s.eyebrow}</p>
                <h3>{s.title}</h3>
                <p className="muted">{s.short}</p>
                <ul className="chips">{s.stack.slice(0, 5).map((t) => <li key={t}>{t}</li>)}</ul>
                <Link href={`/${s.slug}`} className="link-arrow" aria-label={`Learn more about ${s.title}`}>Learn more <ArrowUpRight size={15} /></Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
