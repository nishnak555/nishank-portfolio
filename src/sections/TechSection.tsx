import { techGroups } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/animations/Reveal";

export function TechSection() {
  return (
    <section id="stack" className="section" style={{ background: "var(--gradient-skills)" }}>
      <div className="container">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Tools we use to "
          highlight="build"
          subtitle="Proven, modern technologies — chosen for your product, not our habits."
        />
        <div className="tech-grid mt-10">
          {techGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.06}>
              <div className="tech-card">
                <h3 className="tech-card__label" style={{ color: g.color }}>{g.label}</h3>
                <ul className="tech-chips">
                  {g.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
