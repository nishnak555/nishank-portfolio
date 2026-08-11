import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    company: "Freelance / Independent",
    role: "Senior Full Stack Developer",
    period: "Jan 2023 – Present",
    location: "Remote",
    type: "Freelance",
    description:
      "Building scalable web and mobile applications for startups and businesses globally. Delivered 10+ projects across fintech, edtech, and marketplace verticals.",
    achievements: [
      "Built and deployed 10+ production applications used by 50K+ users",
      "Architected a multi-tenant SaaS platform handling 10K concurrent users",
      "Reduced API response times by 60% through query optimization and caching",
      "Published 4 mobile apps on Google Play and App Store",
      "Mentored 3 junior developers on modern React and Node.js patterns",
    ],
    tech: ["React", "Next.js", "Node.js", "FastAPI", "PostgreSQL", "AWS", "React Native", "Flutter"],
    current: true,
  },
  {
    company: "TechVentures Inc.",
    role: "Full Stack Developer",
    period: "Jul 2022 – Dec 2022",
    location: "Remote",
    type: "Contract",
    description:
      "Developed and maintained enterprise web applications for B2B SaaS clients. Led frontend architecture decisions and collaborated with cross-functional product teams.",
    achievements: [
      "Rebuilt the company's core dashboard from Angular to Next.js, cutting load time by 40%",
      "Designed and implemented a real-time analytics module using WebSockets",
      "Integrated Stripe subscription billing, increasing revenue by 25%",
      "Established component library used across 3 products",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis"],
    current: false,
  },
  {
    company: "DevHouse Agency",
    role: "Full Stack Developer",
    period: "Jan 2022 – Jun 2022",
    location: "Hybrid",
    type: "Full-time",
    description:
      "Worked in an agile team delivering client projects ranging from landing pages to complex web portals. Gained deep experience in Django and React ecosystems.",
    achievements: [
      "Delivered 5 client projects on schedule with zero critical bugs at launch",
      "Built a custom CMS using Django Admin with role-based permissions",
      "Optimized PostgreSQL queries, reducing database load by 35%",
      "Implemented automated E2E testing, catching 90% of regressions before release",
    ],
    tech: ["React", "Django", "Python", "PostgreSQL", "Docker", "Tailwind CSS"],
    current: false,
  },
  {
    company: "StartupXYZ",
    role: "Junior Web Developer",
    period: "Jun 2021 – Dec 2021",
    location: "Remote",
    type: "Internship → Full-time",
    description:
      "Started as an intern and converted to full-time within 3 months. Built frontend features for a consumer marketplace app with 5K daily active users.",
    achievements: [
      "Promoted from intern to full-time developer within 3 months",
      "Developed 15+ reusable React components used across the product",
      "Integrated 3 third-party APIs (payment, maps, notifications)",
      "Improved Lighthouse performance score from 62 to 91",
    ],
    tech: ["React", "JavaScript", "Node.js", "MongoDB", "Bootstrap", "Express.js"],
    current: false,
  },
];
