import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Sanctification Guide",
  description:
    "The theology of sanctification — definitive vs. progressive sanctification, the Wesleyan doctrine of entire sanctification, mortification and vivification, the role of the Spirit, the means of sanctification, and why holiness is both God’s gift and our pursuit.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
