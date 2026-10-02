export interface Service {
  slug: string;
  eyebrow: string;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  offers: { title: string; text: string }[];
  stack: string[];
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    eyebrow: "Digital products",
    title: "Web development & deployment",
    short: "Fast, SEO-ready websites, web apps and SaaS platforms, shipped to production with CI/CD.",
    metaTitle: "Web Development & Deployment Services",
    metaDescription:
      "Senior engineers building fast, SEO-ready websites, web apps and SaaS platforms with Next.js, React, Node.js and FastAPI, deployed on AWS with CI/CD.",
    lead: "From a marketing site to a multi-tenant SaaS, we build on proven frameworks and ship it to production with monitoring and zero-downtime deploys.",
    offers: [
      { title: "Web apps & SaaS", text: "Next.js, React and TypeScript front ends with Node.js, NestJS or FastAPI back ends." },
      { title: "APIs & integrations", text: "REST, GraphQL and real-time APIs, payments, auth and third-party integrations." },
      { title: "Deployment & DevOps", text: "AWS, Docker and GitHub Actions pipelines with monitoring, backups and auto-scaling." },
      { title: "Performance & SEO", text: "Server rendering, Core Web Vitals, structured data and clean technical SEO built in." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "NestJS", "FastAPI", "PostgreSQL", "AWS", "Docker"],
    deliverables: ["Production-ready codebase", "CI/CD pipeline", "Documentation & handover", "Post-launch support"],
  },
  {
    slug: "design",
    eyebrow: "Product design",
    title: "Figma UI/UX design",
    short: "Clear, conversion-focused interfaces, from wireframes to a developer-ready design system.",
    metaTitle: "Figma UI/UX Design Services",
    metaDescription:
      "Figma UI/UX design for web and mobile products: wireframes, prototypes and design systems handed off ready for engineering.",
    lead: "Good design makes the next step obvious. We design in Figma with the engineers who will build it, so what you approve is what ships.",
    offers: [
      { title: "Wireframes & flows", text: "Map the journey and validate structure before pixels are polished." },
      { title: "UI design", text: "Responsive web and mobile interfaces with accessible, consistent components." },
      { title: "Design systems", text: "Tokens, components and documentation that scale with your product." },
      { title: "Prototypes & handoff", text: "Clickable prototypes and specs that engineering can build from directly." },
    ],
    stack: ["Figma", "Design systems", "Prototyping", "Accessibility", "UX research"],
    deliverables: ["Figma file with components", "Clickable prototype", "Design tokens", "Handoff specs"],
  },
  {
    slug: "ai-agents",
    eyebrow: "AI & automation",
    title: "AI implementation, agentic AI & AI agents",
    short: "LLM features, RAG, multi-step agentic systems and custom AI agents wired into your tools.",
    metaTitle: "AI Implementation, Agentic AI & AI Agents",
    metaDescription:
      "We implement AI in your product and workflows: LLM features, RAG, agentic AI systems and custom AI agents with guardrails, evals and human approval.",
    lead: "AI that does real work: planning, using your tools and finishing tasks, with approval boundaries where people should stay in control.",
    offers: [
      { title: "AI implementation", text: "OpenAI and LLM features, RAG over your own data and automation of repetitive work." },
      { title: "Agentic AI systems", text: "Multi-step, tool-using systems with memory, orchestration and observability." },
      { title: "Custom AI agents", text: "Support, sales, ops and research agents connected to Slack, email, CRMs and your APIs." },
      { title: "Guardrails & evals", text: "Testing, monitoring and human-in-the-loop approval so agents stay reliable." },
    ],
    stack: ["OpenAI", "LangChain", "RAG", "ChromaDB", "FastAPI", "Redis", "Celery"],
    deliverables: ["Working agent in production", "Eval suite", "Monitoring dashboard", "Runbook & handover"],
  },
];

export interface Scene {
  id: string;
  label: string;
  icon: "headset" | "trending" | "file" | "cart" | "code" | "rocket" | "workflow" | "bank";
  tag: string;
  code: string;
  title: string;
  sources: { name: string; note: string; icon: "mail" | "db" | "chat" | "file" | "cart" | "globe" }[];
  centerTitle: string;
  centerMeta: string;
  pass: { glyph: string; label: string; name: string };
  checks: [string, string, string];
  review: { label: string; name: string };
  handoff: { label: string; name: string; icon: "mail" | "db" | "chat" | "file" | "cart" | "globe" };
  steps: { t: string; d: string }[];
  summary: string;
}

export const sceneGroups: { id: "industries" | "roles"; label: string; scenes: Scene[] }[] = [
  {
    id: "industries",
    label: "Industries",
    scenes: [
      {
        id: "saas", label: "SaaS & web", icon: "code", tag: "SaaS and web apps", code: "BUILD-101",
        title: "A product idea. A live release.",
        sources: [{ name: "Figma", note: "Approved design", icon: "file" }, { name: "GitHub", note: "Code & reviews", icon: "db" }, { name: "AWS", note: "Environments", icon: "globe" }],
        centerTitle: "Ship the next release", centerMeta: "Build & test",
        pass: { glyph: "m.", label: "Release", name: "v1.0 candidate" }, checks: ["Tests passing", "Performance budget", "Security review"],
        review: { label: "Human review", name: "Product owner sign-off" }, handoff: { label: "Proposed deploy", name: "Production on AWS", icon: "globe" },
        steps: [{ t: "Import the design.", d: "Figma frames become components and routes." }, { t: "Build and test the release.", d: "Every change is reviewed, tested and measured." }, { t: "Get a human sign-off.", d: "You approve what goes live and when." }, { t: "Deploy with CI/CD.", d: "Zero-downtime release with monitoring from day one." }],
        summary: "A web product that ships on a calm, repeatable pipeline.",
      },
      {
        id: "support", label: "Customer support", icon: "headset", tag: "Customer support", code: "SUPPORT-204",
        title: "A message. A drafted reply. A person in control.",
        sources: [{ name: "Inbox", note: "Incoming mail", icon: "mail" }, { name: "Help docs", note: "Knowledge base", icon: "file" }, { name: "CRM", note: "Customer record", icon: "db" }],
        centerTitle: "Draft the reply", centerMeta: "Connect & understand",
        pass: { glyph: "s.", label: "Ticket", name: "Refund request" }, checks: ["Intent found", "Policy checked", "Tone matched"],
        review: { label: "Human review", name: "Support lead approval" }, handoff: { label: "Proposed handoff", name: "Send reply & log", icon: "mail" },
        steps: [{ t: "Read and classify.", d: "Intent, urgency and customer are identified." }, { t: "Draft from your docs.", d: "RAG finds the answer and cites the source." }, { t: "Ask a person when it matters.", d: "Refunds and edge cases wait for approval." }, { t: "Send and record.", d: "The reply goes out and the CRM is updated." }],
        summary: "Support that answers in minutes without losing the human touch.",
      },
      {
        id: "ecommerce", label: "Commerce", icon: "cart", tag: "Commerce", code: "ORDER-310",
        title: "An order. A check. A confirmation.",
        sources: [{ name: "Storefront", note: "New order", icon: "cart" }, { name: "Payments", note: "Status", icon: "db" }, { name: "Courier", note: "Rates", icon: "globe" }],
        centerTitle: "Verify the order", centerMeta: "Connect & understand",
        pass: { glyph: "o.", label: "Order", name: "#4821 ready" }, checks: ["Payment cleared", "Stock reserved", "Address valid"],
        review: { label: "Human review", name: "Fraud flag review" }, handoff: { label: "Proposed handoff", name: "Fulfilment queue", icon: "file" },
        steps: [{ t: "Receive the order.", d: "Storefront events arrive in one stream." }, { t: "Check everything.", d: "Payment, stock and address are validated." }, { t: "Flag the unusual.", d: "Risky orders go to a person." }, { t: "Hand off to fulfilment.", d: "Clean orders flow to the warehouse queue." }],
        summary: "Orders that move on their own until a person is needed.",
      },
      {
        id: "documents", label: "Document-heavy ops", icon: "file", tag: "Operations", code: "DOCS-118",
        title: "A pile of documents. Clean, checked data.",
        sources: [{ name: "Email", note: "Attachments", icon: "mail" }, { name: "Uploads", note: "PDFs & scans", icon: "file" }, { name: "API", note: "Partner feeds", icon: "globe" }],
        centerTitle: "Extract and validate", centerMeta: "Connect & understand",
        pass: { glyph: "d.", label: "Invoice", name: "INV-2291" }, checks: ["Fields extracted", "Totals match", "Duplicates ruled out"],
        review: { label: "Human review", name: "Flagged items only" }, handoff: { label: "Proposed handoff", name: "Accounting system", icon: "db" },
        steps: [{ t: "Collect documents.", d: "From email, uploads and APIs." }, { t: "Read and validate.", d: "Fields are extracted and checked against rules." }, { t: "Review the exceptions.", d: "People see only what is uncertain, with evidence." }, { t: "File the clean records.", d: "Structured data lands in your system." }],
        summary: "Document work that finishes before anyone opens the inbox.",
      },
    ],
  },
  {
    id: "roles",
    label: "Roles",
    scenes: [
      {
        id: "founder", label: "Founder", icon: "rocket", tag: "For founders", code: "MVP-001",
        title: "From brief to MVP in weeks.",
        sources: [{ name: "Brief", note: "Goals & users", icon: "file" }, { name: "Figma", note: "Prototype", icon: "file" }, { name: "Repo", note: "Codebase", icon: "db" }],
        centerTitle: "Scope the MVP", centerMeta: "Shape",
        pass: { glyph: "f.", label: "MVP", name: "Launch scope" }, checks: ["Core flows", "Budget fit", "Timeline set"],
        review: { label: "Human review", name: "Founder decision" }, handoff: { label: "Proposed handoff", name: "Sprint plan", icon: "file" },
        steps: [{ t: "Write the brief.", d: "Goals, users and constraints on one page." }, { t: "Shape the scope.", d: "Cut to what proves the idea." }, { t: "You decide.", d: "Every trade-off is yours to approve." }, { t: "Build in sprints.", d: "Weekly demos on a live environment." }],
        summary: "A founder-friendly path from idea to a working product.",
      },
      {
        id: "ops", label: "Operations lead", icon: "workflow", tag: "For operations", code: "OPS-220",
        title: "Fewer handoffs. More finished work.",
        sources: [{ name: "Slack", note: "Requests", icon: "chat" }, { name: "Sheets", note: "Trackers", icon: "file" }, { name: "ERP", note: "Records", icon: "db" }],
        centerTitle: "Route the request", centerMeta: "Connect & understand",
        pass: { glyph: "p.", label: "Request", name: "Purchase approval" }, checks: ["Owner found", "Limit checked", "Context attached"],
        review: { label: "Human review", name: "Budget owner" }, handoff: { label: "Proposed handoff", name: "Update the ERP", icon: "db" },
        steps: [{ t: "Catch the request.", d: "From chat, forms or email." }, { t: "Route it.", d: "The right owner gets the right context." }, { t: "Approve in one tap.", d: "Humans keep authority over spend." }, { t: "Update the record.", d: "Systems stay in sync automatically." }],
        summary: "Operations that run on rails you can see and control.",
      },
      {
        id: "sales", label: "Sales lead", icon: "trending", tag: "For sales", code: "LEAD-330",
        title: "A lead. A prepared conversation.",
        sources: [{ name: "Website", note: "New enquiry", icon: "globe" }, { name: "LinkedIn", note: "Company data", icon: "globe" }, { name: "CRM", note: "History", icon: "db" }],
        centerTitle: "Research the lead", centerMeta: "Connect & understand",
        pass: { glyph: "l.", label: "Lead", name: "Fit score 86" }, checks: ["Company enriched", "Fit scored", "Message drafted"],
        review: { label: "Human review", name: "Sales approval" }, handoff: { label: "Proposed handoff", name: "Book the call", icon: "mail" },
        steps: [{ t: "Capture the lead.", d: "Every enquiry is logged instantly." }, { t: "Research and score.", d: "Context and fit are ready before you open it." }, { t: "Approve the outreach.", d: "You send only what you stand behind." }, { t: "Book and sync.", d: "Calendar and CRM update together." }],
        summary: "Sales time spent on conversations, not research.",
      },
    ],
  },
];

export const processSteps = [
  { phase: "01", title: "Brief", text: "A short call and a written brief: goals, users, constraints, timeline and what success looks like." },
  { phase: "02", title: "Understand", text: "We study your product, data and tools, then confirm scope and risks before building." },
  { phase: "03", title: "Shape", text: "Wireframes, architecture and a clear plan, reviewed with you in Figma and in writing." },
  { phase: "04", title: "Build", text: "Weekly demos, tested releases and clean code shipped to a live environment from week one." },
  { phase: "05", title: "Evolve", text: "Monitoring, support and iteration after launch as real usage teaches us what to improve." },
];

export interface Project {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  detail: string;
  tech: string[];
  accent: string;
}

// TODO: confirm which of these the studio can show publicly, and replace as needed.
export const projects: Project[] = [
  {
    slug: "tradielab-ai-tutor",
    title: "TradieLab",
    kind: "AI tutor platform",
    summary: "RAG-based AI tutor with exam practice and flashcards for mobile.",
    detail:
      "Built the backend with FastAPI, an AI tutor using RAG with LangChain, OpenAI embeddings and ChromaDB, Flutter app screens, Celery and Redis workers, and Firebase push notifications.",
    tech: ["FastAPI", "Flutter", "LangChain", "OpenAI", "ChromaDB", "Celery", "Redis", "Firebase"],
    accent: "#1957ff",
  },
  {
    slug: "mumbrand-job-platform",
    title: "Mumbrand",
    kind: "Job discovery platform",
    summary: "Real-time job matching, background processing and mobile subscriptions.",
    detail:
      "Scalable NestJS REST APIs, BullMQ and Redis workers for asynchronous job processing, nearest-job matching, Firebase notifications and RevenueCat subscriptions in the Flutter app.",
    tech: ["Flutter", "NestJS", "BullMQ", "Redis", "Firebase", "RevenueCat", "Supabase"],
    accent: "#7c3aed",
  },
  {
    slug: "document-management-system",
    title: "Document Management System",
    kind: "Web platform",
    summary: "Dynamic templates and hierarchical approval workflows with role-based access.",
    detail:
      "Database design for efficient storage and retrieval, REST APIs, a responsive React UI with search, filtering and report downloads, dynamic templates and a multi-level approval system.",
    tech: ["React", "Node.js", "Express", "MySQL", "Material UI"],
    accent: "#0f766e",
  },
  {
    slug: "kanban-inventory-app",
    title: "Kanban Inventory",
    kind: "Mobile + web",
    summary: "Barcode-driven inventory with duplicate-scan detection and Bluetooth label printing.",
    detail:
      "React Native app with barcode and laser scanning, Bluetooth label printing, REST APIs and role-based authentication for admins and users.",
    tech: ["React Native", "React", "Node.js", "Express", "MySQL"],
    accent: "#db2777",
  },
  {
    slug: "dotpvp-web3-game",
    title: "DotPvP",
    kind: "Web3 multiplayer game",
    summary: "Wallet-authenticated multiplayer game with real-time leaderboards and rewards.",
    detail:
      "Next.js game with MetaMask and Phantom wallet login via Reown Kit, WebSocket and Redis leaderboards, social integrations and a referral and reward system.",
    tech: ["Next.js", "Node.js", "MongoDB", "WebSocket", "Redis", "Zustand"],
    accent: "#4f46e5",
  },
  {
    slug: "trade-pending-app",
    title: "Trade Pending",
    kind: "Mobile app",
    summary: "Vehicle listings, video uploads, in-app chat and shareable vehicle history.",
    detail:
      "Cross-platform React Native and Expo app with listings, video uploads, chat, a vehicle history sharing feature and secure authentication.",
    tech: ["React Native", "Expo", "Firebase"],
    accent: "#059669",
  },
];

export interface TeamMember { name: string; role: string; bio: string; focus: string[] }

// TODO: replace with each person's real bio and focus areas.
export const team: TeamMember[] = [
  { name: "Nishank", role: "Founder", bio: "Leads strategy and delivery. Full stack and AI engineer across React, FastAPI, Flutter and OpenAI.", focus: ["Full stack", "AI systems", "Architecture"] },
  { name: "Nikhil", role: "Co-founder", bio: "Senior engineer with 5+ years shipping scalable products from first commit to production.", focus: ["Engineering", "Backend", "Delivery"] },
  { name: "Karan", role: "Co-founder", bio: "Senior engineer with 5+ years turning complex requirements into reliable software.", focus: ["Engineering", "Web", "Cloud"] },
  { name: "Shivam", role: "Co-founder", bio: "Senior engineer with 5+ years across product, interfaces and AI-powered features.", focus: ["Engineering", "Frontend", "AI"] },
];

export const faqs = [
  { q: "What services does MindForgeAi offer?", a: "Web development, deployment and DevOps, Figma UI/UX design, AI implementation, agentic AI systems and custom AI agents." },
  { q: "Do you work with clients worldwide?", a: "Yes. We are a fully remote team and work across time zones with regular async updates and scheduled calls." },
  { q: "How experienced is the team?", a: "Our four co-founders each have 5+ years of professional engineering experience, so you work directly with senior people." },
  { q: "What is agentic AI and how can it help my business?", a: "Agentic AI systems plan, use tools and complete multi-step tasks, for example triaging support, researching leads or processing documents, with guardrails and human approval where it matters." },
  { q: "How do projects start and how long do they take?", a: "We start with a short call and a written brief, then send a scoped proposal with timeline and pricing. Most MVPs take 4 to 10 weeks depending on scope." },
  { q: "Do you support projects after launch?", a: "Yes. We offer maintenance, monitoring and ongoing feature development after launch." },
];
