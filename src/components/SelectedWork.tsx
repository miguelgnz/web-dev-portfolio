import { FaGithub } from "react-icons/fa6";
import { LuArrowUpRight, LuLock } from "react-icons/lu";

import BrowserFrame from "@/components/BrowserFrame";
import PhoneMock from "@/components/PhoneMock";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { caseStudyData, contactData, projectsData } from "@/utils/data";

function CaseStudy() {
  return (
    <article className="flex flex-col gap-10 rounded-3xl border border-line-strong bg-surface p-[clamp(20px,4vw,48px)]">
      <div className="flex flex-wrap items-center gap-12">
        <div className="flex min-w-0 flex-[999_1_420px] flex-col gap-5">
          <ul className="flex flex-wrap gap-2 font-mono text-xs uppercase">
            {caseStudyData.badges.map((badge, index) => (
              <li
                key={badge}
                className={`inline-flex items-center gap-1.5 rounded-full bg-surface-3 px-2.5 py-1 ${
                  index === 0 ? "text-accent" : "text-muted"
                }`}
              >
                {badge === "Private repo" && (
                  <LuLock aria-hidden="true" className="size-3" />
                )}
                {badge}
              </li>
            ))}
          </ul>
          <h3 className="font-display text-[clamp(36px,4.4vw,56px)] leading-[1.05] font-semibold tracking-[-0.03em]">
            {caseStudyData.title}
          </h3>
          <p className="text-lg text-fg-3">{caseStudyData.summary}</p>
          <p className="text-muted">{caseStudyData.process}</p>
          <dl className="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-2.5 text-sm">
            {caseStudyData.facts.map((fact) => (
              <div key={fact.label} className="contents">
                <dt className="text-muted">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <PhoneMock />
      </div>

      <div className="border-t border-line-strong pt-8">
        <h4 className="sr-only">Architecture</h4>
        <ol className="flex flex-wrap gap-3 font-mono text-[13px]">
          {caseStudyData.architecture.map((node) => {
            const Icon = node.icon;
            const border =
              node.emphasis === "accent"
                ? "border-accent"
                : node.emphasis === "optional"
                  ? "border-dashed border-line-bright"
                  : "border-line-strong";
            return (
              <li
                key={node.title}
                className={`flex flex-[1_1_160px] flex-col gap-1.5 rounded-xl border p-4 ${border}`}
              >
                <Icon aria-hidden="true" className="size-5" />
                <span>{node.title}</span>
                <span className="text-xs text-muted">{node.detail}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </article>
  );
}

export default function SelectedWork() {
  return (
    <section
      aria-labelledby="work-title"
      id="work"
      className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-24"
    >
      <SectionHeader id="work-title" title="Selected work" index="01" />

      <Reveal>
        <CaseStudy />
      </Reveal>

      {projectsData.map((project) => (
        <Reveal key={project.title}>
          <article className="flex flex-wrap items-center gap-8 rounded-[20px] border border-line-strong p-6">
            <BrowserFrame
              src={project.image}
              alt={project.imageAlt}
              width={project.imageWidth}
              height={project.imageHeight}
            />
            <div className="flex min-w-0 flex-[999_1_320px] flex-col gap-3">
              <p className="font-mono text-xs text-muted uppercase">
                {project.label}
              </p>
              <h3 className="font-display text-[28px] font-semibold tracking-[-0.02em]">
                {project.title}
              </h3>
              <p className="max-w-[52ch] text-muted">{project.description}</p>
              <p className="font-mono text-xs text-muted">{project.stack}</p>
              <div className="flex flex-wrap gap-5 text-sm">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 hover:underline"
                  >
                    Live site
                    <LuArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    className="inline-flex items-center gap-1.5 hover:underline"
                  >
                    Code
                    <LuArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                )}
              </div>
            </div>
          </article>
        </Reveal>
      ))}

      <a
        href={contactData.github}
        className="inline-flex items-center gap-2 self-start text-sm text-muted transition-colors hover:text-fg"
      >
        <FaGithub aria-hidden="true" className="size-4" />
        More on GitHub
        <LuArrowUpRight aria-hidden="true" className="size-3.5" />
      </a>
    </section>
  );
}
