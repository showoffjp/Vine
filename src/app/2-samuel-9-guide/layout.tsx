import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Samuel 9 Chapter Guide — Christian Study",
  description: "A deep guide to 2 Samuel 9 — David's covenant kindness to Mephibosheth, Jonathan's crippled son, who is brought from Lo-debar and given a permanent seat at the king's table like one of the king's sons, a profound picture of the grace of God in the gospel.",
  openGraph: { title: "2 Samuel 9 Chapter Guide — Vine", description: "A guide to 2 Samuel 9 — David seeks Jonathan's heir, finds Mephibosheth crippled in Lo-debar, restores his inheritance, and seats him at the king's table forever.", images: ["/api/og?title=2+Samuel+9+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Samuel 9 Chapter Guide — Vine", description: "A deep guide to 2 Samuel 9 — David's covenant kindness to Mephibosheth, a picture of the gospel.", images: ["/api/og?title=2+Samuel+9+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
