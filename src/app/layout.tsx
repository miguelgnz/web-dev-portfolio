import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { contactData, siteData } from "@/utils/data";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const title = `${siteData.name} — ${siteData.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),
  title: {
    default: title,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteData.domainLabel,
    title,
    description: siteData.tagline,
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteData.tagline,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/miguel-pixel-avatar-v2/favicon/favicon.ico", sizes: "any" },
      {
        url: "/miguel-pixel-avatar-v2/favicon/favicon-32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: "/miguel-pixel-avatar-v2/navbar/miguel-head-256.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteData.name,
  jobTitle: siteData.role,
  url: siteData.url,
  image: `${siteData.url}${siteData.avatar}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guatemala City",
    addressCountry: "GT",
  },
  knowsLanguage: ["en", "es"],
  sameAs: [contactData.github, contactData.linkedin],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
