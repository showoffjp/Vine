import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 8 Guide -- Philip and the Ethiopian -- Christian Study",
  description: "A deep guide to Acts 8 -- the dramatic expansion of the gospel to Samaria and Ethiopia through Philip the Evangelist. Explore the Samaritans receiving the Holy Spirit, the cautionary tale of Simon the Sorcerer, and the pivotal encounter between Philip and the Ethiopian eunuch on the desert road to Gaza, fulfilling Acts 1:8 as the good news reaches the ends of the earth.",
  openGraph: { title: "Acts 8 Guide -- Philip and the Ethiopian -- Vine", description: "A guide to Acts 8 -- Philip, the Samaritans, Simon the Sorcerer, and the Ethiopian eunuch.", images: ["/api/og?title=Acts+8+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 8 Guide -- Philip and the Ethiopian -- Vine", description: "A deep guide to Acts 8 and the gospel spreading to Samaria and Ethiopia.", images: ["/api/og?title=Acts+8+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
