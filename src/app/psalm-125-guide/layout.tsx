import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 125 Study Guide -- Those Who Trust in the LORD Are Like Mount Zion",
  description: "Verse-by-verse study of Psalm 125 -- a Song of Ascents: a wisdom psalm on the permanence of God's protection for the righteous, the surrounding mountains of divine care, and the danger of those whose hearts turn aside to crooked ways.",
  openGraph: {
    title: "Psalm 125 Study Guide -- Those Who Trust in the LORD Are Like Mount Zion",
    description: "Deep dive into Psalm 125: the unshakeable security of those who trust in the LORD, the scepter of wickedness that will not remain, and the contrast between the upright in heart and those who turn aside to crooked ways.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
