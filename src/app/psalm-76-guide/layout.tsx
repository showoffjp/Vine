import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Psalm 76 Study Guide — God Is Known in Judah",
  description: "Deep study of Psalm 76: God's majestic victory, his abode in Salem and Zion, divine warfare and judgment, and the universal sovereignty of the King. Commentary and application.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
