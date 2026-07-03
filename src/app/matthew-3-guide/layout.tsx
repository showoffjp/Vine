import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Matthew 3 Chapter Guide – John the Baptist and the Baptism of Jesus | The Vine",
  description: "A deep guide to Matthew 3 — John the Baptist's preaching of repentance in the wilderness, the Pharisees confronted, the baptism of Jesus in the Jordan, and the Trinity revealed as the Spirit descends and the Father speaks.",
  openGraph: { title: "Matthew 3 Chapter Guide – The Vine", description: "John the Baptist, the call to repentance, the baptism of Jesus, and the trinitarian revelation at the Jordan.", images: ["/api/og?title=Matthew+3+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 3 Chapter Guide – The Vine", description: "A deep guide to Matthew 3 — John the Baptist and the baptism of Jesus.", images: ["/api/og?title=Matthew+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
