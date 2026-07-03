import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 John 5 Chapter Guide — Christian Study",
  description: "A deep guide to 1 John 5 — overcoming the world through faith in Jesus Christ, the three witnesses of Spirit, water, and blood, God's testimony about his Son, assurance of eternal life, confident prayer, and the warning to keep ourselves from idols.",
  openGraph: { title: "1 John 5 Chapter Guide — Vine", description: "A guide to 1 John 5 — faith as the victory over the world, the three witnesses to Christ, eternal life in the Son, and assurance for believers.", images: ["/api/og?title=1+John+5+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 John 5 Chapter Guide — Vine", description: "A deep guide to 1 John 5 — overcoming the world through faith in Jesus Christ.", images: ["/api/og?title=1+John+5+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
