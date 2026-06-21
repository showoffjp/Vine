import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 79 Study Guide -- O God, the Nations Have Come into Your Inheritance",
  description: "Verse-by-verse study of Psalm 79 -- Asaph's lament over the desecration of Jerusalem, the cry 'How long, O LORD?', and the plea for atonement for the glory of God's name.",
  openGraph: {
    title: "Psalm 79 Study Guide -- O God, the Nations Have Come into Your Inheritance",
    description: "Deep dive into Psalm 79: the devastation of Jerusalem, the appeal to God's name and compassion, and the vow of unending thanks from the sheep of his pasture.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
