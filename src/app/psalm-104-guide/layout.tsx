import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 104 Study Guide &mdash; Bless the LORD O My Soul",
  description: "A verse-by-verse guide to Psalm 104 &mdash; the great creation hymn praising the LORD who is clothed with light, who set the earth on its foundations, who provides for every creature, and whose Spirit renews the face of the ground.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
