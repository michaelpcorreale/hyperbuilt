import type { NextConfig } from "next";

// On GitHub Pages the site is served from a subpath (e.g. /hyperbuilt), set via
// NEXT_PUBLIC_BASE_PATH in the deploy workflow. Locally it's unset, so the app
// runs at the root. `output: "export"` emits a fully static site into `out/`.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
