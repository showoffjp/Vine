import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Kings 18 Guide - Christian Study",
  description: "A deep guide to 2 Kings 18 - Hezekiah's reforms and the destruction of the bronze serpent Nehushtan, the recap of Samaria's fall, Sennacherib's invasion of Judah, and the Rabshakeh's blasphemous taunt at the wall of Jerusalem.",
  openGraph: { title: "2 Kings 18 Guide - Vine", description: "A guide to 2 Kings 18 - Hezekiah's trust, Sennacherib's invasion, and the Rabshakeh's taunt.", images: ["/api/og?title=2+Kings+18+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Kings 18 Guide - Vine", description: "A deep guide to 2 Kings 18.", images: ["/api/og?title=2+Kings+18+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
