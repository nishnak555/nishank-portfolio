import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    company: "Appomate",
    role: "Software Engineer",
    period: "Dec 2025 – Present",
    location: "Melbourne, Australia",
    type: "Remote",
    description:
      "Working remotely with an Australian engineering team, developing AI-powered learning systems using OpenAI APIs, FastAPI, and Flutter.",
    achievements: [
      "Developing scalable backend APIs using FastAPI and Python",
      "Building responsive web interfaces using React.js",
      "Developing cross-platform mobile applications using Flutter",
      "Implementing AI-powered tutor features using OpenAI APIs",
      "Building systems for AI exam generation and flashcards",
      "Collaborating with distributed engineering teams using GitHub and Jira",
    ],
    tech: ["FastAPI", "Python", "React", "Flutter", "OpenAI API", "Redis", "Firebase"],
    current: true,
  },
  {
    company: "Sourcery IT",
    role: "Software Developer",
    period: "Jan 2024 – Dec 2025",
    location: "Work from office",
    type: "Full-time",
    description:
      "Developed scalable web and mobile applications, working closely with backend teams on API integration and system improvements.",
    achievements: [
      "Developed scalable web applications using React.js, Next.js, and TypeScript",
      "Built mobile applications using React Native for Android and iOS",
      "Integrated APIs and improved application performance",
      "Implemented role-based access control and approval workflows",
      "Collaborated with backend teams for API integration and system improvements",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "React Native", "Node.js"],
    current: false,
  },
];
