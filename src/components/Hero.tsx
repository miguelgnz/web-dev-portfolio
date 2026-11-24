import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuArrowRight, LuDownload, LuGlobe, LuMapPin } from "react-icons/lu";

import { contactData, siteData } from "@/utils/data";

export default function Hero() {
  return (
    <section aria-label="Intro" className="grid-backdrop border-b border-line">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-6 pt-20 pb-20 md:pt-26 md:pb-22">
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-6">
          <p className="inline-flex items-center gap-2.5 self-start rounded-full border border-line-strong bg-surface px-3.5 py-1.5 text-[13px] text-muted">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-accent"
            />
            {siteData.availability}
          </p>

          <h1 className="font-display text-[clamp(52px,9vw,128px)] leading-[0.95] font-bold tracking-[-0.045em]">
            {siteData.firstName}
            <br />
            {siteData.lastName}
          </h1>

          <p className="font-mono text-[clamp(14px,1.6vw,18px)] text-accent">
            {siteData.roleLine}
          </p>

          <p className="max-w-[34ch] font-display text-[clamp(22px,2.6vw,32px)] leading-tight tracking-[-0.01em] text-fg-2">
            {siteData.tagline}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3.5 font-semibold text-bg transition-opacity hover:opacity-90"
            >
              See the case study
              <LuArrowRight aria-hidden="true" className="size-[18px]" />
            </a>
            <a
              href={siteData.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-line-bright px-6 py-3.5 transition-colors hover:border-fg-3"
            >
              <LuDownload aria-hidden="true" className="size-[18px]" />
              Download CV
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-7 gap-y-2 pt-4 text-sm text-muted">
            <li className="inline-flex items-center gap-2">
              <LuMapPin aria-hidden="true" className="size-4" />
              {siteData.location}
            </li>
            <li className="inline-flex items-center gap-2">
              <LuGlobe aria-hidden="true" className="size-4" />
              {siteData.languages}
            </li>
            <li>
              <a
                href={contactData.github}
                className="inline-flex items-center gap-2 transition-colors hover:text-fg"
              >
                <FaGithub aria-hidden="true" className="size-4" />
                {contactData.githubHandle}
              </a>
            </li>
            <li>
              <a
                href={contactData.linkedin}
                className="inline-flex items-center gap-2 transition-colors hover:text-fg"
              >
                <FaLinkedin aria-hidden="true" className="size-4" />
                {contactData.linkedinHandle}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-[1_1_300px] justify-center">
          <div className="dot-backdrop flex aspect-square w-full max-w-[360px] items-center justify-center rounded-[28px] border border-line-strong bg-surface">
            <Image
              src="/miguel-pixel-avatar-v2/navbar/miguel-head-512.png"
              alt={siteData.avatarAlt}
              width={280}
              height={280}
              className="pixelated h-[78%] w-[78%] object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
