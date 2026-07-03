import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Matthew 22 Chapter Guide — Christian Study",
  description: "A deep guide to Matthew 22 — the parable of the wedding banquet, Jesus on taxes and Caesar, the Sadducees' question about the resurrection, the greatest commandment to love God and neighbor, and Jesus's unanswerable question about whose son the Messiah is from Psalm 110.",
  openGraph: { title: "Matthew 22 Chapter Guide — Vine", description: "A guide to Matthew 22 — the wedding banquet, taxes and Caesar, the resurrection, the Great Commandment, and whose son is the Christ.", images: ["/api/og?title=Matthew+22+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 22 Chapter Guide — Vine", description: "A deep guide to Matthew 22 — debates with religious leaders and the greatest commandment.", images: ["/api/og?title=Matthew+22+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
