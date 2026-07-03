import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Philippians 1 Chapter Guide – To Live Is Christ, To Die Is Gain | The Vine",
  description: "A deep guide to Philippians 1 — Paul’s thanksgiving from prison, the Philippians’ partnership in the gospel, confidence that God will complete the work He began, prayer for love abounding in knowledge, the gospel advancing through imprisonment, Christ proclaimed even from rivalry, and the declaration: to live is Christ, to die is gain.",
  openGraph: { title: "Philippians 1 Chapter Guide – The Vine", description: "Paul writes from prison with joy: thanksgiving for gospel partnership, God completing His work, and the soaring confession ‘to live is Christ, to die is gain.’", images: ["/api/og?title=Philippians+1+Guide"] },
  twitter: { card: "summary_large_image", title: "Philippians 1 Chapter Guide – The Vine", description: "A deep guide to Philippians 1 — gospel partnership, joy in suffering, and to live is Christ.", images: ["/api/og?title=Philippians+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
