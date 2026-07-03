import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Luke 6 Guide — Christian Study",
  description: "A deep guide to Luke 6 — Jesus as Lord of the Sabbath, the calling of the Twelve, the Sermon on the Plain with its Beatitudes and woes, love your enemies, judging others, and the two foundations.",
  openGraph: { title: "Luke 6 Guide — Vine", description: "A guide to Luke 6 — Lord of the Sabbath, the Beatitudes, love your enemies, and the two foundations.", images: ["/api/og?title=Luke+6+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 6 Guide — Vine", description: "A deep guide to Luke 6 — the Sermon on the Plain and Jesus as Lord of the Sabbath.", images: ["/api/og?title=Luke+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
