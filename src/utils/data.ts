import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  LuBot,
  LuCloud,
  LuDatabase,
  LuFileText,
  LuListChecks,
  LuMail,
  LuMessageCircle,
  LuRefreshCw,
  LuShieldCheck,
  LuSparkles,
} from "react-icons/lu";
import {
  SiClaude,
  SiGithubactions,
  SiJest,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVitest,
} from "react-icons/si";

// ---------------------------------------------------------------------------
// Site & profile
// ---------------------------------------------------------------------------

export const siteData = {
  url: "https://www.miguelgnz.dev",
  domainLabel: "miguelgnz.dev",
  name: "Miguel González",
  firstName: "Miguel",
  lastName: "González",
  role: "Frontend Engineer",
  roleLine: "Frontend Engineer · QA · AI-assisted development",
  tagline: "Frontend engineer with a QA mindset and an AI-first workflow.",
  description:
    "Miguel González — Frontend Engineer with 5+ years building production React and Next.js apps, a QA mindset and an AI-first workflow with Claude Code.",
  availability: "Open to remote frontend roles",
  location: "Guatemala City · GMT-6",
  languages: "English · Spanish",
  avatar: "/miguel-pixel-avatar-v2/navbar/miguel-head-256.png",
  avatarAlt: "Pixel-art portrait of Miguel",
  resumeUrl:
    "https://drive.google.com/file/d/1uLlEibcZCC1Ho1BRY5J-4auTdwg_d-DY/view?usp=drive_link",
};

export const contactData = {
  github: "https://github.com/miguelgnz",
  githubHandle: "miguelgnz",
  linkedin: "https://www.linkedin.com/in/miguel-gnz/",
  linkedinHandle: "in/miguel-gnz",
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "AI workflow", href: "#ai" },
  { label: "Experience", href: "#experience" },
];

// ---------------------------------------------------------------------------
// Highlights row (keep every number verifiable)
// ---------------------------------------------------------------------------

type Highlight = { value: string; label: string };

export const highlightsData = [
  { value: "5+", label: "years building for the web" },
  { value: "3", label: "production apps owned at Vana" },
  { value: "40+", label: "user stories QA’d to Done at Mekapal" },
  { value: "260+", label: "automated tests in CC Bot Tracker" },
] satisfies Highlight[];

// ---------------------------------------------------------------------------
// Selected work
// ---------------------------------------------------------------------------

type ArchitectureNode = {
  icon: IconType;
  title: string;
  detail: string;
  emphasis?: "accent" | "optional";
};

type ChatMessage = { from: "me" | "bot"; text: string };

export const caseStudyData = {
  title: "CC Bot Tracker",
  badges: ["Case study", "2026", "Private repo", "In production"],
  summary:
    "A private Telegram bot that reads bank purchase alerts from Gmail and answers spending questions in plain Spanish — by billing cycle, month, merchant or currency.",
  process:
    "I designed it in reviewed stages with Claude Code: each stage had a written plan, explicit limits and its own tests before moving on.",
  facts: [
    { label: "Role", value: "Design, build, test, deploy" },
    {
      label: "Stack",
      value:
        "Node 22, TypeScript, PostgreSQL 17, Telegram Bot API, Gmail API, OpenAI",
    },
    { label: "Infra", value: "AWS Lightsail, systemd, encrypted S3 backups" },
    {
      label: "Quality",
      value: "260+ unit, database and HTTP tests · Postman collections",
    },
  ],
  architecture: [
    { icon: LuMail, title: "Gmail API", detail: "read-only OAuth" },
    { icon: LuRefreshCw, title: "Sync worker", detail: "parse · dedupe" },
    {
      icon: LuDatabase,
      title: "PostgreSQL 17",
      detail: "purchases · cycles · budgets",
      emphasis: "accent",
    },
    {
      icon: LuMessageCircle,
      title: "Telegram bot",
      detail: "owner-only gate",
    },
    {
      icon: LuSparkles,
      title: "OpenAI",
      detail: "optional NL queries",
      emphasis: "optional",
    },
    {
      icon: LuCloud,
      title: "AWS",
      detail: "Lightsail · S3 backups",
      emphasis: "optional",
    },
  ] satisfies ArchitectureNode[],
  // Illustrative conversation with sample data — replace with the screen recording.
  chat: [
    { from: "me", text: "/ciclo" },
    {
      from: "bot",
      text: "Ciclo actual · cierra 25 nov\nTotal: Q 3,482.10\n18 compras\nPago esperado: 15 dic",
    },
    { from: "me", text: "/compras de hoy" },
    {
      from: "bot",
      text: "Hoy · 2 compras\nSupermercado · Q 214.35\nGasolinera · Q 300.00",
    },
    { from: "me", text: "¿cuánto gasté en gasolina este mes?" },
  ] satisfies ChatMessage[],
  chatCaption: "Illustrative demo · sample data",
};

type Project = {
  title: string;
  label: string;
  description: string;
  stack: string;
  image: string;
  imageAlt: string;
  liveUrl?: string;
  sourceUrl?: string;
};

export const projectsData = [
  {
    title: "Tattoo Studio SPA",
    label: "Client work · Live",
    description:
      "Responsive single-page site for a local tattoo studio: artists, featured work gallery, location and WhatsApp contact.",
    stack: "Next.js · TypeScript · MUI",
    image: "/mdt.png",
    imageAlt: "Tattoo Studio site: featured art gallery",
    liveUrl: "https://mdt-ui.vercel.app",
    sourceUrl: "https://github.com/miguelgnz/mdt_ui",
  },
] satisfies Project[];

// ---------------------------------------------------------------------------
// AI workflow
// ---------------------------------------------------------------------------

type WorkflowStep = {
  icon: IconType;
  step: string;
  title: string;
  description: string;
};

export const aiWorkflowData = {
  title: "How I work with AI",
  intro:
    "I treat agents like a teammate who needs context and review. Each repo carries its own instructions, every change starts with a plan I approve, and nothing ships without tests and my eyes on the diff.",
  steps: [
    {
      icon: LuFileText,
      step: "01 Context",
      title: "CLAUDE.md & AGENTS.md",
      description:
        "Architecture, commands, conventions and pitfalls written down for the agent.",
    },
    {
      icon: LuListChecks,
      step: "02 Plan",
      title: "Plan mode & staged specs",
      description:
        "Scope agreed before code; big features split into reviewed stages.",
    },
    {
      icon: LuBot,
      step: "03 Build",
      title: "Skills, subagents, MCPs",
      description:
        "Figma, Atlassian and Postman MCPs bring real designs and tickets in.",
    },
    {
      icon: LuShieldCheck,
      step: "04 Verify",
      title: "Tests & review",
      description:
        "Agent runs tests and lint; I review every diff before merge.",
    },
  ] satisfies WorkflowStep[],
  practice: {
    label: "In practice · Mekapal QA workspace",
    description:
      "I built a Claude Code workspace for my QA work: six custom skills cover the ticket lifecycle, the Atlassian MCP connects it to Jira, and every API check leaves redacted JSON evidence.",
    skills: [
      {
        command: "/qa-ticket",
        description: "test plan from acceptance criteria",
      },
      { command: "/api-test", description: "staging checks + saved evidence" },
      {
        command: "/bug-subtask",
        description: "defect filed in Jira with repro steps",
      },
      {
        command: "/doc-ticket · /uat",
        description: "results and sign-off, after my approval",
      },
    ],
  },
  tools: [
    "Claude Code",
    "OpenCode",
    "GitHub Copilot",
    "OpenAI API",
    "MCP: Figma · Atlassian · Postman",
    "Custom skills · Subagents",
  ],
};

// ---------------------------------------------------------------------------
// Experience (array order = display order, newest first)
// ---------------------------------------------------------------------------

type Experience = {
  company: string;
  role: string;
  dates: string;
  meta: string;
  current?: boolean;
  summary: string;
  bullets?: string[];
  tags: string[];
};

export const experienceData = [
  {
    company: "Vana",
    role: "Software Engineer",
    dates: "Feb 2025 — Present",
    meta: "Full-time · Guatemala City",
    current: true,
    summary:
      "Collections platform for overdue loan, credit card and installment accounts. I'm the primary frontend engineer for its three production apps, used by collection agents, supervisors and administrators.",
    bullets: [
      "Implemented the redesigned agent app from Figma, bringing all customer information into one view for collection calls, with payment reminders and contact-outcome recording.",
      "Built supervisor dashboards for agent statistics and status counts, plus bulk import and export of collection activity records.",
      "Created the supervisor app from scratch: repository, S3 + CloudFront + Cognito provisioned with Terraform, and GitHub Actions for deployments and unit-test checks on every pull request.",
      "Shipped supervisor account creation, password changes and resets, and collection agency management.",
      "Integrate APIs, write unit tests and documentation, and take part in technical decisions and sprint demos.",
    ],
    tags: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Ant Design",
      "Figma",
      "Unit testing",
      "Terraform",
      "AWS",
      "GitHub Actions",
    ],
  },
  {
    company: "Mekapal",
    role: "QA Engineer",
    dates: "Sep 2026 — Present",
    meta: "Freelance · Remote",
    current: true,
    summary:
      "On-demand freight platform connecting customers with truck, car and motorcycle carriers for light, heavy and express loads. I test across the API, the web backoffice and the iOS/Android apps.",
    bullets: [
      "Tested 40+ user stories through to Done across two phases: auth and sessions, customer and carrier onboarding, vehicles, work zones, commissions, VAT and payout accounts.",
      "Reported 29 defects and contract discrepancies, including session-revocation, account-enumeration and rate-limiting gaps, and retested every fix.",
      "Phase 1 alone: 120+ documented test cases with screenshots, recordings and API evidence attached in Jira.",
    ],
    tags: ["Postman", "Jira", "iOS", "Android", "Claude Code", "Atlassian MCP"],
  },
  {
    company: "3Pillar Global",
    role: "Senior Software Engineer",
    dates: "Apr 2022 — Sep 2024",
    meta: "Cybersecurity · Healthcare",
    summary:
      "Cybersecurity portal (alert dashboards, tickets, user management) and healthcare scheduling with real-time video consultations.",
    tags: ["React", "Next.js", "TypeScript", "GraphQL", "MUI"],
  },
  {
    company: "Cognits",
    role: "Software Engineer",
    dates: "Jun 2020 — Apr 2022",
    meta: "Banking",
    summary:
      "Mobile and web banking apps for two banks in Colombia and Costa Rica, both in production.",
    tags: ["JavaScript", "REST APIs", "CSS Modules"],
  },
] satisfies Experience[];

// ---------------------------------------------------------------------------
// Stack
// ---------------------------------------------------------------------------

type StackItem = { name: string; icon: IconType };

export const stackData = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TanStack Query", icon: SiReactquery },
  { name: "Jest", icon: SiJest },
  { name: "Vitest", icon: SiVitest },
  { name: "Postman", icon: SiPostman },
  { name: "AWS", icon: FaAws },
  { name: "Terraform", icon: SiTerraform },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Claude Code", icon: SiClaude },
] satisfies StackItem[];
