import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Joy Guide",
  description: "The theology of joy — distinguishing joy from happiness, C.S. Lewis's surprised by joy, joy in Philippians, the fruit of the Spirit, the joy set before Jesus (Hebrews 12:2), and why joyfulness is a theological act of resistance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
