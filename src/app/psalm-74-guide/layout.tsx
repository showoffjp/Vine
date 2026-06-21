import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 74 Study Guide -- Why Have You Cast Us Off Forever?",
  description: "Verse-by-verse study of Psalm 74 -- Asaph's anguished lament over the destruction of the temple, the appeal to God's ancient kingship and creation power, and the plea to remember the covenant.",
  openGraph: {
    title: "Psalm 74 Study Guide -- Why Have You Cast Us Off Forever?",
    description: "Deep dive into Psalm 74: lament over the ruined sanctuary, the silence of the prophets, and the turn to God the King who works salvation in the midst of the earth.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
