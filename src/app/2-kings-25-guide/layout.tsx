import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Kings 25 Guide - Christian Study",
  description: "A deep guide to 2 Kings chapter 25 - the catastrophic fall of Jerusalem, the capture of Zedekiah, the burning of the temple, the exile of Judah, and the faint hope of the freed Jehoiachin.",
  openGraph: { title: "2 Kings 25 Guide - Vine", description: "A guide to 2 Kings 25 - the fall of Jerusalem, the destruction of the temple, and a glimmer of hope in exile.", images: ["/api/og?title=2+Kings+25+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Kings 25 Guide - Vine", description: "A deep guide to 2 Kings chapter 25.", images: ["/api/og?title=2+Kings+25+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
