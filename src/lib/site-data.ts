import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Braces,
  ChartSpline,
  DatabaseZap,
  FileSearch,
  Gauge,
  GitBranch,
  Layers3,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://onyxaistudio.com";

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  outcomes: string[];
  deliverables: string[];
  questions: { question: string; answer: string }[];
  relatedCases: string[];
};

export const services: Service[] = [
  {
    slug: "ai-integration",
    title: "AI Integration",
    eyebrow: "Interfaces that understand intent",
    summary:
      "Add useful AI to existing operations with semantic search, assistants, and workflow-aware interfaces.",
    description:
      "AI integration means connecting language models, embeddings, and business data to a clear product workflow. Onyx AI Studio focuses on practical AI features that reduce search time, make complex data easier to use, and fit the tools a team already uses.",
    icon: Bot,
    outcomes: [
      "Semantic search for messy product, document, or service catalogs",
      "Assistant interfaces with scoped actions and visible guardrails",
      "LLM features that are measured against real workflow outcomes",
    ],
    deliverables: [
      "Use-case map and risk notes",
      "Prototype assistant or search flow",
      "Data connection plan",
      "Production-ready UI integration",
      "Prompt and evaluation notes",
    ],
    questions: [
      {
        question: "What is AI integration for a small business?",
        answer:
          "AI integration connects language models to business data, interfaces, and repeatable workflows so teams can search, summarize, route, or act faster without replacing their existing systems.",
      },
      {
        question: "When should a business avoid AI integration?",
        answer:
          "Avoid AI integration when the workflow is not understood, the data is unreliable, or a simple rule-based automation would solve the problem with lower cost and less risk.",
      },
    ],
    relatedCases: ["vapeos", "starry"],
  },
  {
    slug: "automation-workflows",
    title: "Automation Workflows",
    eyebrow: "Less manual handoff",
    summary:
      "Design automations that move data, trigger next steps, and keep humans in control where judgment matters.",
    description:
      "Automation workflow work starts by mapping the messy handoffs that slow teams down. The result is a practical system of triggers, checks, notifications, and dashboards that reduce repeated manual work.",
    icon: Workflow,
    outcomes: [
      "Lead, inventory, content, and reporting workflows that run reliably",
      "Human review points where errors would be expensive",
      "Clear logs and fallback paths for operational trust",
    ],
    deliverables: [
      "Workflow audit",
      "Automation map",
      "Integration implementation",
      "Error and handoff rules",
      "Operator documentation",
    ],
    questions: [
      {
        question: "What makes an automation workflow reliable?",
        answer:
          "A reliable automation workflow has clear triggers, strict data assumptions, visible logs, retry or fallback behavior, and human review points for decisions that should not be fully automatic.",
      },
      {
        question: "How are automation opportunities prioritized?",
        answer:
          "Automation opportunities are prioritized by repetition, business value, error cost, data quality, and how quickly the workflow can be verified in production.",
      },
    ],
    relatedCases: ["regional-service-site", "vapeos"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    eyebrow: "Fast, durable frontends",
    summary:
      "Build modern websites and application surfaces that are fast, accessible, maintainable, and easy to extend.",
    description:
      "Web development work covers landing pages, dashboards, content systems, and product interfaces. The focus is clean architecture, strong visual hierarchy, responsive behavior, and production validation.",
    icon: Braces,
    outcomes: [
      "Next.js sites with clear routing, metadata, and deployment readiness",
      "Responsive interfaces that work across phone and desktop",
      "Component systems that avoid one-off styling drift",
    ],
    deliverables: [
      "Route and component map",
      "Design-system tokens",
      "Responsive implementation",
      "Metadata and sitemap",
      "Lint and build verification",
    ],
    questions: [
      {
        question: "What should a business website prove first?",
        answer:
          "A business website should quickly prove who it serves, what problem it solves, why the team can be trusted, and what the visitor should do next.",
      },
      {
        question: "Why use Next.js for a service business site?",
        answer:
          "Next.js supports fast static pages, structured metadata, clean routing, optimized assets, and a path to richer product features when a site grows beyond marketing content.",
      },
    ],
    relatedCases: ["starry", "unicorn-island"],
  },
  {
    slug: "seo-content-systems",
    title: "SEO Content Systems",
    eyebrow: "Architecture before articles",
    summary:
      "Plan service pages, case studies, and insight content so search engines and AI answer systems can understand the business.",
    description:
      "SEO content systems combine technical SEO, service-page architecture, internal linking, schema, and extractable answer blocks. This gives both search engines and AI answer systems clear source material.",
    icon: SearchCheck,
    outcomes: [
      "Service and case study silos that support topical authority",
      "Structured data, sitemap, robots, and llms.txt foundations",
      "Answer-ready passages for AI Overviews, ChatGPT, and Perplexity",
    ],
    deliverables: [
      "Site architecture",
      "Keyword and question map",
      "Page briefs",
      "Schema plan",
      "Technical SEO checklist",
    ],
    questions: [
      {
        question: "What is an SEO content system?",
        answer:
          "An SEO content system is a planned set of pages, links, metadata, schema, and reusable content patterns that help search engines understand what a business does and where it has expertise.",
      },
      {
        question: "How does SEO differ from GEO?",
        answer:
          "SEO focuses on ranking and crawlability. GEO focuses on making content structured, authoritative, and extractable enough for AI answer systems to cite it.",
      },
    ],
    relatedCases: ["regional-service-site", "vapeos"],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  image: string;
  services: string[];
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  result: string;
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "vapeos",
    title: "VapeOS",
    label: "AI retail inventory search",
    summary:
      "A semantic inventory experience for a retail catalog with thousands of real products and inconsistent naming.",
    image: "/case-study-vapeos.svg",
    services: ["ai-integration", "automation-workflows", "seo-content-systems"],
    metrics: [
      { label: "Indexed products", value: "1,700+" },
      { label: "Search mode", value: "Semantic" },
      { label: "Interface", value: "AI-led" },
    ],
    challenge:
      "Retail teams lose time when product names, categories, and shorthand do not match the words customers or staff use in real searches.",
    solution:
      "The system uses semantic search and an AI-controlled dashboard pattern so operators can speak or type intent and get relevant inventory results without exact keyword matching.",
    result:
      "A working AI inventory surface that demonstrates how a messy catalog can become a faster, more natural operating interface.",
    stack: ["Next.js", "Supabase", "Vector search", "Gemini API"],
  },
  {
    slug: "starry",
    title: "Starry",
    label: "Nighttime companion application",
    summary:
      "A low-stimulation interface direction for ambient storytelling, voice-led onboarding, and calm nighttime use.",
    image: "/case-study-starry.svg",
    services: ["ai-integration", "web-development"],
    metrics: [
      { label: "UX mode", value: "Voice-led" },
      { label: "Visual pace", value: "Low stimulus" },
      { label: "Audience", value: "Family" },
    ],
    challenge:
      "A nighttime app needs to feel useful without creating a bright, busy, screen-forward experience that works against the setting.",
    solution:
      "The product direction centers on short voice flows, calm visuals, and focused prompts that reduce taps while keeping the experience easy to understand.",
    result:
      "A differentiated app surface that shows Onyx AI Studio can design AI experiences around context, not just add chat boxes.",
    stack: ["React", "Voice UX", "Web Audio", "Product design"],
  },
  {
    slug: "unicorn-island",
    title: "Unicorn Island",
    label: "Interactive learning and game systems",
    summary:
      "A browser-based interactive game suite showing responsive controls, visual feedback, and playful product logic.",
    image: "/case-study-unicorn-island.svg",
    services: ["web-development", "automation-workflows"],
    metrics: [
      { label: "Surface", value: "Browser" },
      { label: "Controls", value: "Mobile-ready" },
      { label: "Mode", value: "Interactive" },
    ],
    challenge:
      "Interactive learning products need fast feedback, reliable controls, and a polished feel without requiring app-store distribution.",
    solution:
      "The build uses web-native interaction patterns, responsive layouts, and reusable game logic to keep play accessible across devices.",
    result:
      "A portfolio proof point for product-grade frontend work, animation, and interactive logic in the browser.",
    stack: ["React", "Game logic", "Responsive UI", "Animation"],
  },
  {
    slug: "regional-service-site",
    title: "Regional Service Site",
    label: "SEO content architecture",
    summary:
      "A service-business website direction built around content silos, service pages, and search-friendly structure.",
    image: "/case-study-regional-service.svg",
    services: ["seo-content-systems", "web-development"],
    metrics: [
      { label: "Structure", value: "Content silo" },
      { label: "Search focus", value: "Local intent" },
      { label: "Format", value: "Service pages" },
    ],
    challenge:
      "Regional service companies often need to prove expertise across many services and locations without creating thin or duplicated pages.",
    solution:
      "The site architecture organizes core services, supporting guides, and local intent pages into a clear content system with internal links.",
    result:
      "A practical SEO foundation that can scale into more service pages, proof content, and lead-generation workflows.",
    stack: ["SEO architecture", "Next.js", "Content strategy", "Schema"],
  },
];

export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  sections: { heading: string; body: string }[];
};

export const insights: Insight[] = [
  {
    slug: "ai-inventory-semantic-search",
    title: "How Semantic Search Turns Inventory Into An Operating Interface",
    description:
      "A practical explanation of why retail catalogs need meaning-based search and how AI inventory systems should be structured.",
    date: "2026-05-04",
    readingTime: "5 min read",
    tags: ["AI search", "Inventory", "Automation"],
    sections: [
      {
        heading: "What is semantic inventory search?",
        body: "Semantic inventory search matches a user's intent to product data by meaning instead of exact keywords. For retailers with inconsistent names, abbreviations, and category labels, this makes search more useful because the system can connect natural language requests to relevant products even when the words do not match exactly.",
      },
      {
        heading: "Why keyword search breaks down",
        body: "Keyword search works when product names are clean and users know the exact terms. It breaks down when catalogs include vendor-specific naming, shorthand, flavor variants, abbreviations, or imported data. The result is slower lookup, repeated searches, and avoidable manual work.",
      },
      {
        heading: "What makes the interface useful",
        body: "A useful AI inventory interface shows its work. It should return relevant products, expose confidence or match reasons when needed, keep filters visible, and let operators recover quickly from weak matches. The goal is speed and trust, not a mysterious chat window.",
      },
    ],
  },
];

export const proofPoints = [
  { value: "1,700+", label: "real product records shaped into semantic search" },
  { value: "4", label: "core service silos for AI, automation, web, and SEO" },
  { value: "0", label: "public personal details required for the brand site" },
];

export const processSteps = [
  {
    title: "Map the messy workflow",
    body: "Define the current tools, data, handoffs, and bottlenecks before proposing AI or automation.",
    icon: GitBranch,
  },
  {
    title: "Prototype the operating surface",
    body: "Build the smallest interface that proves the workflow can be faster, clearer, or easier to search.",
    icon: Layers3,
  },
  {
    title: "Ship with checks",
    body: "Add validation, metadata, logs, fallbacks, and clear documentation so the system can be trusted.",
    icon: ShieldCheck,
  },
];

export const capabilities = [
  { title: "Semantic search", icon: FileSearch },
  { title: "Workflow routing", icon: Workflow },
  { title: "Dashboards", icon: ChartSpline },
  { title: "Data cleanup", icon: DatabaseZap },
  { title: "Performance", icon: Gauge },
  { title: "Answer-ready SEO", icon: MessageSquareText },
  { title: "AI interface design", icon: Sparkles },
];

export const homeFaqs = [
  {
    question: "What does Onyx AI Studio build?",
    answer:
      "Onyx AI Studio builds AI integrations, automation workflows, modern web applications, and SEO content systems for businesses that need practical operating improvements.",
  },
  {
    question: "Is this a template website or a custom build?",
    answer:
      "This site is a custom Next.js build with a documented design system, reusable route data, structured metadata, and SEO/GEO foundations.",
  },
  {
    question: "How does a fit review work?",
    answer:
      "A fit review starts with the workflow, data, audience, and business outcome. If AI is not the right tool, the recommendation should say that clearly.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

export function absoluteUrl(path: string) {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
