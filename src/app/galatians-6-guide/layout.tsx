import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Galatians 6 Guide &mdash; The Law of Christ",
  description: "A verse-by-verse guide to Galatians 6: restoring the fallen in gentleness, bearing one another's burdens, the law of sowing and reaping, and the cross as the only boast.",
  openGraph: {
    title: "Galatians 6 Guide &mdash; The Law of Christ | The Vine",
    description: "A verse-by-verse guide to Galatians 6: restoring the fallen in gentleness, bearing one another's burdens, the law of sowing and reaping, and the cross as the only boast.",
    images: ["/api/og?title=Galatians+6+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galatians 6 Guide &mdash; The Law of Christ | The Vine",
    description: "A verse-by-verse guide to Galatians 6: restoring the fallen in gentleness, bearing one another's burdens, the law of sowing and reaping, and the cross as the only boast.",
    images: ["/api/og?title=Galatians+6+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
