import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Habakkuk 3 Guide — Yet I Will Rejoice in the Lord",
  description: "A deep guide to Habakkuk 3 — the prophet's prayer, the theophanic vision of God's coming in glory and power, the trembling response of faith, and the magnificent declaration: yet I will rejoice in the Lord, I will take joy in the God of my salvation.",
  openGraph: { title: "Habakkuk 3 Guide — The Vine", description: "A guide to Habakkuk 3 — theophany, trembling faith, and rejoicing when everything fails.", images: ["/api/og?title=Habakkuk+3+Guide"] },
  twitter: { card: "summary_large_image", title: "Habakkuk 3 Guide — The Vine", description: "A deep guide to Habakkuk 3: faith that holds when everything fails.", images: ["/api/og?title=Habakkuk+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
