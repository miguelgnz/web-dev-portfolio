import type { MetadataRoute } from "next";

import { siteData } from "@/utils/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteData.url,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
