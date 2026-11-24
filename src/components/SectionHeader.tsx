type SectionHeaderProps = {
  id: string;
  title: string;
  index: string;
};

export default function SectionHeader({
  id,
  title,
  index,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-3">
      <h2
        id={id}
        className="font-display text-[clamp(34px,4vw,44px)] font-semibold tracking-[-0.02em]"
      >
        {title}
      </h2>
      <span aria-hidden="true" className="font-mono text-[13px] text-muted">
        {index}
      </span>
    </div>
  );
}
