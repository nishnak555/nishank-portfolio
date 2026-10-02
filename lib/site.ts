// Single source of truth for brand + SEO. Set NEXT_PUBLIC_SITE_URL once the domain is live.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindforgeai.com").replace(/\/$/, "");

export const site = {
  name: "MindForgeAi",
  title: "MindForgeAi - Web Development, Design & AI Agents",
  tagline: "Ideas worth shipping. Agents that do the work.",
  description:
    "Web development, Figma design, deployment, AI implementation and agentic AI. A remote team of four senior engineers building useful products and AI agents for founders and businesses.",
  email: "mindforgea50@gmail.com",
  locale: "en_US",
  themeColor: "#fbfbf8",
  keywords: [
    "web development agency",
    "AI agents development",
    "agentic AI",
    "AI implementation",
    "Figma UI UX design",
    "deployment and DevOps",
    "Next.js development",
    "custom AI agents",
  ],
  sameAs: [] as string[],
};

export const absoluteUrl = (path = "/") => `${SITE_URL}${path === "/" ? "/" : path}`;
