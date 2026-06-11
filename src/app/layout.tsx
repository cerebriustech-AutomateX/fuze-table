/*
IMPORTANT:
All code in this project must follow /docs/CURSOR_RULES.md.
Prefer simple working code over complex architecture.
Do not overengineer.
*/

import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Fuze Table | Private Dining Reimagined",
  description:
    "Cinematic private dining, intimate events, and chef-led menus designed around your table.",
  openGraph: {
    title: "Fuze Table",
    description: "Private dining and events, reimagined.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      style={{ backgroundColor: "#080809" }}
    >
      <body
        className="antialiased"
        style={{ backgroundColor: "#080809", color: "#f2ebe0" }}
      >
        <div className="grain-overlay" aria-hidden />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
