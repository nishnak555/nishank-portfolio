import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Briefcase, Users, Activity } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutBio, aboutStats, codeSnippet } from "@/data";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  star: Star,
  briefcase: Briefcase,
  users: Users,
  activity: Activity,
};

const codeTokens = [
  { text: "const ", color: "#4f6bff" },
  { text: "developer", color: "#8b5cf6" },
  { text: " = {\n", color: "#cbd5e1" },
  { text: "  name", color: "#0ea5e9" },
  { text: ": ", color: "#cbd5e1" },
  { text: "'Nishank Pathak'", color: "#10b981" },
  { text: ",\n  role", color: "#cbd5e1" },
  { text: ": ", color: "#cbd5e1" },
  { text: "'Full Stack Developer'", color: "#10b981" },
  { text: ",\n  passion", color: "#cbd5e1" },
  { text: ": ", color: "#cbd5e1" },
  { text: "'Building scalable products'", color: "#10b981" },
  { text: ",\n  focus", color: "#cbd5e1" },
  { text: ": [\n    ", color: "#cbd5e1" },
  { text: "'AI Integrations'", color: "#10b981" },
  { text: ",\n    ", color: "#cbd5e1" },
  { text: "'Scalability'", color: "#10b981" },
  { text: ",\n    ", color: "#cbd5e1" },
  { text: "'Cross-platform Mobile'\n  ]", color: "#10b981" },
  { text: ",\n};", color: "#cbd5e1" },
];

export function AboutSection() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section" style={{ background: "var(--gradient-about)" }}>
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <SectionHeader
              eyebrow="About Me"
              title="Building products, solving problems, creating "
              highlight="impact."
            />

            <div className="mt-6 space-y-4">
              {aboutBio.map((para, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="lead">{para}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="about-stats-grid mt-10">
                {aboutStats.map((stat, i) => {
                  const Icon = iconMap[stat.icon] ?? Star;
                  const numericValue = parseInt(stat.value.replace(/\D/g, ""));
                  const suffix = stat.value.replace(/\d/g, "");
                  return (
                    <motion.div
                      key={stat.label}
                      className="about-stat"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Icon size={20} className="about-stat__icon" />
                      <strong className="about-stat__value">
                        <AnimatedCounter value={numericValue} suffix={suffix} />
                      </strong>
                      <span className="about-stat__label">{stat.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <a href="#projects" className="btn-primary mt-8 inline-flex items-center gap-2">
                More About Me <ArrowRight size={15} />
              </a>
            </Reveal>
          </div>

          <Reveal className="about-code-panel" delay={0.15} direction="right">
            <div className="code-window">
              <div className="code-window__bar">
                <div className="window-dots">
                  <span className="dot dot--red" />
                  <span className="dot dot--yellow" />
                  <span className="dot dot--green" />
                </div>
                <div className="code-tabs">
                  {["TypeScript", "Python", "SQL"].map((tab, i) => (
                    <span key={tab} className={`code-tab ${i === 0 ? "code-tab--active" : ""}`}>
                      {tab}
                    </span>
                  ))}
                </div>
                <span className="code-copy-btn">Copy</span>
              </div>

              <div className="code-body">
                <div className="code-lines">
                  {codeSnippet.split("\n").map((_, i) => (
                    <span key={i} className="line-num">{i + 1}</span>
                  ))}
                </div>
                <pre className="code-content">
                  {codeTokens.map((token, i) => (
                    <span key={i} style={{ color: token.color }}>
                      {token.text}
                    </span>
                  ))}
                </pre>
              </div>

              <div className="code-window__footer">
                <span className="code-badge">TypeScript</span>
                <span className="code-badge">UTF-8</span>
                <span className="code-badge code-badge--green">● Available for hire</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
