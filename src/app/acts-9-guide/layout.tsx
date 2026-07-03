import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 9 Guide — The Conversion of Saul",
  description: "A deep guide to Acts 9 — Saul breathing threats and murder, the blinding light on the road to Damascus, the voice of the risen Jesus, the obedience of Ananias, and Saul's immediate proclamation that Jesus is the Son of God.",
  openGraph: { title: "Acts 9 Guide — Vine", description: "A guide to Acts 9 — the conversion of Saul on the road to Damascus, Ananias laying hands on him, and the birth of Paul's apostolic ministry.", images: ["/api/og?title=Acts+9+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 9 Guide — Vine", description: "A deep guide to Acts 9 — the conversion of Saul.", images: ["/api/og?title=Acts+9+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
