import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const active = skillCategories[activeCategory];

  return (
    <section id="skills" className="section" style={{ background: "var(--gradient-skills)" }}>
      <div className="container">
        <SectionHeader
          eyebrow="Skills & Expertise"
          title="Technologies I work "
          highlight="with"
          subtitle="A curated set of tools and technologies I use to build production-grade applications."
        />

        <Reveal delay={0.15}>
          <div className="skill-tabs mt-10">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.label}
                type="button"
                className={`skill-tab ${activeCategory === i ? "skill-tab--active" : ""}`}
                onClick={() => setActiveCategory(i)}
                style={activeCategory === i ? { borderColor: cat.color, color: cat.color } : {}}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          key={activeCategory}
          className="skill-panel mt-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <StaggerContainer className="skill-grid" stagger={0.04}>
            {active.skills.map((skill) => (
              <StaggerItem key={skill.name}>
                <motion.div
                  className="skill-item"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="skill-item__header">
                    <span className="skill-item__name">{skill.name}</span>
                    <span className="skill-item__pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar__fill"
                      style={{ background: active.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    />
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </motion.div>

        <Reveal delay={0.3} className="skill-pills-section mt-12">
          <p className="eyebrow mb-5">All Technologies</p>
          <div className="skill-all-pills">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => (
                <motion.span
                  key={`${cat.label}-${skill.name}`}
                  className="skill-pill"
                  style={{ "--pill-color": cat.color } as React.CSSProperties}
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ duration: 0.15 }}
                >
                  {skill.name}
                </motion.span>
              ))
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
