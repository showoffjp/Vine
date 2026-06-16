import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Proverbs 20 Guide - The Lamp of the LORD - Christian Study",
  description: "A deep study of Proverbs 20 - the danger of strong drink, the honor of avoiding strife, the diligence that reaps a harvest, the searching question of who can claim a pure heart, the demand for honest weights and measures, and the famous declaration that the spirit of man is the lamp of the LORD searching all his innermost parts. Explore the soberness of wisdom, the universality of human sin, and the searching power of the conscience.",
  openGraph: { title: "Proverbs 20 Guide - The Lamp of the LORD - Vine", description: "A guide to Proverbs 20 - the soberness of wisdom, human sinfulness, honest weights, and the conscience as the lamp of the LORD.", images: ["/api/og?title=Proverbs+20+Guide"] },
  twitter: { card: "summary_large_image", title: "Proverbs 20 Guide - The Lamp of the LORD - Vine", description: "A deep study of Proverbs 20 and the searching lamp of the conscience.", images: ["/api/og?title=Proverbs+20+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
