import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "God's Word for Every Believer",
  description: "All 66 books · Multiple translations · Study notes · Cross-references · Chapter-by-chapter reading",
  openGraph: {
    title: "God's Word for Every Believer — Vine",
    description: "All 66 books · Multiple translations · Study notes · Cross-references · Chapter-by-chapter reading",
    images: ["/api/og?title=God's+Word+for+Every+Believer"],
  },
  twitter: {
    card: "summary_large_image",
    title: "God's Word for Every Believer — Vine",
    description: "All 66 books · Multiple translations · Study notes · Cross-references · Chapter-by-chapter reading",
    images: ["/api/og?title=God's+Word+for+Every+Believer"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
