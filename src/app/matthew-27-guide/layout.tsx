import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Matthew 27 Guide - Christian Study",
  description: "A deep guide to Matthew chapter 27 - the trial of Jesus before Pilate, the end of Judas, the mockery and scourging, the crucifixion at Golgotha, the death of the Son of God, the tearing of the temple veil, and the burial in the tomb of Joseph of Arimathea.",
  openGraph: { title: "Matthew 27 Guide - Vine", description: "A guide to Matthew 27 - the trial, crucifixion, death, and burial of Jesus.", images: ["/api/og?title=Matthew+27+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 27 Guide - Vine", description: "A deep guide to Matthew chapter 27.", images: ["/api/og?title=Matthew+27+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
