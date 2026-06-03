import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Quiet Time Guide",
  description: "The daily meeting with God — Bible, prayer, silence — is the single most formative practice in the Christian life. This guide covers the major methods, realistic schedules, and how to push through…",
  openGraph: {
    title: "The Quiet Time Guide — Vine",
    description: "The daily meeting with God — Bible, prayer, silence — is the single most formative practice in the Christian life. This guide covers the major methods, realistic schedules, and how to push through…",
    images: ["/api/og?title=The+Quiet+Time+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Quiet Time Guide — Vine",
    description: "The daily meeting with God — Bible, prayer, silence — is the single most formative practice in the Christian life. This guide covers the major methods, realistic schedules, and how to push through…",
    images: ["/api/og?title=The+Quiet+Time+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
