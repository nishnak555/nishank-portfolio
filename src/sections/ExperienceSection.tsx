import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/data";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const lineRef = useRef<SVGLineElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!lineRef.current) return;
      const length = lineRef.current.getTotalLength?.() ?? 1000;
      gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(lineRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 0.5,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="section" style={{ background: "var(--gradient-about)" }}>
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="My professional "
          highlight="journey"
          subtitle="4+ years of building impactful digital products across different domains and company stages."
        />

        <div className="experience-layout mt-12" ref={containerRef}>
          <div className="experience-timeline">
            <svg className="timeline-line-svg" aria-hidden="true">
              <line ref={lineRef} x1="50%" y1="0" x2="50%" y2="100%" stroke="var(--primary)" strokeWidth="2" />
            </svg>
          </div>

          <div className="experience-items">
            {experience.map((item, i) => (
              <Reveal key={item.company} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <motion.div
                  className={`exp-card ${item.current ? "exp-card--current" : ""}`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="exp-card__header">
                    <div>
                      <div className="exp-card__meta">
                        <span className="exp-type-badge">{item.type}</span>
                        {item.current && <span className="current-badge">● Current</span>}
                      </div>
                      <h3 className="exp-card__role mt-1">{item.role}</h3>
                      <p className="exp-card__company">{item.company}</p>
                    </div>
                    <div className="exp-card__period-wrap">
                      <span className="exp-period">{item.period}</span>
                      <span className="exp-location">
                        <MapPin size={12} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="exp-card__desc mt-3">{item.description}</p>

                  <ul className="exp-achievements mt-4">
                    {item.achievements.map((a) => (
                      <li key={a} className="exp-achievement">
                        <span className="achievement-dot" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="exp-tech mt-5">
                    {item.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
