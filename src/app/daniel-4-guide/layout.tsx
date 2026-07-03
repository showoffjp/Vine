import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Daniel 4 Guide - The Humbling of Nebuchadnezzar - Christian Study",
  description: "A deep study of Daniel 4 - the royal proclamation written by Nebuchadnezzar himself, the dream of the great tree that reached to heaven, the watcher who decreed it be chopped down with the stump left in the earth, Daniel interpretation and call to break off sins, the king boast on the palace roof and his immediate madness, and his restoration when he lifted his eyes to heaven. Explore divine sovereignty over earthly kings, the sin of pride, the seven times of discipline, and the truth that the Most High rules the kingdom of men.",
  openGraph: { title: "Daniel 4 Guide - The Humbling of Nebuchadnezzar - Vine", description: "A guide to Daniel 4 - divine sovereignty, the sin of pride, and the king who learned that Heaven rules.", images: ["/api/og?title=Daniel+4+Guide"] },
  twitter: { card: "summary_large_image", title: "Daniel 4 Guide - The Humbling of Nebuchadnezzar - Vine", description: "A deep study of Daniel 4 and the sovereignty of the Most High over the kingdoms of men.", images: ["/api/og?title=Daniel+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
