import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";

import { contactData, navItems, siteData } from "@/utils/data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-6 py-3"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-lg font-bold"
        >
          <Image
            src={siteData.avatar}
            alt=""
            width={36}
            height={36}
            className="pixelated size-9"
            priority
          />
          miguelgnz<span className="text-muted">.dev</span>
        </a>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden py-2.5 text-muted transition-colors hover:text-fg sm:inline-block"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center">
            <a
              href={contactData.github}
              aria-label="GitHub"
              className="p-2.5 text-muted transition-colors hover:text-fg"
            >
              <FaGithub aria-hidden="true" className="size-5" />
            </a>
            <a
              href={contactData.linkedin}
              aria-label="LinkedIn"
              className="p-2.5 text-muted transition-colors hover:text-fg"
            >
              <FaLinkedin aria-hidden="true" className="size-5" />
            </a>
          </div>
          <a
            href={siteData.resumeUrl}
            className="inline-flex items-center gap-2 rounded-full border border-line-bright px-4 py-2.5 transition-colors hover:border-fg-3"
          >
            <LuDownload aria-hidden="true" className="size-4" />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
