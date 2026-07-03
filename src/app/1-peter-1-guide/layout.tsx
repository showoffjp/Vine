import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "1 Peter 1: Living Hope, Holy Living, and the Preciousness of Christ | Vine",
  description:
    "A verse-by-verse study guide to 1 Peter 1 covering the living hope through resurrection, trials that refine faith like gold, the prophets who searched for our grace, the call to holiness, and the imperishable word that endures forever.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
