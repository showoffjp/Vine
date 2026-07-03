import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Isaiah 6 Guide — Isaiah's Vision of the Lord — Christian Study",
  description: "An in-depth guide to Isaiah 6 — the prophet's transforming vision of the enthroned Lord of hosts, the seraphim crying 'Holy, holy, holy,' the threefold holiness of God, the cleansing coal from the altar, and Isaiah's willing response: 'Here I am; send me.' Explore the theological depth of this foundational chapter and its call to worship, confession, and mission.",
  openGraph: { title: "Isaiah 6 Guide — Isaiah's Vision of the Lord — Vine", description: "A deep guide to Isaiah 6 — the throne room vision, the threefold holiness of God, the burning coal of atonement, and the call to willing service.", images: ["/api/og?title=Isaiah+6+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 6 Guide — Isaiah's Vision of the Lord — Vine", description: "An in-depth guide to Isaiah 6 and the threefold holiness of God.", images: ["/api/og?title=Isaiah+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
