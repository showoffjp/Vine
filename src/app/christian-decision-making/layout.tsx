import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Making Decisions God's Way — Vine",
  description: "Trust in the Lord with all your heart. A theological and practical guide to wisdom-based decision making — God's sovereign, moral, and individual will, the role of Scripture, prayer, counsel, and peace, and trusting God after you decide.",
  openGraph: {
    title: "Making Decisions God's Way — Vine",
    description: "Trust in the Lord with all your heart. A theological and practical guide to wisdom-based decision making — God's sovereign, moral, and individual will, the role of Scripture, prayer, counsel, and peace, and trusting God after you decide.",
    images: ["/api/og?title=Making+Decisions+God%27s+Way"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Making Decisions God's Way — Vine",
    description: "Trust in the Lord with all your heart. A theological and practical guide to wisdom-based decision making — God's sovereign, moral, and individual will, the role of Scripture, prayer, counsel, and peace, and trusting God after you decide.",
    images: ["/api/og?title=Making+Decisions+God%27s+Way"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
