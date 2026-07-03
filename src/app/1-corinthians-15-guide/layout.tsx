import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Corinthians 15 Guide — The Resurrection Chapter",
  description: "A deep guide to 1 Corinthians 15 — the gospel delivered as of first importance, Christ died for our sins and was raised on the third day, the eyewitnesses to the risen Lord, the cost of denying the resurrection, Christ the firstfruits, the resurrection body, and death swallowed up in victory.",
  openGraph: { title: "1 Corinthians 15 Guide — Vine", description: "A guide to 1 Corinthians 15 — the gospel of first importance, Christ the firstfruits, the resurrection body, and death swallowed up in victory.", images: ["/api/og?title=1+Corinthians+15+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Corinthians 15 Guide — Vine", description: "A deep guide to 1 Corinthians 15, the Resurrection chapter.", images: ["/api/og?title=1+Corinthians+15+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
