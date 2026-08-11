import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end web applications built with modern frameworks. From pixel-perfect UIs to scalable APIs and databases.",
    icon: "monitor",
    features: [
      "React / Next.js / Angular",
      "Node.js / Python backends",
      "PostgreSQL / MongoDB",
      "REST & GraphQL APIs",
    ],
    gradient: "linear-gradient(135deg, #4f6bff 0%, #8b5cf6 100%)",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps published on Google Play & App Store, built with React Native and Flutter.",
    icon: "smartphone",
    features: [
      "React Native & Expo",
      "Flutter & Dart",
      "Push notifications",
      "App Store deployment",
    ],
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #4f6bff 100%)",
  },
  {
    title: "API Design & Architecture",
    description:
      "Scalable, secure, and well-documented APIs. Microservices, real-time systems, and third-party integrations.",
    icon: "zap",
    features: [
      "FastAPI / NestJS / Express",
      "Microservices architecture",
      "Real-time with WebSockets",
      "OpenAPI / Swagger docs",
    ],
    gradient: "linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)",
  },
  {
    title: "SaaS Product Development",
    description:
      "Complete SaaS platforms from MVP to scale — authentication, billing, multi-tenancy, and analytics baked in.",
    icon: "layers",
    features: [
      "Multi-tenant architecture",
      "Stripe / payment integration",
      "User auth & RBAC",
      "Analytics dashboards",
    ],
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Production-ready deployments on AWS with CI/CD pipelines, monitoring, and auto-scaling infrastructure.",
    icon: "cloud",
    features: [
      "AWS (EC2, S3, RDS, Lambda)",
      "Docker & container orchestration",
      "CI/CD with GitHub Actions",
      "Performance monitoring",
    ],
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
  },
  {
    title: "Technical Consulting",
    description:
      "Strategic guidance on architecture, tech stack selection, code reviews, and scaling your engineering team.",
    icon: "message-square",
    features: [
      "Architecture review",
      "Tech stack consulting",
      "Code review & audits",
      "Team mentorship",
    ],
    gradient: "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)",
  },
];
