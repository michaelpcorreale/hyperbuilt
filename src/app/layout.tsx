import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hyperbuilt — Autonomous Precision Manufacturing for Defense",
  description:
    "America can't make thousands of the parts it depends on. We built the system that can — autonomous precision manufacturing, made in America.",
  icons: {
    icon: [
      { url: asset("/uploads/favicon-256x256.png"), type: "image/png", sizes: "256x256" },
      { url: asset("/uploads/favicon.ico") },
    ],
  },
};

// Pre-paint: enable motion only when the user hasn't asked to reduce it.
// Setting `.motion` before first paint avoids a flash of hidden content.
const motionScript = `(function(){try{if(!window.matchMedia||!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
