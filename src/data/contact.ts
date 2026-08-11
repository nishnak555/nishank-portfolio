import type { ContactMethod } from "@/types";

export const contactMethods: ContactMethod[] = [
  {
    icon: "calendar",
    label: "Book a Call",
    value: "Schedule a free 30-min consultation",
    href: "https://calendly.com/nikhilkgautam",
    description: "Let's discuss your project over a quick call.",
  },
  {
    icon: "mail",
    label: "Send Email",
    value: "hello@nikhilgautam.dev",
    href: "mailto:hello@nikhilgautam.dev",
    description: "I typically respond within 24 hours.",
  },
  {
    icon: "download",
    label: "Download CV",
    value: "Get my resume",
    href: "/resume.pdf",
    description: "Download my full resume and portfolio.",
  },
];

export const contactFormFields = [
  { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
  { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
  { name: "budget", label: "Project Budget", type: "select", options: ["< $5K", "$5K – $15K", "$15K – $50K", "$50K+", "Let's discuss"] },
  { name: "message", label: "Tell me about your project", type: "textarea", placeholder: "I'm looking to build..." },
];
