import type { BrandItem, HeroStat } from "@/types";

export const heroHeadline = "I build scalable digital products for global clients.";

export const heroSubtitle =
  "Senior Full Stack Engineer with 4+ years of experience building high-performance web applications, APIs, and mobile apps that scale.";

export const trustedBrands: BrandItem[] = [
  { name: "AxelATS" },
  { name: "GrowBolt" },
  { name: "Ogera" },
  { name: "Chaplin" },
  { name: "Sawayas" },
  { name: "HomeServe" },
];

export const dashboardStats: HeroStat[] = [
  { value: "24", label: "Total Projects", delta: "+12%" },
  { value: "100K+", label: "Total Users", delta: "+18%" },
  { value: "99.9%", label: "System Uptime", delta: "+0.2%" },
  { value: "320ms", label: "Avg. Response", delta: "+15%" },
];

export const recentDeployments = [
  { name: "API Gateway", time: "2m ago", status: "success" },
  { name: "Web Dashboard", time: "18m ago", status: "success" },
  { name: "Mobile App", time: "1h ago", status: "success" },
  { name: "Analytics Service", time: "2h ago", status: "success" },
];

export const heroTechStack = [
  { label: "React", color: "#61dafb" },
  { label: "Next.js", color: "#ffffff" },
  { label: "TS", color: "#3178c6" },
  { label: "Node", color: "#68a063" },
  { label: "Python", color: "#f7c035" },
  { label: "AWS", color: "#ff9900" },
];
