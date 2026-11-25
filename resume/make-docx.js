// Builds the Word version of the CV (same content as resume/cv.html).
// Usage: npm run resume:docx [output.docx]
const fs = require("fs");
const path = require("path");
const {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  LevelFormat,
  Packer,
  Paragraph,
  TabStopType,
  TextRun,
} = require("docx");

const INK = "18181B";
const BODY = "3F3F46";
const MUTED = "71717A";
const ACCENT = "3451C7";
const FONT = "Arial";
// Letter page, 0.6in side margins -> content width in DXA
const CONTENT_WIDTH = 12240 - 2 * 864;

const run = (text, opts = {}) =>
  new TextRun({ text, font: FONT, color: BODY, size: 20, ...opts });

const link = (text, url) =>
  new ExternalHyperlink({
    link: url,
    children: [run(text, { color: BODY, size: 18 })],
  });

const sectionTitle = (text) =>
  new Paragraph({
    keepNext: true,
    spacing: { before: 200, after: 80 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 4, color: "D4D4D8", space: 2 },
    },
    children: [
      run(text.toUpperCase(), {
        bold: true,
        color: ACCENT,
        size: 18,
        characterSpacing: 30,
      }),
    ],
  });

const roleHead = (company, title, dates) =>
  new Paragraph({
    keepNext: true,
    spacing: { before: 140, after: 0 },
    tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }],
    children: [
      run(company, { bold: true, color: INK, size: 21 }),
      run("  ·  ", { color: MUTED, size: 21 }),
      run(title, { color: INK, size: 21 }),
      run(`\t${dates}`, { color: MUTED, size: 19 }),
    ],
  });

const meta = (text) =>
  new Paragraph({
    keepNext: true,
    spacing: { after: 20 },
    children: [run(text, { color: MUTED, size: 19 })],
  });

const bullet = (text) =>
  new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 20 },
    children: [run(text)],
  });

const plain = (children, after = 20) =>
  new Paragraph({ spacing: { after }, children });

const skill = (label, value) =>
  plain([run(`${label}: `, { bold: true, color: INK }), run(value)], 30);

const doc = new Document({
  creator: "Miguel González",
  title: "Miguel González — Frontend Engineer — CV",
  styles: { default: { document: { run: { font: FONT, size: 20 } } } },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: { indent: { left: 300, hanging: 220 } },
              run: { color: ACCENT },
            },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 720, bottom: 720, left: 864, right: 864 },
        },
      },
      children: [
        new Paragraph({
          spacing: { after: 40 },
          children: [
            run("Miguel González", { bold: true, color: INK, size: 44 }),
          ],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [
            run(
              "Frontend Engineer · React · Next.js · TypeScript · AI-assisted development",
              { bold: true, color: ACCENT, size: 22 },
            ),
          ],
        }),
        new Paragraph({
          spacing: { after: 60 },
          border: {
            bottom: {
              style: BorderStyle.SINGLE,
              size: 12,
              color: INK,
              space: 6,
            },
          },
          children: [
            run("Guatemala City · Remote  ·  ", { size: 18 }),
            link("mgx.gon@gmail.com", "mailto:mgx.gon@gmail.com"),
            run(" · ", { size: 18 }),
            link("miguelgnz.dev", "https://www.miguelgnz.dev"),
            run(" · ", { size: 18 }),
            link(
              "linkedin.com/in/miguel-gnz",
              "https://www.linkedin.com/in/miguel-gnz/",
            ),
            run(" · ", { size: 18 }),
            link("github.com/miguelgnz", "https://github.com/miguelgnz"),
          ],
        }),

        sectionTitle("Summary"),
        plain([
          run("Frontend Engineer with "),
          run("5+ years", { bold: true, color: INK }),
          run(
            " building production web apps in financial services, healthcare and cybersecurity — from Figma to API integration, tests and AWS delivery. Brings a ",
          ),
          run("QA mindset", { bold: true, color: INK }),
          run(" from freelance testing across API, web and mobile, and an "),
          run("AI-first workflow", { bold: true, color: INK }),
          run(
            " with Claude Code (project memory, custom skills, subagents, MCP). Fluent English.",
          ),
        ]),

        sectionTitle("Experience"),
        roleHead("Vana", "Software Engineer", "Feb 2025 – Present"),
        meta(
          "Primary frontend engineer for three production collections apps used by agents, supervisors and admins",
        ),
        bullet(
          "Implemented the redesigned agent app from Figma: one customer view for calls, payment reminders and outcomes.",
        ),
        bullet(
          "Built supervisor dashboards (agent stats, status counts) and bulk import/export of collection activity.",
        ),
        bullet(
          "Created the supervisor app: Terraform for S3, CloudFront and Cognito; GitHub Actions deploys and PR checks.",
        ),
        bullet(
          "Shipped supervisor account and agency management in React, TypeScript, TanStack Query and Ant Design.",
        ),
        bullet(
          "Integrate REST APIs, write Jest unit tests and docs, and contribute to technical decisions and sprint demos.",
        ),

        roleHead("Mekapal", "QA Engineer (Freelance)", "Sep 2026 – Present"),
        meta(
          "Remote · On-demand freight platform: API, web backoffice and iOS/Android apps",
        ),
        bullet(
          "Tested 40+ user stories to Done: auth, sessions, onboarding, vehicles, zones, commissions, VAT and payouts.",
        ),
        bullet(
          "Reported 29 defects and contract gaps (session revocation, account enumeration, rate limiting); retested all.",
        ),
        bullet(
          "Built a Claude Code QA workspace: six custom skills for test plans, API evidence and Jira via Atlassian MCP.",
        ),

        roleHead(
          "3Pillar Global",
          "Senior Software Engineer",
          "Apr 2022 – Sep 2024",
        ),
        bullet(
          "Cybersecurity portal: alert dashboards, ticket submission and user management (React, TypeScript, GraphQL).",
        ),
        bullet(
          "Healthcare: insurance-based obstetrics scheduling with a real-time video SDK (Next.js, MUI, Jest).",
        ),
        bullet(
          "Translated Figma designs into interfaces, integrated APIs and shipped updates through GitHub Actions.",
        ),

        roleHead("Cognits", "Software Engineer", "Jun 2020 – Apr 2022"),
        bullet(
          "Mobile and web banking apps for two banks (Colombia, Costa Rica), both in production; balances and transfers.",
        ),

        sectionTitle("Projects"),
        roleHead("CC Bot Tracker", "Personal project, in production", "2026"),
        bullet(
          "Private Telegram bot that imports bank purchase alerts from Gmail and answers spending questions in Spanish.",
        ),
        bullet(
          "Built in reviewed stages with Claude Code: Node.js, TypeScript, PostgreSQL, OpenAI; 260+ tests; AWS Lightsail.",
        ),

        sectionTitle("Skills"),
        skill(
          "Frontend",
          "React, Next.js (App Router), TypeScript, JavaScript, HTML, CSS, accessibility",
        ),
        skill(
          "UI & Data",
          "Tailwind CSS, Ant Design, Material UI, Styled Components, TanStack Query, REST, GraphQL",
        ),
        skill(
          "Testing & QA",
          "Jest, React Testing Library, Vitest, Postman, API testing, test planning, Jira",
        ),
        skill(
          "Cloud & Delivery",
          "AWS (S3, CloudFront, Cognito, Lightsail), Terraform, GitHub Actions, Vercel, Git",
        ),
        skill(
          "AI Engineering",
          "Claude Code (CLAUDE.md, skills, subagents, plan mode), MCP (Figma, Atlassian, Postman), OpenCode, Copilot, OpenAI API",
        ),

        sectionTitle("Education & Languages"),
        plain([
          run("Universidad Mariano Gálvez de Guatemala", {
            bold: true,
            color: INK,
          }),
          run(" — Systems Engineering (coursework completed), 2014 – 2019"),
        ]),
        plain([
          run("Spanish", { bold: true, color: INK }),
          run(" — Native  ·  "),
          run("English", { bold: true, color: INK }),
          run(" — Fluent, professional communication with international teams"),
        ]),
      ],
    },
  ],
});

const out =
  process.argv[2] ||
  path.join(__dirname, "dist", "Miguel_Gonzalez_Frontend_Engineer_CV.docx");

Packer.toBuffer(doc).then((buffer) => {
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, buffer);
  console.log("Wrote", out);
});
