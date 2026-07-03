import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Guide to Peace",
  description: "Peace and the Christian faith - the biblical meaning of shalom, peace with God through Christ, the peace that surpasses understanding, peace in anxiety and conflict, being peacemakers, and the prince of peace.",
  openGraph: { title: "Christian Guide to Peace - Vine", description: "Peace and faith - the meaning of shalom, peace with God, the peace that surpasses understanding, and being peacemakers.", images: ["/api/og?title=Christian+Peace"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Peace - Vine", description: "Peace and the Christian faith.", images: ["/api/og?title=Christian+Peace"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
