import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Lord's Supper Guide | Vine",
  description: "The theology of the Lord’s Supper — transubstantiation (Catholic), consubstantiation (Lutheran), the Reformed spiritual presence view, the memorial view (Zwingli), the words of institution, the Supper as proclamation, and how this meal shapes Christian community.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
