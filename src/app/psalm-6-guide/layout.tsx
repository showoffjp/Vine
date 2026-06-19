import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 6 Study Guide &mdash; O LORD Do Not Rebuke Me in Your Anger",
  description: "A verse-by-verse guide to Psalm 6 &mdash; the first of the seven Penitential Psalms, the anguished cry of a soul greatly troubled, the bed drenched with tears, and the confident turn that the LORD has heard the sound of weeping.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
