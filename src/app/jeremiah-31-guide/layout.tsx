import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Jeremiah 31 Guide — Christian Study",
  description: "A deep chapter guide to Jeremiah 31 — the promise of Israel's return, Rachel weeping for her children, the New Covenant written on the heart, and the permanence of God's promise like the fixed order of the sun and moon.",
  openGraph: { title: "Jeremiah 31 Guide — Vine", description: "A guide to Jeremiah 31 — return from exile, Rachel weeping, the New Covenant, and the permanence of God's promise.", images: ["/api/og?title=Jeremiah+31+Guide"] },
  twitter: { card: "summary_large_image", title: "Jeremiah 31 Guide — Vine", description: "A deep guide to Jeremiah 31.", images: ["/api/og?title=Jeremiah+31+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
