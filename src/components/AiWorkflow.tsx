import Reveal from "@/components/Reveal";
import { aiWorkflowData } from "@/utils/data";

export default function AiWorkflow() {
  const { title, intro, steps, practices, tools } = aiWorkflowData;

  return (
    <section
      id="ai"
      aria-labelledby="ai-title"
      className="border-y border-line bg-surface-2"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <h2
            id="ai-title"
            className="font-display text-[clamp(34px,4vw,44px)] leading-[1.1] font-semibold tracking-[-0.02em]"
          >
            {title}
          </h2>
          <p className="text-[17px] text-muted">{intro}</p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.step}>
                <Reveal className="flex h-full flex-col gap-2.5 rounded-2xl border border-line-strong p-6">
                  <Icon aria-hidden="true" className="size-6 text-accent" />
                  <span className="font-mono text-xs text-muted uppercase">
                    {step.step}
                  </span>
                  <strong className="font-semibold">{step.title}</strong>
                  <span className="text-[15px] text-muted">
                    {step.description}
                  </span>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <div className="flex flex-col gap-4">
          {practices.map((practice) => (
            <Reveal key={practice.label}>
              <div className="flex flex-col gap-4 rounded-2xl border border-line-strong bg-bg p-7">
                <p className="font-mono text-xs text-accent uppercase">
                  {practice.label}
                </p>
                <p className="max-w-[80ch] text-fg-3">{practice.description}</p>
                <dl className="grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                  {practice.items.map((item) => (
                    <div key={item.name}>
                      <dt>
                        {"code" in item && item.code ? (
                          <code className="font-mono">{item.name}</code>
                        ) : (
                          <span className="font-medium">{item.name}</span>
                        )}
                      </dt>
                      <dd className="text-muted">{item.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        <ul className="flex flex-wrap gap-2 text-[13px]">
          {tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-line-strong px-3 py-1.5 text-fg-3"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
