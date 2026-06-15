import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Leviticus 16 Chapter Guide – Day of Atonement, Scapegoat | The Vine",
  description: "A deep guide to Leviticus 16's institution of the Day of Atonement (Yom Kippur) — Aaron's entry into the Holy of Holies, the two goats (one sacrificed, one the scapegoat sent into the wilderness), and its complete fulfillment in Christ's once-for-all sacrifice as shown in Hebrews 9-10.",
  openGraph: { title: "Leviticus 16 Chapter Guide – Day of Atonement | The Vine", description: "A guide to Leviticus 16 — the Day of Atonement, the two goats, the high priest entering the Holy of Holies, and fulfillment in Christ.", images: ["/api/og?title=Leviticus+16+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Leviticus 16 Chapter Guide – Day of Atonement | The Vine", description: "A deep guide to Leviticus 16 — Yom Kippur, the two goats, and Christ as our once-for-all sacrifice.", images: ["/api/og?title=Leviticus+16+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
