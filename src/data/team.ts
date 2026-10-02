export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  color: string;
  bio: string;
  focus: string[];
}

// TODO: replace bios/focus with each person's real details and add photos if desired.
export const team: TeamMember[] = [
  {
    name: "Nishank",
    role: "Founder",
    initials: "N",
    color: "#4f6bff",
    bio: "Leads strategy and delivery. Full stack and AI engineer building production systems with React, FastAPI, Flutter and OpenAI.",
    focus: ["Full Stack", "AI Systems", "Architecture"],
  },
  {
    name: "Nikhil",
    role: "Co-founder",
    initials: "N",
    color: "#8b5cf6",
    bio: "Senior engineer with 5+ years shipping scalable products from first commit to production.",
    focus: ["Engineering", "Backend", "Delivery"],
  },
  {
    name: "Karan",
    role: "Co-founder",
    initials: "K",
    color: "#0ea5e9",
    bio: "Senior engineer with 5+ years of experience turning complex requirements into reliable software.",
    focus: ["Engineering", "Web", "Cloud"],
  },
  {
    name: "Shivam",
    role: "Co-founder",
    initials: "S",
    color: "#10b981",
    bio: "Senior engineer with 5+ years of experience across product, interfaces and AI-powered features.",
    focus: ["Engineering", "Frontend", "AI"],
  },
];
