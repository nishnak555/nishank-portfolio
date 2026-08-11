export type Theme = "light" | "dark" | "system";

export interface NavItem {
  label: string;
  href: string;
}

export interface BrandItem {
  name: string;
  logo?: string;
}

export interface HeroStat {
  value: string;
  label: string;
  delta?: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface SkillCategory {
  label: string;
  color: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  tech: string[];
  current?: boolean;
}

export type ProjectCategory = "all" | "web" | "mobile" | "api" | "saas";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory[];
  tech: string[];
  metrics?: string[];
  image?: string;
  gradient: string;
  liveUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  featured?: boolean;
  status: "live" | "development" | "published";
}

export interface ProcessStep {
  id: number;
  phase: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  avatar?: string;
  initials: string;
  color: string;
}

export interface ContactMethod {
  icon: string;
  label: string;
  value: string;
  href: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface AboutStat {
  value: string;
  label: string;
  icon: string;
}
