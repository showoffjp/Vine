import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walking in Wisdom — Vine",
  description: "If any of you lacks wisdom, let him ask God. A theological and practical guide to biblical wisdom — Proverbs, the fear of the LORD, Solomon's rise and folly, godly counsel, and Christ the wisdom of God.",
  openGraph: {
    title: "Walking in Wisdom — Vine",
    description: "If any of you lacks wisdom, let him ask God. A theological and practical guide to biblical wisdom — Proverbs, the fear of the LORD, Solomon's rise and folly, godly counsel, and Christ the wisdom of God.",
    images: ["/api/og?title=Walking+in+Wisdom"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walking in Wisdom — Vine",
    description: "If any of you lacks wisdom, let him ask God. A theological and practical guide to biblical wisdom — Proverbs, the fear of the LORD, Solomon's rise and folly, godly counsel, and Christ the wisdom of God.",
    images: ["/api/og?title=Walking+in+Wisdom"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
