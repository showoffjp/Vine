import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Deuteronomy 6 Guide — The Shema — Christian Study",
  description: "A deep guide to Deuteronomy 6 and the Shema — Israel's foundational confession that the Lord is one — exploring the command to love God with all your heart, soul, and strength, to teach that covenant love to your children in the rhythms of daily life, and to guard against the forgetfulness that prosperity breeds. The Shema is the bedrock of covenant faith, quoted by Jesus as the greatest commandment and fulfilled in him.",
  openGraph: { title: "Deuteronomy 6 Guide — The Shema — Vine", description: "A guide to Deuteronomy 6 — the Shema, the great love commandment, teaching children, and wholehearted devotion to God.", images: ["/api/og?title=Deuteronomy+6+Guide"] },
  twitter: { card: "summary_large_image", title: "Deuteronomy 6 Guide — The Shema — Vine", description: "A deep guide to Deuteronomy 6 and the Shema.", images: ["/api/og?title=Deuteronomy+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
