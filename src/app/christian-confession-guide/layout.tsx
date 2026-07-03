import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Confession Guide",
  description: "What the Greek word exomologeomai really means, why James commands confession to one another and not just to God, and how to give and receive confession with grace.",
  openGraph: {
    title: "Christian Confession Guide — Vine",
    description: "What the Greek word exomologeomai really means, why James commands confession to one another and not just to God, and how to give and receive confession with grace.",
    images: ["/api/og?title=Christian+Confession+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Confession Guide — Vine",
    description: "What the Greek word exomologeomai really means, why James commands confession to one another and not just to God, and how to give and receive confession with grace.",
    images: ["/api/og?title=Christian+Confession+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
