import type { MetadataRoute } from "next";

// Static export: emitted as /robots.txt at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://hyperbuilt.com/sitemap.xml",
    host: "https://hyperbuilt.com",
  };
}
