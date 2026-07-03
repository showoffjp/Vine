import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Luke 11 Chapter Guide – Prayer, Ask Seek Knock | The Vine",
  description: "A deep guide to Luke 11 — Jesus teaches the Lord’s Prayer as a model, the parable of the persistent friend at midnight, the promises of ask/seek/knock, the Beelzebub controversy, the sign of Jonah, and the woes to the Pharisees and lawyers.",
  openGraph: { title: "Luke 11 Chapter Guide – The Vine", description: "Luke 11 guide: the Lord’s Prayer, ask/seek/knock, the Beelzebub controversy, and woes to the Pharisees.", images: ["/api/og?title=Luke+11+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 11 Chapter Guide – The Vine", description: "A deep guide to Luke 11 on prayer, the kingdom, and the heart.", images: ["/api/og?title=Luke+11+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
