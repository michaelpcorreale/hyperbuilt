import type { MetadataRoute } from "next";

// Static export: emitted as /sitemap.xml at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hyperbuilt.com/",
      changeFrequency: "monthly",
      priority: 1,
      images: [
        "https://hyperbuilt.com/uploads/og-image.jpg",
        "https://hyperbuilt.com/uploads/v3/mission.min.jpg",
        "https://hyperbuilt.com/uploads/v3/cell-photo.min.jpg",
        "https://hyperbuilt.com/uploads/v3/workbench.min.jpg",
      ],
    },
  ];
}
