import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 123 Study Guide -- To You I Lift Up My Eyes",
  description: "Verse-by-verse study of Psalm 123 -- a Song of Ascents: a communal prayer of pilgrims who lift their eyes to the enthroned God, waiting like servants watching their master's hand, pleading for mercy after suffering contempt and scorn.",
  openGraph: {
    title: "Psalm 123 Study Guide -- To You I Lift Up My Eyes",
    description: "Deep dive into Psalm 123: the posture of prayer as a servant watching a master's hand, the theology of waiting on God, and a communal cry for mercy from those who have had their fill of contempt and scorn.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
