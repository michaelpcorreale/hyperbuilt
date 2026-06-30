import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hyperbuilt — America's Autonomous Precision Manufacturing Platform",
  description:
    "Hyperbuilt acquires founder-led precision machine shops and modernizes them into highly automated, software-driven factories — building the precision components that defend the nation and rebuild its industrial base.",
  icons: {
    icon: [
      { url: "/uploads/favicon-256x256.png", type: "image/png", sizes: "256x256" },
      { url: "/uploads/favicon.ico" },
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
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
