import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    title: "Web Development",
    description:
      "Fast, SEO-ready websites and web apps — from marketing sites to full SaaS platforms — built on modern frameworks.",
    icon: "monitor",
    features: ["React, Next.js & TypeScript", "Node.js, NestJS & FastAPI backends", "PostgreSQL, MongoDB & Redis", "REST, GraphQL & real-time APIs"],
    gradient: "linear-gradient(135deg, #4f6bff 0%, #8b5cf6 100%)",
  },
  {
    title: "Deployment & DevOps",
    description:
      "Production-grade releases with CI/CD, monitoring and auto-scaling so your product ships safely and stays up.",
    icon: "cloud",
    features: ["AWS (EC2, S3, RDS, Lambda)", "Docker & containers", "GitHub Actions CI/CD", "Monitoring & zero-downtime deploys"],
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
  },
  {
    title: "Figma UI/UX Design",
    description:
      "Clear, conversion-focused interfaces — from wireframes to polished design systems — handed off ready to build.",
    icon: "pen-tool",
    features: ["Wireframes & prototypes", "Design systems & components", "Responsive web & mobile UI", "Developer-ready handoff"],
    gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
  },
  {
    title: "AI Implementation",
    description:
      "Practical AI in your product and workflows: LLM features, RAG over your own data, and automation that saves real hours.",
    icon: "brain",
    features: ["OpenAI & LLM integration", "RAG with vector databases", "Document & data automation", "AI-powered product features"],
    gradient: "linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)",
  },
  {
    title: "Agentic AI Systems",
    description:
      "Multi-step, tool-using AI systems that plan, decide and act — orchestrated reliably and observable end to end.",
    icon: "workflow",
    features: ["Multi-agent orchestration", "Tool & API calling", "Memory, guardrails & evals", "Human-in-the-loop flows"],
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
  },
  {
    title: "Custom AI Agents",
    description:
      "Purpose-built agents for support, sales, ops and research that plug into your tools and run around the clock.",
    icon: "bot",
    features: ["Support & sales agents", "Slack, email & CRM integrations", "Background workers & queues", "Deployed, monitored & maintained"],
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #4f6bff 100%)",
  },
];
