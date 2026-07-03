import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "1 Kings 14 Chapter Guide — Vine",
  description: "A deep study of 1 Kings Chapter 14: Ahijah's prophecy of judgment against Jeroboam, the death of Abijah, Rehoboam's reign in Judah, and the plundering of Solomon's temple by Shishak of Egypt.",
};

export default function Kings14GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
