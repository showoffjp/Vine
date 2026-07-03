import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Proverbs 9 - Two Great Invitations | Chapter Guide",
  description:
    "A verse-by-verse guide to Proverbs 9 - Wisdom builds her house on seven pillars, prepares her feast, and invites the simple to eat. Folly makes the same call from the same location. Which invitation will you accept?",
  openGraph: {
    title: "Proverbs 9 - Two Great Invitations | Vine",
    description:
      "A verse-by-verse guide to Proverbs 9 - Wisdom builds her house on seven pillars, prepares her feast, and invites the simple to eat. Folly makes the same call from the same location. Which invitation will you accept?",
    images: ["/api/og?title=Proverbs+9+-+Two+Great+Invitations"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proverbs 9 - Two Great Invitations | Vine",
    description:
      "A verse-by-verse guide to Proverbs 9 - Wisdom builds her house on seven pillars, prepares her feast, and invites the simple to eat. Folly makes the same call from the same location. Which invitation will you accept?",
    images: ["/api/og?title=Proverbs+9+-+Two+Great+Invitations"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
