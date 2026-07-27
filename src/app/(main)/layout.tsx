import { Space_Grotesk, Inter } from "next/font/google";
import "./v3.css";
import V3Header from "@/components/v3/Header";
import RevealController from "@/components/RevealController";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${grotesk.variable} ${inter.variable} v3-root`}>
      <RevealController />
      <V3Header />
      <main>{children}</main>
    </div>
  );
}
