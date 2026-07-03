import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Joshua 2 Guide — Rahab and the Spies",
  description: "A deep guide to Joshua 2 — Joshua sends two spies into Jericho, Rahab hides them under flax on the roof, confesses that the LORD is God in heaven and earth, and receives the promise of the scarlet cord.",
  openGraph: { title: "Joshua 2 Guide — Vine", description: "A guide to Joshua 2 — the spies in Jericho, Rahab hiding them, her confession of the LORD, and the scarlet cord promise.", images: ["/api/og?title=Joshua+2+Guide"] },
  twitter: { card: "summary_large_image", title: "Joshua 2 Guide — Vine", description: "A deep guide to Joshua 2 — Rahab and the spies.", images: ["/api/og?title=Joshua+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
