import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { cn } from "@/utils/cn";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function StaggerContainer({ children, className, delay = 0.1, stagger = 0.08 }: StaggerContainerProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        ...staggerContainer,
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={cn(className)} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
