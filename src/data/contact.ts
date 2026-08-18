import type { ContactMethod } from "@/types";

export const contactMethods: ContactMethod[] = [
  {
    icon: "mail",
    label: "Send Email",
    value: "pathaknishank007@gmail.com",
    href: "mailto:pathaknishank007@gmail.com",
    description: "I typically respond within 24 hours.",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/nishank-pathak-81b5771a7/",
    description: "Let's connect professionally.",
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
