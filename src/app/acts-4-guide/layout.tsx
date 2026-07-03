import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 4 Guide — No Other Name — Christian Study",
  description: "A deep study of Acts 4 — the bold declaration that salvation is found in no one else and there is no other name under heaven given among men by which we must be saved. Peter and John before the Sanhedrin, the exclusive claim of Jesus Christ, the prayer that shook the building, and the extraordinary unity and generosity of the early Jerusalem church.",
  openGraph: { title: "Acts 4 Guide — No Other Name — Vine", description: "Explore Acts 4 — Peter and John before the Sanhedrin, the declaration of no other name under heaven, and the early church living in bold witness and remarkable unity.", images: ["/api/og?title=Acts+4+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 4 Guide — No Other Name — Vine", description: "A deep study of Acts 4 and the bold declaration that there is no other name under heaven by which we must be saved.", images: ["/api/og?title=Acts+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
