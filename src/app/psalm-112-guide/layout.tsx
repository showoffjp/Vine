import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 112 Study Guide -- Blessed Is the Man Who Fears the LORD",
  description: "Verse-by-verse study of Psalm 112 -- the companion acrostic to Psalm 111: a portrait of the blessed life of the God-fearer whose righteousness endures forever, whose heart is steady, who gives freely to the poor, and who does not fear bad news.",
  openGraph: {
    title: "Psalm 112 Study Guide -- Blessed Is the Man Who Fears the LORD",
    description: "Deep dive into Psalm 112: the blessings that flow from fearing the LORD -- generosity, steadfast heart, fearlessness in bad news, righteousness that endures -- and the contrast with the wicked who melt with envy and come to nothing.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
