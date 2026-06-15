import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mark 8 Guide - The Turning Point of the Gospel - Christian Study",
  description: "A deep study of Mark 8 - the feeding of the four thousand in Gentile territory, the Pharisees demand for a sign, the leaven of the Pharisees and Herod, the unique two-stage healing of the blind man at Bethsaida, Peter confession at Caesarea Philippi, the first prediction of the passion, and the call to deny self, take up the cross, and follow the suffering Messiah. Explore the structural and theological center of Mark and what it means to gain the world yet lose the soul.",
  openGraph: { title: "Mark 8 Guide - The Turning Point of the Gospel - Vine", description: "A guide to Mark 8 - the great confession, the necessity of the cross, and discipleship as self-denial.", images: ["/api/og?title=Mark+8+Guide"] },
  twitter: { card: "summary_large_image", title: "Mark 8 Guide - The Turning Point of the Gospel - Vine", description: "A deep study of Mark 8, the hinge of the Gospel where confession meets the cross.", images: ["/api/og?title=Mark+8+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
