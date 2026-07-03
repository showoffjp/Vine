import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Daniel 5 Guide - The Writing on the Wall",
  description: "A deep guide to Daniel 5 - Belshazzar's feast and the profaning of the temple vessels, the human hand that writes on the wall, Daniel's interpretation of MENE MENE TEKEL PARSIN, and the fall of Babylon to the Medes and Persians.",
  openGraph: { title: "Daniel 5 Guide - The Vine", description: "A guide to Daniel 5 - Belshazzar's feast, the writing on the wall, weighed and found wanting, and the fall of Babylon.", images: ["/api/og?title=Daniel+5+Guide"] },
  twitter: { card: "summary_large_image", title: "Daniel 5 Guide - The Vine", description: "A deep guide to Daniel 5 - the writing on the wall and the fall of Babylon.", images: ["/api/og?title=Daniel+5+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
