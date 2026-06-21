import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 129 Study Guide -- Greatly Have They Afflicted Me from My Youth",
  description: "Verse-by-verse study of Psalm 129 -- a Song of Ascents: the persecuted endurance of Israel from its youth, the plowers who plowed long furrows on its back, the righteous LORD who cut the cords of the wicked, and the withering of those who hate Zion.",
  openGraph: {
    title: "Psalm 129 Study Guide -- Greatly Have They Afflicted Me from My Youth",
    description: "Deep dive into Psalm 129: the survival of God's afflicted people, the imagery of plowing and grass on the rooftops, the righteous LORD who breaks oppression, and the absence of blessing on those who hate Zion.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
