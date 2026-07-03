import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Luke 3 Chapter Guide – John the Baptist and the Baptism of Jesus | The Vine",
  description: "A deep guide to Luke 3 — John the Baptist's ministry of repentance in the wilderness, the call to practical fruits of repentance, the baptism of Jesus and the divine voice declaring him the beloved Son, and Jesus' genealogy traced back through Adam to God, establishing the universal scope of Luke's gospel.",
  openGraph: { title: "Luke 3 Chapter Guide – John the Baptist and the Baptism of Jesus | The Vine", description: "Luke 3 brings the voice of God after centuries of silence: John prepares the way, Jesus is baptized and declared beloved Son, and his genealogy runs from Joseph back to Adam, the son of God.", images: ["/api/og?title=Luke+3+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 3 Chapter Guide | The Vine", description: "A guide to Luke 3 — John the Baptist, repentance, the baptism of Jesus, and the genealogy back to Adam.", images: ["/api/og?title=Luke+3+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
