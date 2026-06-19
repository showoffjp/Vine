import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 9 Study Guide &mdash; I Will Give Thanks with My Whole Heart",
  description: "A verse-by-verse guide to Psalm 9 &mdash; thanksgiving for God's righteous judgment, the LORD enthroned forever as a stronghold for the oppressed, and the assurance that the needy shall not always be forgotten.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
