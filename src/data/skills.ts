import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    color: "#61dafb",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "Flutter", level: 85 },
      { name: "React Native", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Material UI", level: 85 },
      { name: "HTML/CSS", level: 92 },
    ],
  },
  {
    label: "Backend",
    color: "#68a063",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "NestJS", level: 82 },
      { name: "FastAPI", level: 88 },
    ],
  },
  {
    label: "Languages",
    color: "#3178c6",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 85 },
    ],
  },
  {
    label: "Database",
    color: "#f59e0b",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 78 },
      { name: "Redis", level: 82 },
      { name: "Firebase", level: 85 },
    ],
  },
  {
    label: "AI & Modern Tech",
    color: "#10b981",
    skills: [
      { name: "OpenAI API", level: 88 },
      { name: "RAG Architecture", level: 85 },
      { name: "LangChain", level: 80 },
      { name: "Vector DBs (ChromaDB)", level: 78 },
      { name: "AI Tutor Systems", level: 85 },
    ],
  },
  {
    label: "DevOps & Tools",
    color: "#ff9900",
    skills: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Git & GitHub", level: 92 },
      { name: "Jira", level: 85 },
      { name: "CI/CD", level: 75 },
    ],
  },
  {
    label: "Background Processing",
    color: "#8b5cf6",
    skills: [
      { name: "BullMQ", level: 85 },
      { name: "Redis Workers", level: 85 },
      { name: "Celery", level: 82 },
    ],
  },
];
