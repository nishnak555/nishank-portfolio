import { motion } from "framer-motion";
import { Calendar, Layers, Users, Code, Activity, Smartphone } from "lucide-react";
import { stats } from "@/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const iconMap: Record<string, React.ElementType> = {
  calendar: Calendar,
  layers: Layers,
  users: Users,
  code: Code,
  activity: Activity,
  smartphone: Smartphone,
};

export function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <StaggerContainer className="stats-grid" stagger={0.07}>
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon] ?? Layers;
            return (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="stat-card-big"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="stat-card-big__icon">
                    <Icon size={22} />
                  </div>
                  <strong className="stat-card-big__value">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1800} />
                  </strong>
                  <span className="stat-card-big__label">{stat.label}</span>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
