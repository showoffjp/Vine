import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "John 19 Guide - Christian Study",
  description: "A deep guide to John chapter 19 - the trial before Pilate and 'Behold the man,' the crucifixion at Golgotha as King of the Jews, the word to his mother from the cross, the cry 'It is finished,' the piercing of his side, and the garden burial.",
  openGraph: { title: "John 19 Guide - Vine", description: "A guide to John 19 - Behold the Man, the crucifixion, and It Is Finished.", images: ["/api/og?title=John+19+Guide"] },
  twitter: { card: "summary_large_image", title: "John 19 Guide - Vine", description: "A deep guide to John chapter 19.", images: ["/api/og?title=John+19+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
