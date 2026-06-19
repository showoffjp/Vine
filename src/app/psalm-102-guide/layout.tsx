import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 102 Study Guide &mdash; Hear My Prayer O LORD",
  description: "A verse-by-verse guide to Psalm 102 &mdash; a Penitential Psalm and the prayer of one afflicted, the contrast between fleeting human days and the eternal, unchanging LORD whose years have no end (quoted of Christ in Hebrews 1).",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
