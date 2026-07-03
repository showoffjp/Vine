import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Thessalonians 4 Guide — Holy Living and Resurrection Hope",
  description: "A deep guide to 1 Thessalonians 4 — abounding more and more in pleasing God, the will of God for sanctification, loving one another earnestly, the hope of resurrection, and the Lord's descent with the trumpet of God.",
  openGraph: { title: "1 Thessalonians 4 Guide — Vine", description: "A guide to 1 Thessalonians 4 — holy living, sanctification, brotherly love, and the certain hope that the Lord himself will descend and the dead in Christ will rise.", images: ["/api/og?title=1+Thessalonians+4+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Thessalonians 4 Guide — Vine", description: "A deep guide to 1 Thessalonians 4 — holy living and the hope of resurrection.", images: ["/api/og?title=1+Thessalonians+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
