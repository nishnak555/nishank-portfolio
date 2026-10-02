import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Compass, Layout, Code2, ShieldCheck, Rocket, Headphones } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  compass: Compass,
  layout: Layout,
  "code-2": Code2,
  "shield-check": ShieldCheck,
  rocket: Rocket,
  headphones: Headphones,
};

export function ProcessSection() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "center 70%",
            end: "center 30%",
            scrub: 1,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="section" style={{ background: "var(--gradient-process)" }}>
      <div className="container">
        <SectionHeader
          eyebrow="How We Work"
          title="From idea to "
          highlight="impact"
          subtitle="A structured approach to delivering exceptional results, every time."
          align="center"
        />

        <div className="process-track mt-14">
          <div className="process-line-wrap">
            <div ref={lineRef} className="process-line" />
          </div>

          <StaggerContainer className="process-steps" stagger={0.1}>
            {processSteps.map((step) => {
              const Icon = iconMap[step.icon] ?? Rocket;
              return (
                <StaggerItem key={step.id}>
                  <motion.div
                    className="process-step"
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div
                      className="process-step__icon"
                      style={{
                        background: `${step.color}18`,
                        borderColor: `${step.color}30`,
                        color: step.color,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <div className="process-step__connector" />
                    <span className="process-step__num" style={{ color: step.color }}>
                      {step.phase}
                    </span>
                    <h4 className="process-step__title mt-2">{step.title}</h4>
                    <p className="process-step__desc mt-1">{step.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
