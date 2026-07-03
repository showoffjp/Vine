import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Guide to Shame",
  description: "Shame and the Christian faith - the difference between guilt and shame, shame in the garden of Eden, the God who clothes the naked, how the gospel covers shame, breaking free from toxic shame, and finding a new identity in Christ.",
  openGraph: { title: "Christian Guide to Shame - Vine", description: "Shame and faith - guilt vs shame, shame in Eden, the God who clothes the naked, the gospel covering shame, and new identity in Christ.", images: ["/api/og?title=Christian+Guide+to+Shame"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Shame - Vine", description: "Shame and the Christian faith.", images: ["/api/og?title=Christian+Guide+to+Shame"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
