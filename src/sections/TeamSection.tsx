import { motion } from "framer-motion";
import { team } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export function TeamSection() {
  return (
    <section id="team" className="section" style={{ background: "var(--gradient-about)" }}>
      <div className="container">
        <SectionHeader
          eyebrow="The Team"
          title="Four senior engineers, "
          highlight="one studio"
          subtitle="Every project is handled directly by the co-founders — each with 5+ years of hands-on experience shipping real products."
          align="center"
        />

        <StaggerContainer className="team-grid mt-12" stagger={0.08}>
          {team.map((m) => (
            <StaggerItem key={m.name}>
              <motion.article className="team-card" whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                <div className="team-avatar" style={{ background: `linear-gradient(135deg, ${m.color}, var(--secondary))` }} aria-hidden="true">
                  {m.initials}
                </div>
                <h3 className="team-name">{m.name}</h3>
                <p className="team-role" style={{ color: m.color }}>{m.role}</p>
                <p className="team-bio">{m.bio}</p>
                <ul className="team-tags">
                  {m.focus.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
