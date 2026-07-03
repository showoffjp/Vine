import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Guide to Patience",
  description: "Patience and the Christian faith - patience as a fruit of the Spirit, the patience of God, waiting on the Lord, patience in suffering and with others, the biblical models of patient endurance, and how patience is cultivated.",
  openGraph: { title: "Christian Guide to Patience - Vine", description: "Patience and faith - the fruit of the Spirit, the patience of God, waiting on the Lord, and patient endurance.", images: ["/api/og?title=Christian+Patience"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Patience - Vine", description: "Patience and the Christian faith.", images: ["/api/og?title=Christian+Patience"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
