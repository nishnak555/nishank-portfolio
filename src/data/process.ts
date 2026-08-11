import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    phase: "01",
    title: "Discover",
    description: "Understanding your idea, goals, and target audience through deep-dive conversations and research.",
    icon: "compass",
    color: "#4f6bff",
  },
  {
    id: 2,
    phase: "02",
    title: "Plan & Architect",
    description: "Designing scalable architecture, database schema, and system design tailored to your needs.",
    icon: "layout",
    color: "#8b5cf6",
  },
  {
    id: 3,
    phase: "03",
    title: "Develop",
    description: "Building responsive, performant, and secure applications with clean, maintainable code.",
    icon: "code-2",
    color: "#0ea5e9",
  },
  {
    id: 4,
    phase: "04",
    title: "Test & Optimize",
    description: "Rigorous testing across devices and browsers, optimizing for peak performance and accessibility.",
    icon: "shield-check",
    color: "#10b981",
  },
  {
    id: 5,
    phase: "05",
    title: "Deploy",
    description: "Deploying to production with CI/CD pipelines, ensuring smooth rollouts and zero downtime.",
    icon: "rocket",
    color: "#f59e0b",
  },
  {
    id: 6,
    phase: "06",
    title: "Support",
    description: "Ongoing support, monitoring, and feature enhancements to keep your product growing.",
    icon: "headphones",
    color: "#ec4899",
  },
];
