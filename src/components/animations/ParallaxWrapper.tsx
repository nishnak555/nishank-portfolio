import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down";
}

export function ParallaxWrapper({
  children,
  speed = 0.3,
  className,
  direction = "up",
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const factor = direction === "up" ? -speed * 100 : speed * 100;
  const y = useTransform(scrollYProgress, [0, 1], [`${factor}px`, `${-factor}px`]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
