import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 2 Study Guide &mdash; Why Do the Nations Rage",
  description: "A verse-by-verse guide to Psalm 2 &mdash; the messianic coronation psalm, the rebellion of the nations against the LORD and his Anointed, the decree 'You are my Son,' and the call to kiss the Son and take refuge in him.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
