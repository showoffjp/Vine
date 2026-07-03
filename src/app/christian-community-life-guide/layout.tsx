import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Community Life Guide",
  description:
    "The theology of Christian community — the one-anothers of the NT, koinonia as communion not just fellowship, the house church vs. institutional church, hospitality as spiritual discipline, small groups and accountability, and why you cannot follow Jesus alone.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
