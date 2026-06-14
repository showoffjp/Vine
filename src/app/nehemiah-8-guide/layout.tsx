import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nehemiah 8 Guide — Christian Study",
  description: "A deep guide to Nehemiah 8 — Ezra reads the Book of the Law to the returned exiles, the Levites explain its meaning, the people weep and then rejoice in the joy of the LORD, and the forgotten Feast of Booths is celebrated for the first time since the days of Joshua.",
  openGraph: { title: "Nehemiah 8 Guide — Vine", description: "A guide to Nehemiah 8 — the reading of the Law, weeping and joy, and the Feast of Booths restored.", images: ["/api/og?title=Nehemiah+8+Guide"] },
  twitter: { card: "summary_large_image", title: "Nehemiah 8 Guide — Vine", description: "A deep guide to Nehemiah 8 — Ezra reads the Law, the people weep, and the joy of the LORD becomes their strength.", images: ["/api/og?title=Nehemiah+8+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
