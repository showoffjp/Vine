import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Psalm 87 Study Guide — Glorious Things Are Said of You, City of God",
  description: "Deep study of Psalm 87: Zion as the mother of nations, the enrollment of peoples in the city of God, and the messianic vision of global worship. Commentary and application.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
