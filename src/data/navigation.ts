import type { NavItem, FooterLink } from "@/types";
import { site } from "./site";

export const navigation: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks: Record<string, FooterLink[]> = {
  Studio: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Team", href: "#team" },
  ],
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "AI Implementation", href: "#services" },
    { label: "Agentic AI", href: "#services" },
    { label: "Figma Design", href: "#services" },
  ],
  Contact: [
    { label: "Get in touch", href: "#contact" },
    { label: site.email, href: `mailto:${site.email}` },
    { label: "FAQ", href: "#faq" },
  ],
};
