import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "muted";
  className?: string;
}

const variants = {
  primary: "badge badge--primary",
  secondary: "badge badge--secondary",
  success: "badge badge--success",
  warning: "badge badge--warning",
  muted: "badge badge--muted",
};

export function Badge({ children, variant = "primary", className }: BadgeProps) {
  return (
    <span className={cn(variants[variant], className)}>
      {children}
    </span>
  );
}
