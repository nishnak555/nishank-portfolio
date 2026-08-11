import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    color: "#61dafb",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "Angular", level: 80 },
      { name: "TypeScript", level: 93 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 88 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    label: "Backend",
    color: "#68a063",
    skills: [
      { name: "Node.js", level: 93 },
      { name: "NestJS", level: 88 },
      { name: "Python", level: 90 },
      { name: "FastAPI", level: 88 },
      { name: "Django", level: 85 },
      { name: "GraphQL", level: 78 },
      { name: "REST APIs", level: 96 },
    ],
  },
  {
    label: "Mobile",
    color: "#64d8cb",
    skills: [
      { name: "React Native", level: 90 },
      { name: "Flutter", level: 82 },
      { name: "Expo", level: 88 },
      { name: "iOS (Swift)", level: 65 },
      { name: "Android", level: 68 },
    ],
  },
  {
    label: "Database",
    color: "#f59e0b",
    skills: [
      { name: "PostgreSQL", level: 92 },
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Prisma ORM", level: 88 },
      { name: "SQLAlchemy", level: 82 },
    ],
  },
  {
    label: "DevOps & Cloud",
    color: "#ff9900",
    skills: [
      { name: "AWS", level: 82 },
      { name: "Docker", level: 88 },
      { name: "GitHub Actions", level: 85 },
      { name: "Nginx", level: 78 },
      { name: "Linux", level: 80 },
      { name: "Vercel", level: 90 },
    ],
  },
  {
    label: "Tools & Design",
    color: "#8b5cf6",
    skills: [
      { name: "Git", level: 95 },
      { name: "Figma", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 92 },
      { name: "Jira", level: 85 },
      { name: "Notion", level: 88 },
    ],
  },
];
