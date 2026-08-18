import type { NavItem, SocialLink, FooterLink } from "@/types";

export const navigation: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/nishnak555", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nishank-pathak-81b5771a7/", icon: "linkedin" },
];

export const footerLinks: Record<string, FooterLink[]> = {
  Work: [
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Process", href: "#process" },
  ],
  About: [
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
  ],
  Contact: [
    { label: "Get in Touch", href: "#contact" },
    { label: "Send Email", href: "mailto:pathaknishank007@gmail.com" },
    { label: "Download CV", href: "/resume.pdf" },
  ],
};
