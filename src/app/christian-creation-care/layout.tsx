import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creation Care — Vine",
  description: "The earth is the LORD's and everything in it. A theological and practical guide to Christian creation care — the Genesis stewardship mandate, creation groaning, new creation theology, and faithful environmental practice.",
  openGraph: {
    title: "Creation Care — Vine",
    description: "The earth is the LORD's and everything in it. A theological and practical guide to Christian creation care — the Genesis stewardship mandate, creation groaning, new creation theology, and faithful environmental practice.",
    images: ["/api/og?title=Creation+Care"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creation Care — Vine",
    description: "The earth is the LORD's and everything in it. A theological and practical guide to Christian creation care — the Genesis stewardship mandate, creation groaning, new creation theology, and faithful environmental practice.",
    images: ["/api/og?title=Creation+Care"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
