import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import "./globals.css";

const SITE_URL = "https://hyperbuilt.com";
const TITLE = "Hyperbuilt — Autonomous Precision Manufacturing for Defense";
const DESCRIPTION =
  "America can't make thousands of the parts it depends on. We built the system that can — autonomous precision manufacturing, made in America.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: asset("/uploads/favicon-256x256.png"), type: "image/png", sizes: "256x256" },
      { url: asset("/uploads/favicon.ico") },
    ],
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Hyperbuilt",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: asset("/uploads/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Hyperbuilt — autonomous precision manufacturing for defense",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [asset("/uploads/og-image.jpg")],
  },
};

// Pre-paint: enable motion only when the user hasn't asked to reduce it.
// Setting `.motion` before first paint avoids a flash of hidden content.
const motionScript = `(function(){try{if(!window.matchMedia||!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion');}}catch(e){}})();`;

// Organization structured data (schema.org) for richer search results.
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hyperbuilt",
  legalName: "Hyperbuilt Industries",
  url: SITE_URL,
  logo: `${SITE_URL}/uploads/favicon-256x256.png`,
  image: `${SITE_URL}/uploads/og-image.jpg`,
  description: DESCRIPTION,
  sameAs: ["https://www.linkedin.com/company/hyperbuilt/"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
