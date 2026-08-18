import type { ProjectItem } from "@/types";

export const projects: ProjectItem[] = [
  {
    id: "tradielab",
    title: "TradieLab – AI Tutor Platform",
    description: "AI Tutor platform with RAG-based learning, exam practice, and flashcards built for mobile.",
    longDescription:
      "Built the entire backend using FastAPI, including database design and API development. Developed an AI Tutor using RAG architecture with LangChain, OpenAI, embeddings, and ChromaDB. Built Flutter mobile app screens (Signup, Signin, Exams, Flashcards), background workers using Celery and Redis, and Firebase push notifications.",
    category: ["mobile", "api"],
    tech: ["FastAPI", "Flutter", "LangChain", "OpenAI", "ChromaDB", "Celery", "Redis", "Firebase"],
    gradient: "linear-gradient(135deg, #1957ff 0%, #0d1939 100%)",
    featured: true,
    status: "live",
  },
  {
    id: "mumbrand",
    title: "Mumbrand Platform",
    description: "Job discovery platform with real-time matching, background job processing, and mobile subscriptions.",
    longDescription:
      "Developed scalable REST APIs using NestJS, background workers with BullMQ and Redis for asynchronous job processing, job indexing and nearest job matching logic, Firebase push/email notifications, and in-app subscriptions using RevenueCat in the Flutter app.",
    category: ["mobile", "api"],
    tech: ["Flutter", "NestJS", "Firebase", "BullMQ", "Redis", "RevenueCat", "Supabase"],
    gradient: "linear-gradient(135deg, #0f172a 0%, #2d65ff 100%)",
    featured: true,
    status: "live",
  },
  {
    id: "dms",
    title: "Document Management System",
    description: "Web-based document management platform with dynamic templates and hierarchical approval workflows.",
    longDescription:
      "Designed the database structure for efficient document storage and retrieval, built REST APIs, a responsive React.js UI with filtering, search and report downloads, dynamic document templates, and a hierarchical approval system with role-based access control.",
    category: ["web"],
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Material UI"],
    gradient: "linear-gradient(135deg, #0f172a 0%, #0b0b0b 100%)",
    featured: true,
    status: "live",
  },
  {
    id: "kanban-inventory",
    title: "Kanban Inventory App",
    description: "Kanban-based inventory management app for Lumax Automobiles with barcode scanning and Bluetooth printing.",
    longDescription:
      "Developed a Kanban-based inventory management mobile application using React Native CLI, with barcode/laser scanning, duplicate scan detection, Bluetooth label printing, REST APIs, and role-based authentication (Admin & User).",
    category: ["mobile", "web"],
    tech: ["React Native", "React.js", "Node.js", "Express.js", "MySQL"],
    gradient: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)",
    featured: false,
    status: "live",
  },
  {
    id: "dotpvp",
    title: "DotPvP – Web3 Multiplayer Game",
    description: "Agar.io-inspired Web3 multiplayer game with blockchain wallet auth and real-time leaderboards.",
    longDescription:
      "Developed a Web3 multiplayer game using Next.js with blockchain wallet authentication (MetaMask, Phantom) via Reown Kit, real-time leaderboard and game stats using WebSockets and Redis, Twitter/Telegram integrations, and a referral and reward system.",
    category: ["web"],
    tech: ["Next.js", "Node.js", "MongoDB", "WebSocket", "Redis", "Zustand", "ReownKit"],
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #4f46e5 100%)",
    featured: false,
    status: "live",
  },
  {
    id: "trade-pending",
    title: "Trade Pending Mobile Application",
    description: "Cross-platform app for vehicle listings, video uploads, in-app chat, and vehicle history sharing.",
    longDescription:
      "Developed a cross-platform mobile application using React Native and Expo with product listing, video uploads, in-app chat, a 'Share Your Autobiography' vehicle history feature, REST API integration, and secure user authentication.",
    category: ["mobile"],
    tech: ["React Native", "Expo", "Firebase"],
    gradient: "linear-gradient(135deg, #064e3b 0%, #10b981 100%)",
    featured: false,
    status: "live",
  },
];
