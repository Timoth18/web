import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Timothy Aldrenovti | QA Engineer",
  description: "QA Engineer focused on real user flows and reliable testing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
