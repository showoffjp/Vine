import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 55 Study Guide -- Cast Your Burden on the LORD",
  description: "Verse-by-verse study of Psalm 55 -- David's anguished lament over the betrayal of a close friend, his longing for wings like a dove, and the great promise to cast our burdens on the LORD.",
  openGraph: {
    title: "Psalm 55 Study Guide -- Cast Your Burden on the LORD",
    description: "Deep dive into Psalm 55: the pain of betrayal by a familiar friend, the desire to flee, and the confidence that God sustains those who cast their cares on him.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
