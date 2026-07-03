import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Haggai 2 Guide — Christian Study",
  description: "A deep guide to Haggai 2 — God encourages the returning exiles whose new temple seems inferior, promises the Desired of All Nations will fill it with glory, announces the shaking of the nations, and seals Zerubbabel as a messianic signet ring.",
  openGraph: { title: "Haggai 2 Guide — Vine", description: "A guide to Haggai 2 — Take courage, the Desired of All Nations, the shaking of the nations, and Zerubbabel the signet ring.", images: ["/api/og?title=Haggai+2+Guide"] },
  twitter: { card: "summary_large_image", title: "Haggai 2 Guide — Vine", description: "A deep guide to Haggai 2.", images: ["/api/og?title=Haggai+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
