import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Psalm 23 Guide — The Lord Is My Shepherd",
  description: "A verse-by-verse guide to Psalm 23 — the Lord as shepherd and we as his sheep, green pastures and still waters, restoration of the soul, walking through the valley of the shadow of death without fear, the table prepared before our enemies, goodness and mercy following us, and dwelling in the house of the Lord forever. Comfort for grief, fear, and dying in Christ the Good Shepherd.",
  openGraph: { title: "Psalm 23 Guide — Vine", description: "A guide to Psalm 23 — the Lord my shepherd, the valley of the shadow of death, and dwelling in the house of the Lord forever.", images: ["/api/og?title=Psalm+23+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 23 Guide — Vine", description: "A verse-by-verse guide to Psalm 23, the shepherd psalm.", images: ["/api/og?title=Psalm+23+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
