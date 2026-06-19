import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 89 Study Guide &mdash; I Will Sing of the Steadfast Love of the LORD Forever",
  description: "A verse-by-verse guide to Psalm 89 &mdash; the celebration of the everlasting covenant with David, the praise of God's faithfulness, and the anguished lament when the covenant promises seem to have failed.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
