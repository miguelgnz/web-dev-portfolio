import Image from "next/image";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

type BrowserFrameProps = {
  src: string;
  alt: string;
  href?: string;
};

export default function BrowserFrame({ src, alt, href }: BrowserFrameProps) {
  const content = (
    <>
      <div className="flex items-center gap-3 border-b border-line-strong bg-[#1f1f23] px-3.5 py-2.5">
        <div aria-hidden="true" className="flex gap-1.5">
          <span className="size-[11px] rounded-full bg-[#ff5f57]" />
          <span className="size-[11px] rounded-full bg-[#febc2e]" />
          <span className="size-[11px] rounded-full bg-[#28c840]" />
        </div>
        <div aria-hidden="true" className="flex gap-2 text-subtle">
          <LuChevronLeft className="size-3.5" />
          <LuChevronRight className="size-3.5" />
        </div>
      </div>
      <div className="relative aspect-[16/10] bg-black">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover object-top"
        />
      </div>
    </>
  );

  const frameClass =
    "flex flex-[1_1_380px] flex-col overflow-hidden rounded-[14px] border border-line-bright bg-surface-3 shadow-[0_24px_48px_rgba(0,0,0,0.45)]";

  return href ? (
    <a
      href={href}
      className={`${frameClass} transition-transform hover:-translate-y-1`}
    >
      {content}
    </a>
  ) : (
    <div className={frameClass}>{content}</div>
  );
}
