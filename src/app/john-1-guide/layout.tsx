import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "John 1 Guide — The Word, the Light, and the First Disciples",
  description: "A deep guide to John 1 — the prologue on the eternal Word (Logos), the true light coming into the world, the Word becoming flesh and dwelling among us, John the Baptist's witness, the call of the first disciples, and the promise of greater things to come.",
  openGraph: { title: "John 1 Guide — Vine", description: "A guide to John 1 — the Logos, the incarnation, and the calling of the first disciples.", images: ["/api/og?title=John+1+Guide"] },
  twitter: { card: "summary_large_image", title: "John 1 Guide — Vine", description: "A deep guide to John 1 — the Word became flesh and dwelt among us.", images: ["/api/og?title=John+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
