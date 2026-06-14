import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Proverbs 31 Guide — Christian Study",
  description: "A deep guide to Proverbs 31 — the wisdom of King Lemuel's mother about women, wine, and justice for the poor, and the famous acrostic portrait of the eshet chayil, the woman of noble character whose industrious, generous, God-fearing life embodies wisdom from A to Z.",
  openGraph: { title: "Proverbs 31 Guide — Vine", description: "A guide to Proverbs 31 — the wisdom of a mother, the woman of noble character, and the fear of the LORD as the root of all excellence.", images: ["/api/og?title=Proverbs+31+Guide"] },
  twitter: { card: "summary_large_image", title: "Proverbs 31 Guide — Vine", description: "A deep guide to Proverbs 31 — the eshet chayil and the woman who fears the LORD.", images: ["/api/og?title=Proverbs+31+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
