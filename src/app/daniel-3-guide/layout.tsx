import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Daniel 3 Guide — The Fiery Furnace | Christian Study",
  description: "A deep guide to Daniel 3 — Nebuchadnezzar's golden image, the refusal of Shadrach, Meshach, and Abednego to bow, the furnace heated seven times hotter, and the fourth man like a son of the gods walking freely in the fire.",
  openGraph: { title: "Daniel 3 Guide — The Fiery Furnace | Vine", description: "A guide to Daniel 3 — the golden image, the fiery furnace, and the fourth man in the fire.", images: ["/api/og?title=Daniel+3+Guide"] },
  twitter: { card: "summary_large_image", title: "Daniel 3 Guide — The Fiery Furnace | Vine", description: "A deep guide to Daniel 3 — the fiery furnace and the fourth man.", images: ["/api/og?title=Daniel+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
