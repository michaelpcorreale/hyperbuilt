import type { Metadata, Viewport } from "next";
import { asset } from "@/lib/asset";
import "./globals.css";

const SITE_URL = "https://hyperbuilt.com";
const TITLE = "Hyperbuilt: Autonomous Precision Manufacturing for Defense";
const DESCRIPTION =
  "America can't make thousands of the parts it depends on. Hyperbuilt reverse engineers and machines them — 5-axis precision, CMM-verified, made in America.";

// Set in the deploy workflow once the property is claimed in Search Console.
// Left undefined locally so no empty verification tag is emitted.
const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const OG_IMAGE = asset("/uploads/og-image.jpg");
const OG_ALT = "Hyperbuilt: Autonomous Precision Manufacturing for Defense";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Hyperbuilt",
  authors: [{ name: "Hyperbuilt Industries", url: SITE_URL }],
  creator: "Hyperbuilt Industries",
  publisher: "Hyperbuilt Industries",
  category: "Manufacturing",
  alternates: { canonical: "/" },
  // Phone/address autolinking mangles the tolerance figures and part numbers.
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Without max-image-preview:large, Google renders a thumbnail instead of
      // a full-width image for a site that is mostly photography.
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(GOOGLE_VERIFICATION ? { verification: { google: GOOGLE_VERIFICATION } } : {}),
  icons: {
    icon: [
      { url: asset("/uploads/favicon-256x256.png"), type: "image/png", sizes: "256x256" },
      { url: asset("/uploads/favicon.ico") },
    ],
    apple: [{ url: asset("/uploads/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Hyperbuilt",
    locale: "en_US",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: OG_ALT, type: "image/jpeg" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: OG_ALT }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090b",
  colorScheme: "dark",
};

// Pre-paint: enable motion only when the user hasn't asked to reduce it.
// Setting `.motion` before first paint avoids a flash of hidden content.
const motionScript = `(function(){try{if(!window.matchMedia||!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion');}}catch(e){}})();`;

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

// schema.org graph (Organization + WebSite + WebPage), cross-linked by @id so
// search engines and AI crawlers resolve them as one entity rather than three.
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Hyperbuilt",
      legalName: "Hyperbuilt Industries",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/uploads/favicon-256x256.png`,
        width: 256,
        height: 256,
      },
      image: `${SITE_URL}/uploads/og-image.jpg`,
      description: DESCRIPTION,
      slogan: "Autonomy is earned, not assumed.",
      areaServed: { "@type": "Country", name: "United States" },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "hello@hyperbuilt.com",
          areaServed: "US",
          availableLanguage: "English",
        },
      ],
      knowsAbout: [
        "Precision CNC machining",
        "3- and 5-axis milling",
        "Defense sustainment manufacturing",
        "Reverse engineering of obsolete and sole-source parts",
        "Technical data package (TDP) development",
        "Source Approval Request (SAR) qualification",
        "CMM inspection and metrology",
        "Industrial CT scanning",
        "In-process probing",
        "High-mix low-volume (HMLV) production",
        "Unattended and lights-out machining",
        "Autonomous manufacturing software",
      ],
      sameAs: ["https://www.linkedin.com/company/hyperbuilt/"],
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SITE_URL,
      name: "Hyperbuilt",
      description: DESCRIPTION,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": SITE_ID },
      about: { "@id": ORG_ID },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/uploads/og-image.jpg`,
      },
      inLanguage: "en-US",
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
