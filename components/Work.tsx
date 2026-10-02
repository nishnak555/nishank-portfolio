import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="wrap">
        <p className="eyebrow mono">Selected projects</p>
        <h2 id="work-title" className="h2">The work behind <em>the product.</em></h2>
        <div className="grid-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06}>
              <Link href={`/work/${p.slug}`} className="card work-card" style={{ ["--accent" as string]: p.accent }}>
                <span className="work-thumb" aria-hidden="true"><span>{p.title.slice(0, 1)}</span></span>
                <p className="mono card-eyebrow">{p.kind}</p>
                <h3>{p.title} <ArrowUpRight size={16} aria-hidden="true" /></h3>
                <p className="muted">{p.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
