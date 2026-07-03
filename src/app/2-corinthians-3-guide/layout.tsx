import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Corinthians 3 Chapter Guide – New Covenant, Spirit and Letter | The Vine",
  description: "A deep study of 2 Corinthians 3 covering the contrast between old and new covenants — letters of stone vs. hearts of flesh, the letter that kills vs. the Spirit that gives life, Moses' fading glory vs. the surpassing permanent glory of the new covenant, and transformation from glory to glory.",
  openGraph: { title: "2 Corinthians 3 Chapter Guide – New Covenant, Spirit and Letter | The Vine", description: "Paul's argument from Exodus 34: the ministry of the Spirit surpasses the ministry of death, the veil of Moses is removed in Christ, and all believers are transformed from glory to glory.", images: ["/api/og?title=2+Corinthians+3+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Corinthians 3 Chapter Guide | The Vine", description: "New covenant glory: the Spirit gives life, the veil is removed, and we are transformed from glory to glory.", images: ["/api/og?title=2+Corinthians+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
