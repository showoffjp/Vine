import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Revelation 20 Chapter Guide -- Christian Study",
  description: "A deep guide to Revelation 20 -- Satan bound for a thousand years, the first resurrection, martyrs reigning with Christ, Satan's final defeat, Gog and Magog, the Great White Throne judgment, and the second death.",
  openGraph: { title: "Revelation 20 Chapter Guide -- Vine", description: "A guide to Revelation 20 -- the millennium, the first resurrection, the final defeat of Satan, and the Great White Throne judgment.", images: ["/api/og?title=Revelation+20+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Revelation 20 Chapter Guide -- Vine", description: "A deep guide to Revelation 20 -- the millennium, Satan bound, and the Great White Throne.", images: ["/api/og?title=Revelation+20+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
