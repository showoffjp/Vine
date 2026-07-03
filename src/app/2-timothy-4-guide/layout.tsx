import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Timothy 4 Chapter Guide — Christian Study",
  description: "A deep guide to 2 Timothy 4 — Paul's final charge to preach the word in season and out, the warning about itching ears, 'I have fought the good fight,' the crown of righteousness, faithful companions and painful deserters, and the Lord who stood with Paul at his first defense.",
  openGraph: { title: "2 Timothy 4 Chapter Guide — Vine", description: "A guide to 2 Timothy 4 — Paul's farewell charge, the good fight, the crown of righteousness, and the Lord's rescue.", images: ["/api/og?title=2+Timothy+4+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Timothy 4 Chapter Guide — Vine", description: "A deep guide to 2 Timothy 4 — Paul's final charge and the fight of faith.", images: ["/api/og?title=2+Timothy+4+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
