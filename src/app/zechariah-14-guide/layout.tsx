import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Zechariah 14 Study Guide &mdash; The LORD Will Be King over All the Earth",
  description: "A verse-by-verse guide to Zechariah 14 &mdash; the final battle for Jerusalem, the LORD standing on the Mount of Olives, living waters flowing from Jerusalem, and the universal kingship of the LORD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
