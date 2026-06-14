import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Micah 6 Guide — Act Justly, Love Mercy, Walk Humbly",
  description: "A deep guide to Micah 6 — the Lord’s case against Israel, the great rhetorical question about what to bring before God, and the prophetic climax of Micah 6:8: to do justice, love kindness (hesed), and walk humbly with your God.",
  openGraph: { title: "Micah 6 Guide — The Vine", description: "A guide to Micah 6 — mishpat, hesed, and walking humbly with God.", images: ["/api/og?title=Micah+6+Guide"] },
  twitter: { card: "summary_large_image", title: "Micah 6 Guide — The Vine", description: "A deep guide to Micah 6: act justly, love mercy, walk humbly.", images: ["/api/og?title=Micah+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
