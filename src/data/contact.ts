import type { ContactMethod } from "@/types";
import { site } from "./site";

export const contactMethods: ContactMethod[] = [
  {
    icon: "mail",
    label: "Email us",
    value: site.email,
    href: `mailto:${site.email}`,
    description: "We reply within 24 hours.",
  },
];

export const contactFormFields = [
  { name: "name", label: "Your Name", type: "text", placeholder: "Jane Doe" },
  { name: "email", label: "Email Address", type: "email", placeholder: "jane@company.com" },
  { name: "service", label: "What do you need?", type: "select", options: ["Web Development", "Deployment & DevOps", "Figma UI/UX Design", "AI Implementation", "Agentic AI / AI Agents", "Something else"] },
  { name: "message", label: "Tell us about your project", type: "textarea", placeholder: "We're looking to build..." },
];
