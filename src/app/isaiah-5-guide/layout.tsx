import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Isaiah 5 Guide - The Song of the Vineyard and the Six Woes",
  description: "A deep guide to Isaiah 5 - the Song of the Vineyard that becomes a lawsuit. God planted a vineyard, cleared it, and tended it, yet it yielded wild grapes. He looked for justice (mishpat) but saw bloodshed (mispach), for righteousness (tsedaqah) but heard a cry (tseaqah). Explore the six woes and the gathering judgment.",
  openGraph: { title: "Isaiah 5 Guide - Vine", description: "A guide to the Song of the Vineyard and the Six Woes - God's loving investment, the call to justice and righteousness, and the judgment that gathers over Judah.", images: ["/api/og?title=Isaiah+5+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 5 Guide - Vine", description: "A deep guide to Isaiah 5, the Song of the Vineyard and the Six Woes.", images: ["/api/og?title=Isaiah+5+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
