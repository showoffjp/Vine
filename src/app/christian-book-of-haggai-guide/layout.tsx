import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Haggai Guide — Christian Study",
  description: "A deep guide to the Book of Haggai — the prophet's challenge to the returned exiles who built their own paneled houses while God's house lay in ruins, the call to consider your ways and rebuild the temple, the promise that the latter glory of this house will be greater than the former, the blessing from the day they obeyed, and the messianic promise to Zerubbabel as God's chosen signet ring.",
  openGraph: { title: "Book of Haggai Guide — Vine", description: "A guide to Haggai — consider your ways, rebuilding the temple, the greater glory, blessing from this day, and Zerubbabel the signet ring.", images: ["/api/og?title=Book+of+Haggai+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Haggai Guide — Vine", description: "A deep guide to the Book of Haggai.", images: ["/api/og?title=Book+of+Haggai+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
