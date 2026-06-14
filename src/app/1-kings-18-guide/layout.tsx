import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Kings 18 Guide &mdash; Christian Bible Study",
  description: "A deep guide to 1 Kings 18 &mdash; Elijah on Mount Carmel, the contest between the God of Israel and the 450 prophets of Baal, fire falling from heaven, and the end of the three-year drought. The people declare: &ldquo;The LORD, he is God!&rdquo;",
  openGraph: { title: "1 Kings 18 Guide &mdash; Vine", description: "A guide to 1 Kings 18 &mdash; Elijah and the prophets of Baal on Mount Carmel, fire from heaven, and the people crying out: The LORD, he is God!", images: ["/api/og?title=1+Kings+18+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 18 Guide &mdash; Vine", description: "A deep guide to 1 Kings 18 &mdash; the contest on Mount Carmel, Baal&rsquo;s silence, fire from heaven, and the end of three years of drought.", images: ["/api/og?title=1+Kings+18+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
