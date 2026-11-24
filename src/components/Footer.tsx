import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";

import { contactData, siteData } from "@/utils/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 pt-24 pb-12">
        <h2 className="max-w-[16ch] font-display text-[clamp(36px,6vw,80px)] leading-none font-semibold tracking-[-0.035em]">
          Have a frontend role in mind? Let’s talk.
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href={siteData.resumeUrl}
            className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3.5 font-semibold text-bg transition-opacity hover:opacity-90"
          >
            <LuDownload aria-hidden="true" className="size-[18px]" />
            Download CV
          </a>
          <a
            href={contactData.linkedin}
            className="inline-flex items-center gap-2 rounded-full border border-line-bright px-6 py-3.5 transition-colors hover:border-fg-3"
          >
            <FaLinkedin aria-hidden="true" className="size-[18px]" />
            LinkedIn
          </a>
          <a
            href={contactData.github}
            className="inline-flex items-center gap-2 rounded-full border border-line-bright px-6 py-3.5 transition-colors hover:border-fg-3"
          >
            <FaGithub aria-hidden="true" className="size-[18px]" />
            GitHub
          </a>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-line pt-8 text-[13px] text-muted">
          <span>
            © {year} {siteData.name} · {siteData.domainLabel}
          </span>
          <span className="font-mono">
            Next.js · Tailwind · built with Claude Code
          </span>
        </div>
      </div>
    </footer>
  );
}
