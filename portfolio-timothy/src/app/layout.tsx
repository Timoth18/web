import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

export const metadata: Metadata = {
  title: "Timothy Situmeang | QA Engineer",
  description:
    "Timothy Aldrenovti Situmeang — QA Engineer focused on real user flows, reliable test automation, and expanding into software development.",
  openGraph: {
    title: "Timothy Situmeang | QA Engineer",
    description: "QA Engineer focused on real user flows and reliable testing.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07060d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
