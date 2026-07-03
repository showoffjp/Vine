import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Psalm 122 Study Guide — I Was Glad When They Said Let Us Go",
  description: "Deep study of Psalm 122: the joy of pilgrimage, Jerusalem as the city of unity and justice, praying for its peace, and the New Jerusalem fulfillment. Commentary and application.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
