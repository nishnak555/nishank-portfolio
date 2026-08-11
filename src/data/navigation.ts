import type { NavItem, SocialLink, FooterLink } from "@/types";

export const navigation: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/nikhilkgautam", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nikhilkgautam", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com/nikhilkgautam", icon: "twitter" },
  { label: "Instagram", href: "https://instagram.com/nikhilkgautam", icon: "instagram" },
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
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
  ],
  Contact: [
    { label: "Get in Touch", href: "#contact" },
    { label: "Book a Call", href: "https://calendly.com/nikhilkgautam" },
    { label: "Send Email", href: "mailto:hello@nikhilgautam.dev" },
    { label: "Download CV", href: "/resume.pdf" },
  ],
};
