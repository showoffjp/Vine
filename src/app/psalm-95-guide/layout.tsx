import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 95 Study Guide &mdash; O Come Let Us Sing to the LORD",
  description: "A verse-by-verse guide to Psalm 95 &mdash; the call to worship the great King above all gods, the invitation to kneel before our Maker, and the solemn warning not to harden hearts as at Meribah (Hebrews 3-4).",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
