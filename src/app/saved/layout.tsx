import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saved Content",
  description: "Everything you've bookmarked, saved, and collected across Vine.",
  openGraph: {
    title: "Saved Content — Vine",
    description: "Everything you've bookmarked, saved, and collected across Vine.",
    images: ["/api/og?title=Saved+Content"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saved Content — Vine",
    description: "Everything you've bookmarked, saved, and collected across Vine.",
    images: ["/api/og?title=Saved+Content"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
