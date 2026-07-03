import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "John 11 Guide — The Raising of Lazarus — Christian Study",
  description: "A deep guide to John 11 — the illness and death of Lazarus, Jesus' delay, Martha's confession, the great 'I am the resurrection and the life' saying, the tears of Jesus at the tomb, the cry 'Lazarus, come out,' and the plot of Caiaphas to put Jesus to death.",
  openGraph: { title: "John 11 Guide — The Raising of Lazarus — Vine", description: "A guide to John 11 — the death of Lazarus, 'I am the resurrection and the life,' Jesus wept, 'Lazarus, come out,' and the plot to kill Jesus.", images: ["/api/og?title=John+11+Guide"] },
  twitter: { card: "summary_large_image", title: "John 11 Guide — The Raising of Lazarus — Vine", description: "A deep guide to John 11 and the raising of Lazarus.", images: ["/api/og?title=John+11+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
