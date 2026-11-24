import { LuBot } from "react-icons/lu";

import { caseStudyData } from "@/utils/data";

// Static Telegram-style chat. Swap for an autoplaying <video> once the
// screen recording (with synthetic data) is ready.
export default function PhoneMock() {
  return (
    <figure className="flex flex-[1_1_300px] flex-col items-center gap-3">
      <div
        role="img"
        aria-label="Telegram conversation with CC Bot Tracker showing cycle totals and today's purchases"
        className="flex h-[600px] w-[300px] max-w-full flex-col overflow-hidden rounded-[44px] border-[10px] border-[#1f1f23] bg-[#0e1621]"
      >
        <div className="flex items-center gap-2.5 bg-[#17212b] px-4 pt-[18px] pb-3 text-[13px]">
          <span className="flex size-8 items-center justify-center rounded-full bg-accent text-bg">
            <LuBot aria-hidden="true" className="size-[18px]" />
          </span>
          <div>
            <div className="font-semibold">{caseStudyData.title}</div>
            <div className="text-[11px] text-[#8b9bab]">bot</div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2.5 px-3 py-4 text-[13px] leading-snug">
          {caseStudyData.chat.map((message, index) => (
            <p
              key={index}
              className={
                message.from === "me"
                  ? "max-w-[75%] self-end rounded-[14px_14px_4px_14px] bg-[#2b5278] px-3 py-2"
                  : "max-w-[85%] self-start rounded-[14px_14px_14px_4px] bg-[#182533] px-3 py-2.5 whitespace-pre-line"
              }
            >
              {message.text}
            </p>
          ))}
        </div>
      </div>
      <figcaption className="font-mono text-xs text-muted">
        {caseStudyData.chatCaption}
      </figcaption>
    </figure>
  );
}
