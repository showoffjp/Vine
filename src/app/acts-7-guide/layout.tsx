import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Acts 7 Guide — Stephen's Speech and Martyrdom",
  description: "A deep guide to Acts 7 — Stephen's sweeping sermon before the Sanhedrin tracing Israel's history from Abraham through Moses to Solomon's temple, his vision of the Son of Man, and his death as the first Christian martyr.",
  openGraph: { title: "Acts 7 Guide — Vine", description: "A guide to Acts 7 — Stephen's speech before the Sanhedrin, the history of Israel, the stoning of Stephen, and Saul's presence at the first Christian martyrdom.", images: ["/api/og?title=Acts+7+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 7 Guide — Vine", description: "A deep guide to Acts 7 — Stephen's defense, his vision of heaven, and his martyrdom.", images: ["/api/og?title=Acts+7+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
