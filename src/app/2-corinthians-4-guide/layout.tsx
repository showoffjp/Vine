import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Corinthians 4 Guide — Treasure in Jars of Clay — Christian Study",
  description: "An in-depth guide to 2 Corinthians 4 — Paul's profound theology of the gospel carried in fragile human vessels, the light of the knowledge of the glory of God in the face of Jesus Christ, the paradox of afflicted but not crushed, and the eternal weight of glory that far outweighs every present suffering. Explore how God's power is made perfect in human weakness.",
  openGraph: { title: "2 Corinthians 4 Guide — Treasure in Jars of Clay — Vine", description: "A deep guide to 2 Corinthians 4 — the treasure in clay jars, the light shining out of darkness, and the eternal weight of glory.", images: ["/api/og?title=2+Corinthians+4+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Corinthians 4 Guide — Treasure in Jars of Clay — Vine", description: "An in-depth guide to 2 Corinthians 4 and the power of God shown in human weakness.", images: ["/api/og?title=2+Corinthians+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
