"use client";

import Image from "next/image";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight, LuPause, LuPlay } from "react-icons/lu";

type BrowserFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Browser window showing a full-page screenshot that scrolls slowly on a loop
// (CSS `page-scroll` in globals.css). It pauses on hover and with the button,
// and stays at the top for prefers-reduced-motion users.
export default function BrowserFrame({
  src,
  alt,
  width,
  height,
}: BrowserFrameProps) {
  const [paused, setPaused] = useState(false);

  return (
    <div className="group flex flex-[1_1_460px] flex-col overflow-hidden rounded-[14px] border border-line-bright bg-surface-3 shadow-[0_24px_48px_rgba(0,0,0,0.45)]">
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
          width={width}
          height={height}
          sizes="(min-width: 1024px) 640px, 100vw"
          data-paused={paused}
          className="page-scroll absolute inset-0 size-full"
        />
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={
            paused ? "Resume page preview scroll" : "Pause page preview scroll"
          }
          className="page-scroll-toggle absolute right-3 bottom-3 flex size-11 items-center justify-center rounded-full bg-bg/80 text-fg backdrop-blur transition-colors hover:bg-bg"
        >
          {paused ? (
            <LuPlay aria-hidden="true" className="size-5" />
          ) : (
            <LuPause aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>
    </div>
  );
}
