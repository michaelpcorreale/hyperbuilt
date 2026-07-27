import type { MetadataRoute } from "next";

// Static export: emitted as /sitemap.xml at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hyperbuilt.com/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
