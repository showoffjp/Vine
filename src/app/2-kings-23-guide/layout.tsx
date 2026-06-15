import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Kings 23 Guide - Christian Study",
  description: "A deep guide to 2 Kings 23 - King Josiah's covenant renewal, his sweeping purge of idolatry from temple to high place to Bethel, the great Passover unlike any since the days of the judges, and the judgment that even the best reform could not avert.",
  openGraph: { title: "2 Kings 23 Guide - Vine", description: "A guide to 2 Kings 23 - Josiah's great reformation and the shadow of judgment.", images: ["/api/og?title=2+Kings+23+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Kings 23 Guide - Vine", description: "A deep guide to 2 Kings 23.", images: ["/api/og?title=2+Kings+23+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
