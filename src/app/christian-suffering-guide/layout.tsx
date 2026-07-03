import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Through the Fire: A Christian Guide to Suffering | The Vine",
  description:
    "A Christian guide to suffering — the theology of the cross, the fellowship of Christ's sufferings, lament as the biblical response to pain, and finding God in the fire.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
