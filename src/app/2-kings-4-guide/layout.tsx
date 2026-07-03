import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Kings 4 Chapter Guide — The Vine",
  description: "Explore 2 Kings 4: Elisha and the widow's oil, raising the Shunammite's son, the poisoned stew, and multiplying loaves. A chapter of miraculous provision and resurrection power.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
