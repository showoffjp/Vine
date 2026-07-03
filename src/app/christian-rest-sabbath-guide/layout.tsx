import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Guide to Rest and Sabbath",
  description: "Rest and Sabbath in the Christian faith - the theology of Sabbath rest, the gift of rest in a culture of exhaustion, how Christians have understood the Sabbath, Jesus as Lord of the Sabbath, rhythms of work and rest, and finding true rest in Christ.",
  openGraph: { title: "Christian Guide to Rest and Sabbath - Vine", description: "Rest and Sabbath - the theology of Sabbath rest, rest in a culture of exhaustion, Jesus Lord of the Sabbath, and rest in Christ.", images: ["/api/og?title=Rest+and+Sabbath"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Rest and Sabbath - Vine", description: "Rest and Sabbath in the Christian faith.", images: ["/api/og?title=Rest+and+Sabbath"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
