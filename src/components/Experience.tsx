import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { experienceData, stackData } from "@/utils/data";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-24"
    >
      <SectionHeader id="experience-title" title="Experience" index="03" />

      <ol className="relative">
        <span
          aria-hidden="true"
          className="absolute top-[34px] bottom-10 left-[11px] w-0.5 bg-line-strong"
        />
        {experienceData.map((job, index) => {
          const isLast = index === experienceData.length - 1;
          return (
            <li
              key={`${job.company}-${job.dates}`}
              className={`relative pl-12 ${isLast ? "" : "pb-6"}`}
            >
              {job.current ? (
                <span
                  aria-hidden="true"
                  className="absolute top-[26px] left-[3px] size-[18px] rounded-full border-4 border-bg bg-accent shadow-[0_0_0_1px_var(--color-accent)]"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="absolute top-7 left-[5px] size-3.5 rounded-full border-2 border-[#52525b] bg-bg"
                />
              )}

              <Reveal>
                <article
                  className={`flex flex-col gap-3 rounded-2xl p-6 ${
                    job.current
                      ? "border border-line-strong bg-surface"
                      : "border border-line"
                  }`}
                >
                  <p
                    className={`flex flex-wrap items-center gap-2.5 font-mono text-[13px] ${
                      job.current ? "text-accent" : "text-muted"
                    }`}
                  >
                    <span>{job.dates}</span>
                    {job.current && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-medium text-bg">
                        NOW
                      </span>
                    )}
                    <span className="inline-flex items-center gap-2.5 text-muted">
                      <span aria-hidden="true" className="text-subtle">
                        ·
                      </span>
                      {job.meta}
                    </span>
                  </p>

                  <h3 className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
                    <span className="font-display text-[26px] font-semibold tracking-[-0.02em]">
                      {job.company}
                    </span>
                    <span className="inline-flex items-baseline gap-3.5 text-base font-normal text-fg-3">
                      <span
                        aria-hidden="true"
                        className="text-[22px] leading-none text-[#52525b]"
                      >
                        ·
                      </span>
                      {job.role}
                    </span>
                  </h3>

                  <p className="text-muted">{job.summary}</p>

                  {job.bullets && (
                    <ul className="flex list-disc flex-col gap-1 pl-[18px] text-muted">
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  <ul className="flex flex-wrap gap-1.5 font-mono text-xs text-fg-3">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-line-strong px-2 py-0.5"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>

      <div className="flex flex-col gap-4 pt-6">
        <h3 className="font-mono text-[13px] font-medium text-muted">STACK</h3>
        <ul className="flex flex-wrap gap-2 text-sm">
          {stackData.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.name}
                className="inline-flex items-center gap-2 rounded-[10px] border border-line-strong px-3.5 py-2"
              >
                <Icon aria-hidden="true" className="size-4 text-fg-3" />
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
