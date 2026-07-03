import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Guide to Hope",
  description: "Hope and the Christian faith - the biblical meaning of hope as confident expectation, the resurrection as the ground of hope, hope in suffering, the difference between wishful thinking and Christian hope, and the hope of the new creation.",
  openGraph: { title: "Christian Guide to Hope - Vine", description: "Hope and faith - the biblical meaning of hope, the resurrection as ground of hope, hope in suffering, and the new creation.", images: ["/api/og?title=Christian+Hope"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Hope - Vine", description: "Hope and the Christian faith.", images: ["/api/og?title=Christian+Hope"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
