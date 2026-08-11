import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = false, glass = false, onClick }: CardProps) {
  const base = cn(
    "rounded-2xl border transition-all duration-300",
    glass ? "glass-card" : "surface-card",
    hover && "cursor-pointer",
    className
  );

  if (hover) {
    return (
      <motion.div
        className={base}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={base} onClick={onClick}>
      {children}
    </div>
  );
}
