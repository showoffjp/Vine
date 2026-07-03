import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "John 6 Guide — I Am the Bread of Life — Christian Study",
  description: "A deep study guide to John 6 — the feeding of the five thousand, the Bread of Life Discourse in Capernaum, and Jesus’ claim to be the true bread from heaven that gives eternal life to all who come to him. Explores the hard saying, the crisis of discipleship, and Peter’s confession.",
  openGraph: { title: "John 6 Guide — I Am the Bread of Life — Vine", description: "Explore John 6: the feeding miracle, the Bread of Life Discourse, the hard saying, and what it means to feed on Jesus as the living bread from heaven.", images: ["/api/og?title=John+6+Guide"] },
  twitter: { card: "summary_large_image", title: "John 6 Guide — I Am the Bread of Life — Vine", description: "A deep study guide to John 6 and the Bread of Life Discourse.", images: ["/api/og?title=John+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
