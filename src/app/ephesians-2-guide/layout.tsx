import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Ephesians 2 Guide — Saved by Grace Through Faith — Christian Study",
  description: "A deep study of Ephesians 2 — the doctrine of salvation by grace alone through faith alone in Christ alone. Explore what it means to be dead in trespasses, made alive together with Christ, saved not by works but by grace, and created as God's workmanship for good works. Also covers the breaking down of the dividing wall of hostility and the building of the new temple.",
  openGraph: { title: "Ephesians 2 Guide — Saved by Grace Through Faith — Vine", description: "A guide to Ephesians 2 — dead in trespasses, saved by grace through faith, God's workmanship, and the one new man in Christ.", images: ["/api/og?title=Ephesians+2+Guide"] },
  twitter: { card: "summary_large_image", title: "Ephesians 2 Guide — Saved by Grace Through Faith — Vine", description: "A deep study of Ephesians 2 and the doctrine of salvation by grace alone through faith alone.", images: ["/api/og?title=Ephesians+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
