import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Jeremiah 29 Chapter Guide — Christian Study",
  description: "A deep guide to Jeremiah 29 — the letter to the exiles in Babylon, the command to seek the peace of the city, God's plans for welfare and hope, seeking God wholeheartedly, and the promise of return after seventy years.",
  openGraph: { title: "Jeremiah 29 Chapter Guide — Vine", description: "A guide to Jeremiah 29 — God's letter to the exiles, plans for a future and a hope, and the call to seek God with your whole heart.", images: ["/api/og?title=Jeremiah+29+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Jeremiah 29 Chapter Guide — Vine", description: "A deep guide to Jeremiah 29 — plans for welfare and not for evil, a future and a hope.", images: ["/api/og?title=Jeremiah+29+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
