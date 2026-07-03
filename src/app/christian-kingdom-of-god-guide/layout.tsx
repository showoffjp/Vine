import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Kingdom of God Guide",
  description: "The kingdom of God in Scripture — the already and not yet, George Ladd&rsquo;s kingdom theology, the parables of the kingdom, the kingdom and the church (are they the same?), kingdom ethics (the Sermon on the Mount), and what it means to pray thy kingdom come.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
