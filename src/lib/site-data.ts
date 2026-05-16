import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Braces,
  CalendarClock,
  ChartSpline,
  DatabaseZap,
  FileSearch,
  Gauge,
  GitBranch,
  Headphones,
  Layers3,
  MessageSquareText,
  PhoneCall,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://onyxaistudio.digital";

export const navItems = [
  { href: "/services/ai-integration", label: "AI Business System" },
  { href: "/services/reception-web-assistant", label: "Reception + Web Assistant" },
  { href: "/services/internal-business-assistant", label: "Internal Assistant" },
  { href: "/case-studies", label: "Portfolio" },
  { href: "/insights", label: "Insights" },
  { href: "/pricing", label: "Pricing" },
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
    title: "AI Business Operations Integration",
    eyebrow: "Flagship system",
    summary:
      "A premium AI reception, website assistance, lead capture, scheduling, data, and internal knowledge system built around real business operations.",
    description:
      "AI Business Operations Integration installs AI into the way a company already handles calls, website visitors, leads, scheduling, documents, and staff questions. Retell powers the voice and conversation layer, while Supabase supports the business data and knowledge layer. Onyx AI Studio designs the strategy, implementation, guardrails, workflows, and ongoing management.",
    icon: Bot,
    outcomes: [
      "24/7 call and website handling without making AI the whole business",
      "Structured leads, call summaries, website summaries, and follow-up status",
      "A company knowledge layer that public and internal assistants can use with different permissions",
    ],
    deliverables: [
      "AI operations review and workflow map",
      "Retell phone receptionist and website assistant plan",
      "Supabase lead, customer, summary, and knowledge schema",
      "Business-specific guardrails and escalation rules",
      "Monthly optimization and management path",
    ],
    questions: [
      {
        question: "Is this just a chatbot setup?",
        answer:
          "No. The offer is a managed business operations integration: reception, website assistance, lead capture, scheduling support, data handling, company knowledge, guardrails, and ongoing optimization.",
      },
      {
        question: "Who pays for Retell and other usage costs?",
        answer:
          "The client pays Retell and third-party platform usage directly. Onyx AI Studio charges for strategy, setup, integration, guardrails, workflow design, data structuring, and management.",
      },
    ],
    relatedCases: ["vapeos", "regional-service-site"],
  },
  {
    slug: "reception-web-assistant",
    title: "Reception + Website Assistant",
    eyebrow: "Customer entry points",
    summary:
      "AI phone reception and website voice assistance that answer common questions, qualify leads, capture details, and route follow-up.",
    description:
      "The public-facing assistants handle customer entry points without pretending to replace the whole front office. The phone receptionist can answer calls, qualify needs, request appointments, and summarize conversations. The website assistant can answer service questions, guide visitors, capture lead details, and start callback or scheduling flows from the same approved business knowledge.",
    icon: PhoneCall,
    outcomes: [
      "Fewer missed calls and abandoned website visits",
      "Lead details captured with source, urgency, notes, and follow-up needs",
      "Call and website conversation summaries routed to staff",
    ],
    deliverables: [
      "Phone receptionist role design",
      "Website voice assistant role design",
      "Lead qualification questions",
      "Call and website summary templates",
      "Human handoff and emergency rules",
    ],
    questions: [
      {
        question: "Can the phone and website assistants share the same knowledge base?",
        answer:
          "Yes. They can use the same approved business knowledge, but each assistant receives a different role, tone, access level, and set of actions.",
      },
      {
        question: "Can the assistant schedule appointments?",
        answer:
          "It can support scheduling based on the client's rules. The final implementation depends on hours, service areas, calendar access, staffing, urgency rules, and handoff requirements.",
      },
    ],
    relatedCases: ["starry", "regional-service-site"],
  },
  {
    slug: "internal-business-assistant",
    title: "Internal Business Assistant",
    eyebrow: "Employee support",
    summary:
      "A stricter internal assistant for owners and staff to search company files, SOPs, policies, call summaries, leads, and business records.",
    description:
      "The internal assistant is separate from public customer-facing agents. It helps employees ask questions against company files, SOPs, pricing guidance, service rules, call summaries, lead records, and policies with tighter permissions and stronger guardrails.",
    icon: FileSearch,
    outcomes: [
      "Faster answers from company documents and procedures",
      "Staff visibility into leads, call summaries, and follow-up needs",
      "Clear separation between public customer answers and internal business knowledge",
    ],
    deliverables: [
      "Internal assistant role and access model",
      "Company document and SOP structuring",
      "Supabase knowledge and records plan",
      "Internal question examples and evaluation checks",
      "Permission and escalation boundaries",
    ],
    questions: [
      {
        question: "How is the internal assistant different from the public assistant?",
        answer:
          "The internal assistant can reference company procedures, internal documents, lead records, and call summaries that public visitors should not access.",
      },
      {
        question: "What documents can be used?",
        answer:
          "Useful sources include SOPs, service descriptions, FAQs, pricing rules, scheduling rules, policies, warranty details, staff instructions, and approved customer records.",
      },
    ],
    relatedCases: ["vapeos", "starry"],
  },
  {
    slug: "guardrails-knowledge-systems",
    title: "Guardrails + Knowledge Systems",
    eyebrow: "Safety and control",
    summary:
      "Company-specific answer rules, escalation paths, sensitive information handling, and document-grounded knowledge systems.",
    description:
      "Guardrails are part of the premium value. Onyx AI Studio defines what the assistants can answer, what they should avoid, when they should escalate, how they handle sensitive information, and how they stay grounded in company-approved files and records.",
    icon: ShieldCheck,
    outcomes: [
      "Pricing, warranty, refund, scheduling, and emergency boundaries",
      "Public and internal data separation",
      "Reduced hallucination risk through document-based answers and confidence limits",
    ],
    deliverables: [
      "Guardrail rulebook",
      "Sensitive topic and escalation map",
      "Document-grounding strategy",
      "Assistant evaluation checks",
      "Ongoing review and tuning process",
    ],
    questions: [
      {
        question: "Do guardrails guarantee perfect answers?",
        answer:
          "No. Guardrails reduce risk and clarify boundaries, but they do not promise perfect accuracy. The system should know when to limit, qualify, or escalate an answer.",
      },
      {
        question: "Why do guardrails affect pricing?",
        answer:
          "More services, locations, documents, sensitive topics, and assistant roles require more planning, testing, data separation, and ongoing review.",
      },
    ],
    relatedCases: ["vapeos", "regional-service-site"],
  },
  {
    slug: "automation-workflows",
    title: "Lead Follow-Up + Workflow Automation",
    eyebrow: "Operational movement",
    summary:
      "The workflows that move leads, summaries, appointment requests, notifications, and follow-up tasks through the business.",
    description:
      "Automation work is no longer a separate generic offer. It supports the AI business system by moving the data captured from calls and website conversations into the right follow-up path, staff notification, status field, or reporting view.",
    icon: Workflow,
    outcomes: [
      "Lead, summary, appointment, and follow-up workflows that run reliably",
      "Human review points where judgment or sensitivity matters",
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
          "A reliable workflow has clear triggers, strict data assumptions, visible logs, fallback behavior, and human review points for decisions that should not be fully automatic.",
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
    title: "Business Website + Lead Capture Layer",
    eyebrow: "Front-end layer",
    summary:
      "Websites and application surfaces that make the AI business system visible, credible, and easy for visitors to use.",
    description:
      "Web development is framed as the front-end layer of the AI business system. The site should explain the business, convert demand into structured leads, support the website assistant, and give customers a clear path to request help.",
    icon: Braces,
    outcomes: [
      "Next.js sites with clear routing, metadata, and deployment readiness",
      "Responsive interfaces that work across phone and desktop",
      "Lead capture surfaces that feed the operations system",
    ],
    deliverables: [
      "Route and component map",
      "Design-system tokens",
      "Responsive implementation",
      "Metadata and sitemap",
      "Lead capture integration",
    ],
    questions: [
      {
        question: "Why does web development belong in the AI business system?",
        answer:
          "The website is often the first customer entry point. It should support lead capture, assistant behavior, conversion, content clarity, and the data layer instead of sitting apart from operations.",
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
    title: "Demand Generation Content System",
    eyebrow: "Demand feeding capture",
    summary:
      "SEO and answer-ready content reframed as demand generation that feeds the AI lead capture and follow-up system.",
    description:
      "SEO is not positioned as a standalone commodity package. It is the source material and demand layer that helps customers understand the business, arrive with better intent, and enter a lead capture workflow that the AI business system can handle.",
    icon: SearchCheck,
    outcomes: [
      "Service and case study silos that support topical authority",
      "Structured data, sitemap, robots, and llms.txt foundations",
      "Answer-ready passages for AI search and customer-facing assistants",
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
        question: "What is a demand generation content system?",
        answer:
          "It is a planned set of pages, links, metadata, schema, and reusable answer blocks that help customers and AI answer systems understand what the business does.",
      },
      {
        question: "How does content support the AI assistant?",
        answer:
          "Clear service pages, FAQs, policies, and case-study proof become cleaner source material for website assistants, internal assistants, and sales follow-up.",
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
    label: "AI operations module",
    summary:
      "A retail inventory search demo reframed as proof that messy business data can become a usable operating interface.",
    image: "/case-study-vapeos.svg",
    services: [
      "ai-integration",
      "internal-business-assistant",
      "guardrails-knowledge-systems",
      "automation-workflows",
      "seo-content-systems",
    ],
    metrics: [
      { label: "Indexed products", value: "1,700+" },
      { label: "Search mode", value: "Semantic" },
      { label: "Operations proof", value: "Data layer" },
    ],
    challenge:
      "Vape and smoke shops often carry broad catalogs under messy vendor names. Staff and customers rarely search those catalogs with the exact same words.",
    solution:
      "VapeOS demonstrates a semantic search interface that connects natural product questions to more than 1,700 real product records without requiring exact keyword matches.",
    result:
      "The demo proves Onyx AI Studio can turn inconsistent business data into a searchable system - the same capability needed for company knowledge bases and internal assistants.",
    stack: ["Next.js", "Supabase", "Vector search", "Gemini API"],
  },
  {
    slug: "starry",
    title: "Starry",
    label: "Voice-led assistant interface",
    summary:
      "A low-stimulation product direction showing how voice-led assistance can be designed around context instead of generic chat.",
    image: "/case-study-starry.svg",
    services: ["reception-web-assistant", "internal-business-assistant", "web-development"],
    metrics: [
      { label: "UX mode", value: "Voice-led" },
      { label: "Visual pace", value: "Low stimulus" },
      { label: "Interface proof", value: "Assistant" },
    ],
    challenge:
      "A nighttime app needs to feel useful without creating a bright, busy, screen-forward experience that works against the setting.",
    solution:
      "The product direction centers on short voice flows, calm visuals, and focused prompts that reduce taps while keeping the experience easy to understand.",
    result:
      "A differentiated assistant surface that shows Onyx AI Studio can design AI experiences around real-world context and user constraints.",
    stack: ["React", "Voice UX", "Web Audio", "Product design"],
  },
  {
    slug: "unicorn-island",
    title: "Unicorn Island",
    label: "Interactive workflow system",
    summary:
      "A browser-based interactive game suite preserved as proof of responsive controls, visual feedback, and custom product logic.",
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
      "A portfolio proof point for product-grade frontend work, animation, state handling, and interactive logic in the browser.",
    stack: ["React", "Game logic", "Responsive UI", "Animation"],
  },
  {
    slug: "regional-service-site",
    title: "Regional Service Site",
    label: "Lead capture and demand system",
    summary:
      "A service-business website direction showing how content architecture can feed lead capture, assistant answers, and follow-up workflows.",
    image: "/case-study-regional-service.svg",
    services: [
      "ai-integration",
      "reception-web-assistant",
      "automation-workflows",
      "seo-content-systems",
      "web-development",
    ],
    metrics: [
      { label: "Structure", value: "Content silo" },
      { label: "Search focus", value: "Local intent" },
      { label: "Operations role", value: "Capture" },
    ],
    challenge:
      "Regional service companies often need to prove expertise across many services and locations without creating thin or duplicated pages.",
    solution:
      "The site architecture organizes core services, supporting guides, and local intent pages into a clear content system with internal links.",
    result:
      "A practical demand-generation foundation that can scale into service pages, proof content, lead capture, and assistant-ready source material.",
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
  relatedLinks?: { href: string; label: string }[];
};

export const insights: Insight[] = [
  {
    slug: "ai-inventory-semantic-search",
    title: "How Semantic Search Turns Inventory Into An Operating Interface",
    description:
      "A practical explanation of why messy business data needs meaning-based search before it can support internal assistants and AI operations.",
    date: "2026-05-04",
    readingTime: "5 min read",
    tags: ["AI operations", "Knowledge systems", "Data handling"],
    sections: [
      {
        heading: "What is semantic inventory search?",
        body: "Semantic inventory search matches a user's intent to product data by meaning instead of exact keywords. For businesses with inconsistent names, abbreviations, and category labels, this makes search more useful because the system can connect natural language requests to relevant records even when the words do not match exactly.",
      },
      {
        heading: "Why keyword search breaks down",
        body: "Keyword search works when names are clean and users know the exact terms. It breaks down when catalogs, documents, services, and policies include vendor-specific naming, shorthand, imported data, or inconsistent labels. The result is slower lookup, repeated searches, and avoidable manual work.",
      },
      {
        heading: "What makes the interface useful",
        body: "A useful AI operations interface shows its work. It should return relevant records, expose confidence or match reasons when needed, keep filters visible, and let operators recover quickly from weak matches. The goal is speed and trust, not a mysterious chat window.",
      },
    ],
    relatedLinks: [
      { href: "/services/internal-business-assistant", label: "Internal Business Assistant" },
      { href: "/services/guardrails-knowledge-systems", label: "Guardrails + Knowledge Systems" },
      { href: "/case-studies/vapeos", label: "VapeOS Case Study" },
    ],
  },
  {
    slug: "ai-inventory-search-vape-shops-messy-catalogs",
    title: "How AI Inventory Search Helps Vape Shops Handle Messy Product Catalogs",
    description:
      "A practical guide to using AI inventory search for vape and smoke shops with inconsistent product names, broad catalogs, and weak online browsing.",
    date: "2026-05-15",
    readingTime: "6 min read",
    tags: ["AI operations", "Retail data", "Lead capture"],
    sections: [
      {
        heading: "Why vape-shop catalogs get messy",
        body: "Vape shops often carry disposables, e-liquids, coils, pods, mods, batteries, chargers, accessories, CBD, Kratom, and adjacent smoke-shop products at the same time. Product names may include brand shorthand, flavor variants, puff counts, device generations, coil resistance, nicotine strength, and vendor-specific wording. That creates a catalog that is useful in the store but hard to search online.",
      },
      {
        heading: "Where normal search breaks",
        body: "Keyword search depends on exact wording. A shopper may ask for a blue razz disposable, while the product name uses a brand, puff count, ice variant, and abbreviation. Staff may remember the category but not the exact SKU. When the site only says to call or send a message, every lookup becomes manual.",
      },
      {
        heading: "What AI inventory search changes",
        body: "AI inventory search can match intent to product records by meaning. In the VapeOS demo, semantic search works across more than 1,700 real products so messy retail names can still return useful matches. The point is not to replace staff judgment; it is to make the first lookup faster and less dependent on exact catalog wording.",
      },
      {
        heading: "How this connects to AI business operations",
        body: "The same pattern applies beyond inventory. Calls, website conversations, service policies, pricing guidance, and internal SOPs need structure before AI can use them reliably. Searchable business data is the foundation for reception, lead capture, follow-up, and internal staff assistance.",
      },
      {
        heading: "How this supports outreach",
        body: "For shops with basic websites, stale product pages, or contact-only flows, the first offer should be concrete: review how customer questions become leads and whether a searchable data layer would help customers and staff.",
      },
    ],
    relatedLinks: [
      { href: "/services/ai-integration", label: "AI Business Operations Integration" },
      { href: "/services/automation-workflows", label: "Lead Follow-Up + Workflow Automation" },
      { href: "/case-studies/vapeos", label: "VapeOS Case Study" },
    ],
  },
];

export const proofPoints = [
  { value: "$4k-$10k", label: "implementation range for custom operations integration" },
  { value: "$750-$1.5k", label: "monthly management range after launch" },
  { value: "3", label: "assistant roles: phone, website, and internal" },
];

export const operationalProblems = [
  "Missed calls and slow after-hours response",
  "Website visitors leaving without converting",
  "Lead details scattered across inboxes and notes",
  "Employees repeating answers from memory",
  "Company documents that are hard to search",
  "Scheduling, callback, and follow-up tasks slipping",
  "Inconsistent customer handling across staff",
  "Unclear AI guardrails for sensitive situations",
];

export const systemFlow = [
  {
    title: "Phone calls",
    body: "Retell-powered AI receptionist answers, qualifies, summarizes, and routes the call.",
    icon: PhoneCall,
  },
  {
    title: "Website visitors",
    body: "Website assistant answers service questions, captures lead details, and starts callback or scheduling support.",
    icon: MessageSquareText,
  },
  {
    title: "Supabase business layer",
    body: "Leads, customer records, company knowledge, call summaries, website summaries, and follow-up status stay structured.",
    icon: DatabaseZap,
  },
  {
    title: "Internal assistant",
    body: "Owners and staff search company files, SOPs, policies, lead records, and call summaries with stricter access rules.",
    icon: Headphones,
  },
];

export const processSteps = [
  {
    title: "Review the operation",
    body: "Map calls, website leads, scheduling rules, documents, current tools, follow-up paths, and risk boundaries.",
    icon: GitBranch,
  },
  {
    title: "Build the business system",
    body: "Configure assistant roles, Supabase records, knowledge sources, guardrails, summaries, and workflow handoffs.",
    icon: Layers3,
  },
  {
    title: "Manage and optimize",
    body: "Review conversations, tune prompts, update knowledge, strengthen guardrails, and keep data useful after launch.",
    icon: ShieldCheck,
  },
];

export const capabilities = [
  { title: "AI phone reception", icon: PhoneCall },
  { title: "Website voice assistance", icon: MessageSquareText },
  { title: "Lead capture", icon: Sparkles },
  { title: "Scheduling support", icon: CalendarClock },
  { title: "Supabase data layer", icon: DatabaseZap },
  { title: "Internal knowledge search", icon: FileSearch },
  { title: "Guardrails and escalation", icon: ShieldCheck },
  { title: "Follow-up workflows", icon: Workflow },
  { title: "Business reporting", icon: ChartSpline },
  { title: "Performance foundations", icon: Gauge },
];

export const pricingTiers = [
  {
    name: "Core Integration",
    setup: "$4,000-$6,000",
    monthly: "$750/month",
    description:
      "For smaller operations needing AI reception, website assistance, lead capture, and scheduling support.",
    features: [
      "Phone receptionist and website assistant setup",
      "Lead capture and summary structure",
      "Basic scheduling or callback support",
      "Core business guardrails",
    ],
  },
  {
    name: "Operations Integration",
    setup: "$6,000-$8,500",
    monthly: "$1,000-$1,250/month",
    description:
      "For companies needing stronger data handling, Supabase knowledge systems, multiple workflows, and reporting.",
    features: [
      "Supabase business data layer",
      "Multiple assistant workflows",
      "Detailed guardrails and handoff rules",
      "Lead, call, and website summary reporting",
    ],
  },
  {
    name: "Advanced Business Assistant System",
    setup: "$8,500-$10,000+",
    monthly: "$1,250-$1,500+/month",
    description:
      "For larger operations with internal assistant needs, significant documentation, multi-location complexity, or deeper integrations.",
    features: [
      "Internal employee assistant",
      "Document and SOP knowledge structuring",
      "Stricter permissions and sensitive-topic handling",
      "Deeper CRM, calendar, email, SMS, or reporting integration",
    ],
  },
];

export const pricingFactors = [
  "Number of locations",
  "Number of services",
  "Call volume",
  "Scheduling complexity",
  "Number of assistants",
  "Amount of internal documentation",
  "Business data cleanup",
  "Guardrail complexity",
  "CRM, calendar, email, or SMS integrations",
  "Reporting and internal assistant requirements",
  "Compliance or sensitivity level",
];

export const homeFaqs = [
  {
    question: "What does Onyx AI Studio build?",
    answer:
      "Onyx AI Studio builds AI business operations systems that connect reception, website assistance, lead capture, scheduling support, company knowledge, business data, and internal employee assistance.",
  },
  {
    question: "Is Retell or Supabase the product?",
    answer:
      "No. Retell and Supabase are infrastructure choices. The product is the business integration: strategy, workflow design, data structure, assistant behavior, guardrails, implementation, and ongoing management.",
  },
  {
    question: "How does an AI Operations Review work?",
    answer:
      "The review starts with the company's calls, website leads, scheduling process, documents, data, and follow-up problems. The output is a practical recommendation for what should be built, what should not be automated, and what usage costs are separate.",
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
