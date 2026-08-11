import { motion } from "framer-motion";
import { Monitor, Smartphone, Zap, Layers, Cloud, MessageSquare, ArrowRight } from "lucide-react";
import { services } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const iconMap: Record<string, React.ElementType> = {
  monitor: Monitor,
  smartphone: Smartphone,
  zap: Zap,
  layers: Layers,
  cloud: Cloud,
  "message-square": MessageSquare,
};

export function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="What I Do"
          title="Services I "
          highlight="offer"
          subtitle="From concept to deployment — I provide end-to-end development services tailored to your needs."
          align="center"
        />

        <StaggerContainer className="services-grid mt-12" stagger={0.07}>
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Monitor;
            return (
              <StaggerItem key={service.title}>
                <motion.div
                  className="service-card"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <div
                    className="service-card__icon-wrap"
                    style={{ background: service.gradient }}
                  >
                    <Icon size={22} color="white" />
                  </div>
                  <h3 className="service-card__title mt-5">{service.title}</h3>
                  <p className="service-card__desc mt-2">{service.description}</p>
                  <ul className="service-card__features mt-4">
                    {service.features.map((f) => (
                      <li key={f} className="service-feature">
                        <span className="feature-dot" style={{ background: service.gradient }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="service-card__cta mt-6">
                    <a href="#contact" className="service-link">
                      Get started <ArrowRight size={14} />
                    </a>
                  </div>
                  <div className="service-card__glow" style={{ background: service.gradient }} />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
