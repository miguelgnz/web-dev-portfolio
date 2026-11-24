import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { siteData } from "@/utils/data";

export const dynamic = "force-static";
const size = { width: 1200, height: 630 };

export async function GET() {
  const avatar = await readFile(
    path.join(
      process.cwd(),
      "public/miguel-pixel-avatar-v2/navbar/miguel-head-512.png",
    ),
  );
  const avatarSrc = `data:image/png;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#09090b",
        backgroundImage:
          "linear-gradient(#141418 1px, transparent 1px), linear-gradient(90deg, #141418 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        color: "#fafafa",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 112,
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          <span>{siteData.firstName}</span>
          <span>{siteData.lastName}</span>
        </div>
        <div style={{ fontSize: 30, color: "#8ea8ff" }}>
          {siteData.roleLine}
        </div>
        <div style={{ fontSize: 26, color: "#a1a1aa" }}>
          {siteData.domainLabel}
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element -- next/og renders plain <img> only */}
      <img
        src={avatarSrc}
        alt=""
        width={300}
        height={300}
        style={{ imageRendering: "pixelated" }}
      />
    </div>,
    size,
  );
}
