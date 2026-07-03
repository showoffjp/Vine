import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 7 Study Guide &mdash; Do Not Trust in These Deceptive Words",
  description: "A verse-by-verse guide to Jeremiah 7 &mdash; the Temple Sermon confronting false security in God's house, the call to amend ways and deeds, the Valley of Slaughter, and Judah's stubborn refusal to hear.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
