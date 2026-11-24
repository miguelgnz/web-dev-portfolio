import { highlightsData } from "@/utils/data";

export default function Highlights() {
  return (
    <section aria-label="Highlights" className="border-b border-line">
      <div className="mx-auto max-w-[1200px] px-6">
        <dl className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {highlightsData.map((item) => (
            <div
              key={item.label}
              className="flex flex-col-reverse bg-bg px-5 py-8 odd:pl-0 lg:px-6 lg:odd:pl-6 lg:first:pl-0"
            >
              <dt className="text-sm text-muted">{item.label}</dt>
              <dd className="font-display text-[44px] font-semibold">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
