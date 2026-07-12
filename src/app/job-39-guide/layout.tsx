import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 39 Guide &mdash; The Freedom of the Wild &mdash; Christian Study",
  description: "A verse-by-verse study of Job 39 &mdash; God's whirlwind tour of the wild animals: the mountain goat, the wild donkey, the wild ox, the ostrich, the war horse, and the eagle -- a world Job did not make and cannot control, yet God delights in.",
  openGraph: {
    title: "Job 39 Guide &mdash; The Freedom of the Wild",
    description: "God parades untamed creatures before Job to enlarge his vision of a world that does not revolve around human usefulness -- and a Father who tends the wild.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
