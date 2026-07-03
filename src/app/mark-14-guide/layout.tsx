import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mark 14: The Passion Begins - A Study Guide | Vine",
  description: "The anointing at Bethany, the betrayal of Judas, the Last Supper and the new covenant, the agony of Gethsemane, the trial before the Sanhedrin, and Peter's denial. A study guide to Mark chapter 14.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
