import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 58 Study Guide -- Surely There Is a God Who Judges on Earth",
  description: "Verse-by-verse study of Psalm 58 -- David's imprecatory psalm against corrupt rulers and unjust judges, the certainty of divine justice, and the vindication of the righteous.",
  openGraph: {
    title: "Psalm 58 Study Guide -- Surely There Is a God Who Judges on Earth",
    description: "Deep dive into Psalm 58: the indictment of corrupt human judges, the appeal to the Judge of all the earth, and the assurance that there is a reward for the righteous.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
