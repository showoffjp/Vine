import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Mark 6 Chapter Guide – Feeding 5000, Walking on Water | The Vine",
  description: "A deep study guide to Mark 6 covering Jesus rejected at Nazareth, the sending of the Twelve, the death of John the Baptist at Herod's feast, the feeding of five thousand with five loaves and two fish, and Jesus walking on water revealing himself as the great I AM.",
  openGraph: { title: "Mark 6 Chapter Guide – The Vine", description: "Explore Mark 6 – Jesus rejected, the Twelve sent out, John beheaded, five thousand fed, and the Lord walking on water.", images: ["/api/og?title=Mark+6+Guide"] },
  twitter: { card: "summary_large_image", title: "Mark 6 Chapter Guide – The Vine", description: "A deep study guide to Mark 6.", images: ["/api/og?title=Mark+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
