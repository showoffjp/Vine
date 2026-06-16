import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Isaiah 17 Guide - The Oracle Concerning Damascus and the Forgotten God - Christian Study",
  description: "A deep study guide to Isaiah 17 - the oracle against Damascus and the Northern Kingdom for their alliance, the remnant left like gleanings after harvest, the turning from idols to the Maker in the day of judgment, the root sin of forgetting the God of your salvation and the Rock of your refuge, and God's sovereignty over the raging nations.",
  openGraph: { title: "Isaiah 17 Guide - The Oracle Concerning Damascus and the Forgotten God - Vine", description: "Study Isaiah 17 - the judgment on Damascus, the remnant motif, turning from idols to the Maker, and the stilling of the raging nations.", images: ["/api/og?title=Isaiah+17+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 17 Guide - The Oracle Concerning Damascus and the Forgotten God - Vine", description: "A deep guide to Isaiah 17 - the oracle against Damascus, forgetting God as the root sin, and the Rock of our refuge.", images: ["/api/og?title=Isaiah+17+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
