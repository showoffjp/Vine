import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Revelation 7: The 144,000 Sealed and the Great Multitude Before the Throne | Vine",
  description:
    "A comprehensive study guide to Revelation 7 -- the interlude between the sixth and seventh seals answering who can stand. The 144,000 sealed from every tribe of Israel and the innumerable multitude from every nation standing before the throne.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
