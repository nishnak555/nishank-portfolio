import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-gradient">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`section-header ${align === "center" ? "text-center" : ""} ${className ?? ""}`}>
      {eyebrow && (
        <motion.span
          className="eyebrow"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        className="mt-3"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        transition={{ delay: 0.05 }}
      >
        {renderTitle()}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="lead mt-4 max-w-2xl"
          style={{ margin: align === "center" ? "1rem auto 0" : undefined }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          transition={{ delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
