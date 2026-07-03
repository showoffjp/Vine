import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Kings 5 Guide — Christian Study",
  description: "A deep guide to 2 Kings 5 — Naaman the Syrian commander healed of leprosy by Elisha, the faith of the servant girl, seven dips in the Jordan, and Gehazi's greed and punishment.",
  openGraph: { title: "2 Kings 5 Guide — Vine", description: "A guide to 2 Kings 5 — Naaman the leper, the servant girl's faith, Elisha's instructions, seven dips in the Jordan, and Gehazi's sin.", images: ["/api/og?title=2+Kings+5+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Kings 5 Guide — Vine", description: "A deep guide to 2 Kings 5 — Naaman, Elisha, and the healing of the nations.", images: ["/api/og?title=2+Kings+5+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
