import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Habakkuk Guide — Christian Study",
  description: "A deep guide to the Book of Habakkuk — the prophet's bold questioning of God about injustice, God's startling answer that He is raising up the Babylonians, the pivotal declaration that the righteous shall live by faith quoted in Romans, Galatians, and Hebrews, the five woes against the proud, and the magnificent closing prayer of trust.",
  openGraph: { title: "Book of Habakkuk Guide — Vine", description: "A guide to Habakkuk — the prophet's complaint, God's answer, the righteous living by faith, the five woes, and the prayer of trust.", images: ["/api/og?title=Book+of+Habakkuk+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Habakkuk Guide — Vine", description: "A deep guide to the Book of Habakkuk.", images: ["/api/og?title=Book+of+Habakkuk+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
