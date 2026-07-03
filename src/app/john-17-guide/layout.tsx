import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "John 17 Guide — The High Priestly Prayer — Christian Study",
  description: "A deep study of John 17 — the High Priestly Prayer of Jesus. Explore how Jesus prays for his own glorification, intercedes for his disciples' protection and sanctification, and lifts his voice for all who will believe, asking the Father that they may be one even as the Father and Son are one. Discover the themes of eternal life, divine glory, unity, and the indwelling love of God in this capstone prayer of Jesus before the cross.",
  openGraph: { title: "John 17 Guide — The High Priestly Prayer — Vine", description: "A study of John 17 — Jesus prays for glory, unity, and eternal life for his disciples and all believers.", images: ["/api/og?title=John+17+Guide"] },
  twitter: { card: "summary_large_image", title: "John 17 Guide — The High Priestly Prayer — Vine", description: "A deep study of John 17 — Jesus prays for glory, unity, and eternal life.", images: ["/api/og?title=John+17+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
