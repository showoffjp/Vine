import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Guide to Faithfulness",
  description: "Faithfulness and the Christian faith - the fruit of the Spirit, the faithfulness of God, being faithful in little and much, faithfulness in trials and over a lifetime, and the call to be found faithful.",
  openGraph: { title: "Christian Guide to Faithfulness - Vine", description: "Faithfulness - the fruit of the Spirit, the faithfulness of God, being faithful in little and much, and a lifetime of faithfulness.", images: ["/api/og?title=Christian+Faithfulness"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Faithfulness - Vine", description: "Faithfulness and the Christian faith.", images: ["/api/og?title=Christian+Faithfulness"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
