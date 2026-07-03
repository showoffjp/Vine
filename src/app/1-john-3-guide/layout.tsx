import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "1 John 3: Children of God, Freedom from Sin, and the Test of Love | Vine",
  description:
    "A comprehensive chapter guide to 1 John 3 -- the lavish love that makes us children of God, what sin is and why Christ came to destroy it, the defining mark of love for one another, and the confidence we have before God.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
