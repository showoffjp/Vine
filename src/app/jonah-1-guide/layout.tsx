import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Jonah 1 Guide — The Running Prophet and the Sovereign God",
  description: "A deep guide to Jonah 1 — the word of the Lord to Jonah, his flight to Tarshish, the storm at sea, the praying sailors, and the great fish that swallowed him for three days and three nights.",
  openGraph: { title: "Jonah 1 Guide — The Vine", description: "Jonah 1: God calls, Jonah flees, the storm rages, and a great fish swallows the running prophet.", images: ["/api/og?title=Jonah+1+Guide"] },
  twitter: { card: "summary_large_image", title: "Jonah 1 Guide — The Vine", description: "A deep guide to Jonah 1 — the futility of fleeing God and the sovereignty of the Lord over nature and nations.", images: ["/api/og?title=Jonah+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
