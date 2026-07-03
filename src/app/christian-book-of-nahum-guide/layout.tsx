import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Nahum Guide — Christian Study",
  description: "A deep guide to the Book of Nahum — the jealous God who is slow to anger but great in power, the prophesied fall of Nineveh the capital of Assyria, the woe pronounced upon the bloody city, the comfort published to oppressed Judah, and the balance of God's justice and mercy.",
  openGraph: { title: "Book of Nahum Guide — Vine", description: "A guide to Nahum — the jealous God, the fall of Nineveh, woe to the bloody city, comfort for Judah, and God's justice and mercy.", images: ["/api/og?title=Book+of+Nahum+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Nahum Guide — Vine", description: "A deep guide to the Book of Nahum.", images: ["/api/og?title=Book+of+Nahum+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
