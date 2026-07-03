import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Zephaniah Guide — Christian Study",
  description: "A deep guide to the Book of Zephaniah — the great Day of the Lord, the rebuke of those complacent like wine left on its dregs, judgment on the surrounding nations and Jerusalem, the call to seek the Lord and seek humility, and the closing promise that the Lord your God is in your midst, rejoicing over you with singing.",
  openGraph: { title: "Book of Zephaniah Guide — Vine", description: "A guide to Zephaniah — the Day of the Lord, complacency, judgment on the nations, seeking the Lord, and God rejoicing over his people with singing.", images: ["/api/og?title=Book+of+Zephaniah+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Zephaniah Guide — Vine", description: "A deep guide to the Book of Zephaniah.", images: ["/api/og?title=Book+of+Zephaniah+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
