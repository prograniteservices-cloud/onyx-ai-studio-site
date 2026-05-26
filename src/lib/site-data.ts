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

export const founderLinkedInUrl =
  "https://www.linkedin.com/in/barry-beaubien-4313013a5/";

export const founderName = "Barry Beaubien";
export const founderPersonId = `${siteUrl}/#barry-beaubien`;

export const navItems = [
  { href: "/services/ai-integration", label: "AI Business System" },
  { href: "/services/reception-web-assistant", label: "Reception + Web Assistant" },
  { href: "/services/internal-business-assistant", label: "Internal Assistant" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/insights", label: "Insights" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const portfolioDemoLauncherUrl =
  "https://onyx-portfolio-demos.vercel.app/apps";

export function portfolioDemoUrl(slug: string) {
  return `${portfolioDemoLauncherUrl}/${slug}`;
}

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  outcomes: string[];
  deliverables: string[];
  detailSections?: { heading: string; body: string }[];
  sourceLinks?: { label: string; href: string }[];
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
      "AI Business Operations Integration installs AI into the way a company already handles calls, website visitors, leads, scheduling, documents, and staff questions. The service maps the existing workflow first, then connects voice agents, website assistants, forms, summaries, follow-up status, company knowledge, and permissions into one managed operating layer. Retell powers the voice and conversation layer, while Supabase supports the business data and knowledge layer. Onyx AI Studio designs the strategy, implementation, guardrails, workflows, testing, and ongoing management.",
    icon: Bot,
    outcomes: [
      "24/7 call and website handling without making AI the whole business",
      "Structured leads, call summaries, website summaries, and follow-up status",
      "A company knowledge layer that public and internal assistants can use with different permissions",
      "Clear escalation rules for pricing, emergencies, scheduling limits, warranties, and sensitive questions",
    ],
    deliverables: [
      "AI operations review and workflow map",
      "Retell phone receptionist and website assistant plan",
      "Supabase lead, customer, summary, and knowledge schema",
      "Business-specific guardrails and escalation rules",
      "Test scripts for approved answers, weak answers, handoffs, and source boundaries",
      "Monthly optimization and management path",
    ],
    detailSections: [
      {
        heading: "What is AI business operations integration?",
        body: "AI business operations integration connects customer conversations, lead records, company knowledge, staff handoffs, and follow-up into one managed workflow. The point is not to add a generic bot. The point is to decide which questions AI may answer, which details should become structured records, which actions need human review, and which systems should receive the summary.",
      },
      {
        heading: "Implementation workflow",
        body: "The build starts with an AI Operations Review, then moves through source cleanup, assistant role design, Supabase schema planning, Retell agent setup, handoff rules, test calls, failure cases, and monthly tuning. For countertop and service businesses, the first useful system is often a quote-intake or missed-call workflow before deeper internal automation.",
      },
      {
        heading: "Fit criteria and guardrails",
        body: "The best fit is a business with repeated calls, repeated website questions, quote intake, scheduling friction, or staff lookup problems. Guardrails define pricing boundaries, service-area limits, emergency escalation, warranty or refund language, sensitive data handling, and the point where the assistant stops answering and routes the request to a person.",
      },
      {
        heading: "Retell and Supabase roles",
        body: "Retell is the conversation layer for voice and chat agents, knowledge-base retrieval, call transfers, webhooks, and post-call analysis. Supabase is the server-side data layer for leads, pipeline status, summaries, source material, and reporting. Onyx designs the workflow, connects the platforms, writes the rules, and keeps server-only keys out of public clients.",
      },
    ],
    sourceLinks: [
      { label: "Retell Knowledge Base docs", href: "https://docs.retellai.com/build/knowledge-base" },
      { label: "Retell Post-Call Analysis docs", href: "https://docs.retellai.com/features/post-call-analysis" },
      { label: "Supabase API key docs", href: "https://supabase.com/docs/guides/getting-started/api-keys" },
      { label: "Supabase API security docs", href: "https://supabase.com/docs/guides/api/securing-your-api" },
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
      {
        question: "What makes a business ready for this integration?",
        answer:
          "The best fit is a business with repeated calls, website questions, lead intake, scheduling, document lookup, or follow-up problems. The operation does not need perfect data, but it does need enough real workflow detail to define safe answers, handoffs, and success criteria.",
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
    detailSections: [
      {
        heading: "What should a public assistant be allowed to answer?",
        body: "A public receptionist or website assistant should answer from approved customer-facing knowledge: services, hours, service areas, intake questions, broad process steps, and next-action options. It should not invent exact pricing, promise availability, override emergency procedures, expose private notes, or make warranty and refund commitments outside the business rulebook.",
      },
      {
        heading: "When should it escalate?",
        body: "Escalation should happen when the customer asks about emergencies, safety, medical or legal details, account-specific private information, exact discounts, disputes, complaints, or anything the knowledge base cannot support. Escalation can mean a warm transfer, callback request, staff notification, or a saved lead with a clear next action.",
      },
      {
        heading: "Phone and website handoff examples",
        body: "A phone caller can be qualified, summarized, and routed to staff with urgency and callback notes. A website visitor can ask a service question, select quote details, and submit a structured request. Both paths should produce a lead record that tells staff what happened, what was asked, and what should happen next.",
      },
    ],
    sourceLinks: [
      { label: "Retell Call Transfer docs", href: "https://docs.retellai.com/build/conversation-flow/call-transfer-node" },
      { label: "Retell Webhook docs", href: "https://docs.retellai.com/features/webhook-overview" },
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
    detailSections: [
      {
        heading: "Public assistant versus internal assistant",
        body: "A public assistant helps customers with approved outward-facing information. An internal assistant helps owners and staff search SOPs, policies, lead records, call summaries, service rules, and private operating notes. Keeping those roles separate protects sensitive context and makes each assistant easier to test.",
      },
      {
        heading: "Source boundaries",
        body: "Internal answers should cite or point back to approved sources whenever practical. If the answer depends on stale, contradictory, or missing documents, the assistant should say the source is weak and route the question to a person. The goal is faster staff lookup, not unsupported certainty.",
      },
      {
        heading: "Good first use cases",
        body: "Useful internal assistant targets include quote-intake summaries, lead status lookup, product or service search, SOP questions, warranty rules, call summaries, and follow-up reminders. These use cases are valuable because they reduce repeated lookup work while keeping final judgment with the owner or staff.",
      },
    ],
    sourceLinks: [
      { label: "Supabase securing data docs", href: "https://supabase.com/docs/guides/database/secure-data/" },
      { label: "Retell Knowledge Base docs", href: "https://docs.retellai.com/build/knowledge-base" },
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
  demoUrl?: string;
  services: string[];
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  result: string;
  proofSections?: { heading: string; body: string }[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "countertop-estimator",
    title: "Countertop Estimate Tool",
    label: "Lead capture configurator",
    summary:
      "A premium countertop estimate flow that turns casual website visitors into structured quote requests before the showroom visit.",
    image: "/case-study-countertop-estimator.svg",
    demoUrl: "https://estimate-tool-three.vercel.app",
    services: [
      "web-development",
      "automation-workflows",
      "seo-content-systems",
      "ai-integration",
    ],
    metrics: [
      { label: "Material options", value: "152" },
      { label: "Embed modes", value: "Page/widget" },
      { label: "Business role", value: "Quote path" },
    ],
    challenge:
      "Countertop shops often ask buyers to call, send a vague form, or visit the showroom before the customer understands surface options, project size, edge details, and upgrades.",
    solution:
      "The estimator gives the shop a branded guided quote path with materials, kitchen size, edge profiles, upgrades, estimate reveal, savings framing, and lead capture.",
    result:
      "The demo shows how a service-business website can become an interactive sales tool, customized to the shop's theme, catalog, pricing boundaries, lead flow, and preferred format.",
    proofSections: [
      {
        heading: "What this proves for granite and countertop shops",
        body: "A countertop buyer rarely arrives with every quote detail ready. A guided estimator can collect material selection, square footage, edge detail, sink and backsplash context, timeline, showroom readiness, and contact information before the first staff follow-up. The proof is not a final price promise; it is a cleaner intake path.",
      },
      {
        heading: "Sample lead record",
        body: "The useful output is a sample lead record: contact details, material selection, square footage, edge detail, sink needs, backsplash interest, project timeline, showroom readiness, notes, source page, and follow-up status. That record can feed email, Supabase, a CRM view, a callback task, or an internal assistant summary.",
      },
      {
        heading: "First build recommendation",
        body: "For the 30-day beachhead, the first implementation should be a quote-intake system tied to the AI Operations Review. The tool collects the intake details, staff still reviews fit and scheduling, and human follow-up happens after the structured record is saved. Reception and internal assistant work can follow after the intake questions, handoff rules, and follow-up process are clear.",
      },
    ],
    stack: ["Next.js", "Tailwind CSS", "Lead capture", "Vercel"],
  },
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
    proofSections: [
      {
        heading: "What this proves beyond vape shops",
        body: "VapeOS is useful proof because the hard part is not the retail category. The hard part is messy records: inconsistent product names, broad categories, shorthand, and questions that do not match exact keywords. That same pattern appears in service menus, SOPs, warranty documents, call notes, and customer records.",
      },
      {
        heading: "Internal-search value",
        body: "A staff-facing search layer should help people find relevant records faster while showing enough context to trust the answer. For business operations, that means mapping natural questions to products, services, policies, or lead records without exposing private internal context to public visitors.",
      },
      {
        heading: "Boundary lesson",
        body: "Semantic search does not fix weak source material by itself. The data still needs labels, categories, source ownership, and review rules. VapeOS supports the Onyx position that AI implementation starts with source structure and guardrails, not with a generic chat window.",
      },
    ],
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
  {
    slug: "greater-aiken-irrigation",
    title: "Greater Aiken Irrigation",
    label: "AEO & SEO Overhaul",
    summary:
      "A complete Answer Engine Optimization (AEO) and SEO overhaul for a local service business, turning static pages into AI-search-ready lead capture assets.",
    image: "/case-study-regional-service.svg",
    services: [
      "seo-content-systems",
      "web-development",
      "ai-integration"
    ],
    metrics: [
      { label: "Case Studies", value: "54+" },
      { label: "Schema", value: "FAQ & Entity" },
      { label: "Search focus", value: "AEO/SGE" },
    ],
    challenge:
      "Local service businesses risk losing traffic to AI search engines (Google SGE, ChatGPT) because their traditional SEO content lacks the semantic depth required by LLMs.",
    solution:
      "A comprehensive AEO overhaul that uniquely rewrote 54+ case studies with expert technical details, implemented FAQ and Service Entity Schema, and established a demand generation system.",
    result:
      "A future-proofed local service presence that targets both traditional local SEO and emerging AI search, converting high-intent traffic into qualified leads.",
    stack: ["Next.js", "AEO", "Entity Schema", "Content strategy"],
  },
];

export type PortfolioDemoApp = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  demoUrl: string;
};

export const portfolioDemoApps: PortfolioDemoApp[] = [
  {
    slug: "knowledge-base",
    title: "Knowledge Base SaaS Demo",
    shortTitle: "Knowledge Base",
    eyebrow: "RAG Product",
    description:
      "Upload-style knowledge retrieval with cited answers and source coverage.",
    demoUrl: portfolioDemoUrl("knowledge-base"),
  },
  {
    slug: "verified-qa",
    title: "Hallucination-Resistant QA Demo",
    shortTitle: "Verified QA",
    eyebrow: "Grounded Answers",
    description:
      "Refuse unsupported claims and label answers by evidence strength.",
    demoUrl: portfolioDemoUrl("verified-qa"),
  },
  {
    slug: "support-chatbot",
    title: "Customer Support Chatbot Demo",
    shortTitle: "Support Bot",
    eyebrow: "Support Automation",
    description:
      "RAG support answers with escalation logic and confidence notes.",
    demoUrl: portfolioDemoUrl("support-chatbot"),
  },
  {
    slug: "task-manager",
    title: "Agentic Task Manager Demo",
    shortTitle: "Task Manager",
    eyebrow: "Workflow Agents",
    description:
      "Tool-planning agent that separates intent, memory, scheduling, and reminders.",
    demoUrl: portfolioDemoUrl("task-manager"),
  },
  {
    slug: "secure-document-analyzer",
    title: "Secure Document Analyzer Demo",
    shortTitle: "Document Analyzer",
    eyebrow: "Private Document AI",
    description:
      "PII-aware document analysis with redaction and audit-friendly output.",
    demoUrl: portfolioDemoUrl("secure-document-analyzer"),
  },
  {
    slug: "research-assistant",
    title: "Personalized Research Assistant Demo",
    shortTitle: "Research Assistant",
    eyebrow: "Research Copilot",
    description:
      "Multi-source research synthesis with provenance, confidence notes, and next-step recommendations.",
    demoUrl: portfolioDemoUrl("research-assistant"),
  },
  {
    slug: "content-creation",
    title: "Automated Content Creation Workflow Demo",
    shortTitle: "Content Creation",
    eyebrow: "Content Ops",
    description:
      "RAG-assisted content planning with source notes, editorial checks, and bias review.",
    demoUrl: portfolioDemoUrl("content-creation"),
  },
  {
    slug: "data-fusion",
    title: "Multi-Source Data Fusion Analyzer Demo",
    shortTitle: "Data Fusion",
    eyebrow: "Hybrid Retrieval",
    description:
      "Hybrid search and rank fusion that turns uneven source sets into an explainable brief.",
    demoUrl: portfolioDemoUrl("data-fusion"),
  },
  {
    slug: "agent-simulator",
    title: "Collaborative Agent Simulator Demo",
    shortTitle: "Agent Simulator",
    eyebrow: "Multi-Agent Review",
    description:
      "Role-based agent collaboration with transcript, handoffs, review notes, and failure recovery.",
    demoUrl: portfolioDemoUrl("agent-simulator"),
  },
  {
    slug: "learning-tutor",
    title: "Personalized Learning Tutor Demo",
    shortTitle: "Learning Tutor",
    eyebrow: "Adaptive Learning",
    description:
      "Adaptive tutoring with learner memory, lesson steps, retrieval proof, and comprehension checks.",
    demoUrl: portfolioDemoUrl("learning-tutor"),
  },
  {
    slug: "news-fact-checker",
    title: "News Summarization and Fact-Checker Demo",
    shortTitle: "News Checker",
    eyebrow: "News QA",
    description:
      "Concise news summaries with claim extraction, verification status, and quality signals.",
    demoUrl: portfolioDemoUrl("news-fact-checker"),
  },
  {
    slug: "recommendation-engine",
    title: "E-commerce Recommendation Engine Demo",
    shortTitle: "Recommendations",
    eyebrow: "Commerce AI",
    description:
      "Conversational recommendations with catalog grounding, tradeoffs, and observability notes.",
    demoUrl: portfolioDemoUrl("recommendation-engine"),
  },
  {
    slug: "code-generation",
    title: "Autonomous Code Generation Workflow Demo",
    shortTitle: "Code Generation",
    eyebrow: "Developer Workflow",
    description:
      "Spec-to-code workflow simulation with tests, refinement notes, and execution results.",
    demoUrl: portfolioDemoUrl("code-generation"),
  },
  {
    slug: "health-guardrails",
    title: "Health Advice Generator with Guardrails Demo",
    shortTitle: "Health Guardrails",
    eyebrow: "Safety-Critical AI",
    description:
      "Health guidance constrained by safety rules, source grounding, and escalation triggers.",
    demoUrl: portfolioDemoUrl("health-guardrails"),
  },
  {
    slug: "translation-agent",
    title: "Multi-Language Translation Agent Demo",
    shortTitle: "Translation Agent",
    eyebrow: "Localization AI",
    description:
      "Translation and cultural adaptation with glossary adherence and quality notes.",
    demoUrl: portfolioDemoUrl("translation-agent"),
  },
  {
    slug: "portfolio-optimizer",
    title: "Portfolio Optimization Simulator Demo",
    shortTitle: "Portfolio Optimizer",
    eyebrow: "Financial Simulation",
    description:
      "Scenario-based allocation commentary with risk bands, constraints, and clear disclaimers.",
    demoUrl: portfolioDemoUrl("portfolio-optimizer"),
  },
  {
    slug: "story-generator",
    title: "Interactive Story Generator Demo",
    shortTitle: "Story Generator",
    eyebrow: "Creative AI",
    description:
      "Branching story generation with character memory, state tracking, and next-choice options.",
    demoUrl: portfolioDemoUrl("story-generator"),
  },
  {
    slug: "environmental-tracker",
    title: "Environmental Data Tracker Demo",
    shortTitle: "Environmental Tracker",
    eyebrow: "Climate Signals",
    description:
      "Environmental metric summaries with trend notes, source labels, and alert states.",
    demoUrl: portfolioDemoUrl("environmental-tracker"),
  },
  {
    slug: "bias-mitigation",
    title: "Bias Mitigation Tool for LLMs Demo",
    shortTitle: "Bias Mitigation",
    eyebrow: "Model Evaluation",
    description:
      "Bias-risk scoring with rubric evidence, mitigation rewrite, and score deltas.",
    demoUrl: portfolioDemoUrl("bias-mitigation"),
  },
  {
    slug: "meeting-assistant",
    title: "Virtual Meeting Assistant Demo",
    shortTitle: "Meeting Assistant",
    eyebrow: "Meeting Intelligence",
    description:
      "Transcript summarization with action items, owners, follow-up context, and redaction support.",
    demoUrl: portfolioDemoUrl("meeting-assistant"),
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
    slug: "ai-lead-capture-service-business-websites",
    title: "How AI Lead Capture Changes Service Business Websites",
    description:
      "A practical guide to turning local service websites into structured lead capture systems with AI reception, quote paths, follow-up, and business data.",
    date: "2026-05-19",
    readingTime: "7 min read",
    tags: ["Lead capture", "Service businesses", "AI operations"],
    sections: [
      {
        heading: "What is AI lead capture for a service business?",
        body: "AI lead capture is the process of using website assistants, quote paths, intake forms, and follow-up workflows to turn visitor intent into structured business records. For a service business, the goal is not to replace the owner or office staff. The goal is to collect the right details earlier: service needed, location, urgency, photos, scheduling preference, budget context, and the next human action. A good AI lead capture system makes the website more useful, reduces vague inquiries, and gives the business a cleaner starting point for follow-up.",
      },
      {
        heading: "Why normal service websites lose good leads",
        body: "Most local service websites ask visitors to call, fill out a basic contact form, or browse static service pages. That works only when the visitor already knows what they need and is ready to act. Many buyers are earlier in the decision process. They want to understand options, pricing ranges, timelines, service areas, and whether the company handles their exact situation. If the site cannot guide that conversation, the visitor either leaves or sends a weak inquiry that still requires manual clarification.",
      },
      {
        heading: "What changes when the website becomes an intake system",
        body: "A lead capture system asks better questions and stores better answers. A countertop visitor can select material, kitchen size, edge profile, and upgrades before requesting a quote. An irrigation customer can describe the zone problem, property type, controller issue, and urgency. A pressure washing customer can choose surfaces and upload photos. The pattern is the same: convert anonymous interest into structured context that supports a faster, more relevant response.",
      },
      {
        heading: "Where AI should and should not be used",
        body: "AI is useful for answering common questions, summarizing visitor conversations, routing leads, generating follow-up notes, and searching approved company knowledge. It should not invent pricing, promise availability, override service boundaries, or make sensitive decisions without rules. The strongest systems combine deterministic forms and workflows with AI assistance where language, summarization, and knowledge retrieval actually help.",
      },
      {
        heading: "How Onyx AI Studio approaches the system",
        body: "Onyx AI Studio treats the website as the front-end layer of the business operation. The public site captures demand, the assistant answers from approved knowledge, the workflow routes follow-up, and the data layer keeps leads and summaries organized. That structure is more valuable than a standalone chatbot because it connects customer intent to the actual work the business needs to perform next.",
      },
    ],
    relatedLinks: [
      { href: "/services/ai-integration", label: "AI Business Operations Integration" },
      { href: "/services/web-development", label: "Business Website + Lead Capture Layer" },
      { href: "/services/automation-workflows", label: "Lead Follow-Up + Workflow Automation" },
      { href: "/case-studies/countertop-estimator", label: "Countertop Estimate Tool Case Study" },
    ],
  },
  {
    slug: "website-quote-tool-before-customer-calls",
    title: "What Website Quote Tools Should Collect First",
    description:
      "A buyer-focused explanation of how quote tools, estimators, and configurators can qualify intent before a service business starts manual follow-up.",
    date: "2026-05-19",
    readingTime: "6 min read",
    tags: ["Quote tools", "Conversion", "Lead quality"],
    sections: [
      {
        heading: "What should a quote tool accomplish?",
        body: "A website quote tool should help a customer understand the shape of their project before the business spends time on manual follow-up. It should collect the details that affect scope, urgency, fit, and expectations. For many service companies, that means project type, location, size, materials, condition, timeline, photos, and preferred contact method. The best quote tools do not pretend to produce a final binding price. They create a useful first estimate, set boundaries, and invite the customer into a more qualified quote conversation.",
      },
      {
        heading: "Why a quote tool is different from a contact form",
        body: "A contact form usually captures name, email, phone, and a free-text message. A quote tool captures decision context. It guides the customer through choices that mirror how the business thinks about the job. For countertop shops, that can mean material category, square footage, edge detail, sinks, backsplash, and islands. For irrigation, it can mean repair type, zones affected, controller model, soil or drainage context, and emergency timing. Structured inputs produce better follow-up than a blank message box.",
      },
      {
        heading: "The quote tool should educate while it qualifies",
        body: "A good estimator also teaches the customer what matters. It can show why material choice changes pricing, why photos help, why a site visit is still needed, or why service area matters. This reduces friction because the customer feels guided rather than interrogated. It also improves sales quality because the business receives a lead who has already thought through the main variables.",
      },
      {
        heading: "What the business receives after submission",
        body: "The business should receive a clean summary: customer contact details, selected options, estimated range or category, notes, photos if available, urgency, and recommended next step. That summary can go to email, SMS, CRM, a dashboard, or an internal assistant. The point is to prevent every inquiry from starting as a scattered conversation across phone calls and inboxes.",
      },
      {
        heading: "How customization affects performance",
        body: "The quote tool should match the client's brand, services, pricing boundaries, and sales process. It may work as a full page, embedded widget, sidebar, quote card, or guided flow. Customization matters because the tool is not just a calculator. It is part of the buyer experience, and it should feel like a natural extension of the company's existing website.",
      },
    ],
    relatedLinks: [
      { href: "/case-studies/countertop-estimator", label: "Countertop Estimate Tool" },
      { href: "/services/web-development", label: "Business Website + Lead Capture Layer" },
      { href: "/services/automation-workflows", label: "Lead Follow-Up + Workflow Automation" },
      { href: "/contact", label: "Request an AI Operations Review" },
    ],
  },
  {
    slug: "small-business-ai-without-replacing-staff",
    title: "How Small Businesses Can Use AI With Staff",
    description:
      "A practical framework for using AI to support calls, website questions, summaries, internal search, and follow-up without removing human judgment.",
    date: "2026-05-19",
    readingTime: "7 min read",
    tags: ["AI adoption", "Staff support", "Guardrails"],
    sections: [
      {
        heading: "AI should support the staff, not become the staff",
        body: "Small businesses get the most value from AI when it handles repetitive intake, summaries, search, and routing while leaving judgment to people. A practical AI system can answer common questions, capture lead details, summarize calls, search company documents, and remind staff about follow-up. It should not make unsupported promises, hide important context, or replace the owner’s sense of what is right for a customer. The best systems make staff faster and more consistent without removing accountability.",
      },
      {
        heading: "Start with the repetitive work",
        body: "Good first targets include missed calls, repeated website questions, quote intake, scheduling requests, customer summaries, and document lookup. These workflows are valuable because they happen often and follow recognizable patterns. AI can reduce the time spent collecting basic information, but the business still controls the rules, tone, escalation paths, and final decisions.",
      },
      {
        heading: "Separate public answers from internal knowledge",
        body: "A public website assistant should only answer from approved customer-facing knowledge. An internal assistant can search SOPs, policies, lead records, call summaries, pricing guidance, and staff notes with stricter access rules. Keeping these roles separate protects sensitive information and makes the system easier to test. It also prevents a public-facing assistant from exposing details that belong inside the business.",
      },
      {
        heading: "Guardrails are part of the business value",
        body: "Guardrails define what the assistant can answer, when it should qualify the answer, and when it should escalate. For a service business, guardrails may cover pricing, warranty, emergency situations, refunds, medical or legal questions, scheduling limitations, and service-area boundaries. These rules are not decoration. They are what make AI useful enough for real business workflows.",
      },
      {
        heading: "The owner keeps control of the operation",
        body: "AI should produce structured information that the owner or staff can review. Lead summaries, call notes, quote details, and follow-up statuses should be visible. When the system is designed this way, AI becomes a managed layer inside the operation instead of a mysterious black box. That is the difference between a risky chatbot and a practical AI business system.",
      },
    ],
    relatedLinks: [
      { href: "/services/reception-web-assistant", label: "Reception + Website Assistant" },
      { href: "/services/internal-business-assistant", label: "Internal Business Assistant" },
      { href: "/services/guardrails-knowledge-systems", label: "Guardrails + Knowledge Systems" },
      { href: "/case-studies/starry", label: "Starry Case Study" },
    ],
  },
  {
    slug: "messy-business-data-before-ai",
    title: "Why AI Needs Structured Business Data",
    description:
      "A clear explanation of why AI systems need organized products, services, documents, policies, and records before they can reliably support operations.",
    date: "2026-05-19",
    readingTime: "7 min read",
    tags: ["Business data", "Internal assistants", "AI readiness"],
    sections: [
      {
        heading: "AI works better when the business data is structured",
        body: "Messy business data limits what AI can safely do. Product names, service descriptions, policies, pricing rules, customer records, call notes, documents, and staff procedures need enough structure for the system to retrieve the right context. Without that foundation, AI may answer from incomplete information or force staff to keep correcting it. The first step is not always a chatbot. Often, the first step is turning scattered business knowledge into a usable source layer.",
      },
      {
        heading: "What messy data looks like in real businesses",
        body: "Messy data can be product catalogs with inconsistent vendor names, service pages with missing details, SOPs stored in old files, policies buried in email, customer notes spread across phones, and lead statuses that only one person understands. Humans can often work around this because they remember context. AI systems need that context to be findable, labeled, and bounded.",
      },
      {
        heading: "Semantic search helps, but it is not magic",
        body: "Semantic search can match meaning instead of exact keywords, which is valuable when users ask for products, services, or policies in different words. But semantic search still depends on the quality of the underlying records. If the catalog is incomplete, the service rules are vague, or the source documents contradict each other, the AI layer will inherit those weaknesses.",
      },
      {
        heading: "The data layer should support public and internal workflows",
        body: "A business data layer should support different roles. Public assistants may answer service questions and capture leads. Internal assistants may search SOPs, customer records, call summaries, and documents. Follow-up workflows may use lead status, urgency, and next actions. These uses require different permissions and different levels of detail, so the structure matters before the AI experience goes live.",
      },
      {
        heading: "How Onyx turns data into an operating interface",
        body: "Onyx AI Studio treats data cleanup, schema design, source selection, and guardrails as part of implementation. The goal is not to make data tidy for its own sake. The goal is to make calls, website conversations, internal search, lead follow-up, and reporting easier to operate. VapeOS is a simple example: messy inventory becomes searchable business data that staff and customers can actually use.",
      },
    ],
    relatedLinks: [
      { href: "/case-studies/vapeos", label: "VapeOS Case Study" },
      { href: "/services/internal-business-assistant", label: "Internal Business Assistant" },
      { href: "/services/guardrails-knowledge-systems", label: "Guardrails + Knowledge Systems" },
      { href: "/insights/ai-inventory-semantic-search", label: "Semantic Inventory Search" },
    ],
  },
  {
    slug: "what-is-ai-operations-review",
    title: "What Is An AI Operations Review?",
    description:
      "A plain-English explanation of what an AI operations review covers, when a business needs one, and how it leads to practical implementation decisions.",
    date: "2026-05-26",
    readingTime: "8 min read",
    tags: ["AI operations", "Implementation", "Business review"],
    sections: [
      {
        heading: "What is an AI operations review?",
        body: "An AI operations review is a structured look at how a business handles calls, website visitors, leads, scheduling, documents, follow-up, and internal knowledge before deciding what AI should do. The review identifies where automation can help, where human judgment should remain, what data needs structure, and what guardrails are required. It is not a generic chatbot consultation. It is a practical map of the business workflow and the safest useful places to install AI.",
      },
      {
        heading: "What problems does the review look for?",
        body: "The review looks for missed calls, slow response times, vague website inquiries, repeated staff questions, messy documents, weak lead tracking, scheduling friction, and inconsistent follow-up. It also looks for risks: sensitive topics, pricing boundaries, emergency situations, refund or warranty rules, and cases where the assistant should escalate instead of answering.",
      },
      {
        heading: "What information should a business bring?",
        body: "Useful inputs include service pages, FAQs, call scripts, forms, quote processes, scheduling rules, pricing boundaries, SOPs, policies, customer questions, lead sources, and examples of good and bad inquiries. The business does not need everything perfectly organized before the review. Part of the work is identifying which sources matter and which ones are too weak to use yet.",
      },
      {
        heading: "What comes out of the review?",
        body: "The output is a recommendation for what should be built first. That may be AI phone reception, a website assistant, a quote tool, a lead follow-up workflow, an internal knowledge assistant, a Supabase data layer, or a smaller cleanup step before any customer-facing AI goes live. A good review also defines what not to automate yet.",
      },
      {
        heading: "What does the buyer receive after submission?",
        body: "After the form is reviewed within one business day, the buyer should receive a practical next-step reply with a workflow map, first-system recommendation, and source-material checklist. Strong-fit projects move toward a 30-45 minute review call or an async workflow review. The recommendation should identify the first useful system, the source material needed, the guardrail risks, and whether the project should start with quote intake, reception, website assistance, internal search, or data cleanup.",
      },
      {
        heading: "How the granite and countertop beachhead changes the review",
        body: "For the current 30-day beachhead, Onyx looks hardest at countertop quote intake: material selection, square footage, edge details, sinks, backsplash, islands, timeline, showroom readiness, and follow-up. The review asks whether the website should guide buyers into a structured quote request before staff spend manual time on a vague inquiry.",
      },
      {
        heading: "What decisions does the review make clearer?",
        body: "The review clarifies which customer questions can be answered automatically, which details must be collected before staff follow up, where lead records should live, which sources are safe for public answers, and where staff need internal search instead of another inbox. It also separates platform usage from implementation work so the business can see what Retell, Supabase, email, scheduling, and hosting are responsible for before committing to a build.",
      },
      {
        heading: "When is a business not ready for AI implementation?",
        body: "A business may not be ready when service boundaries are unclear, pricing rules are not agreed on, documents contradict each other, staff cannot define the handoff process, or the owner wants the assistant to make promises the business cannot consistently keep. In those cases, the review should recommend cleanup first. That still moves the project forward because it turns vague AI interest into a concrete readiness checklist.",
      },
      {
        heading: "How is the submission used?",
        body: "The submission is used to evaluate fit and plan the next step. It is not sold or added to bulk outreach. If the project is not a strong fit yet, the reply should name the cleanup or readiness step that would make the operation safer to automate later.",
      },
      {
        heading: "Why the review comes before implementation",
        body: "AI implementation fails when the tool is chosen before the workflow is understood. The review prevents that mistake. It clarifies the business objective, data sources, handoff rules, success criteria, and management needs before building. That makes the implementation smaller, safer, and easier for the owner and staff to trust.",
      },
    ],
    relatedLinks: [
      { href: "/contact", label: "Request an AI Operations Review" },
      { href: "/services/ai-integration", label: "AI Business Operations Integration" },
      { href: "/services/reception-web-assistant", label: "Reception + Website Assistant" },
      { href: "/pricing", label: "Implementation Pricing" },
    ],
  },
  {
    slug: "ai-inventory-semantic-search",
    title: "Semantic Search for Business Inventory",
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
    title: "AI Inventory Search for Messy Vape Catalogs",
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

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
