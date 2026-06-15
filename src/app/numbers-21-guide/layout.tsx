import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Numbers 21 Chapter Guide – Bronze Serpent and Wilderness Journey | The Vine",
  description: "A deep guide to Numbers 21 -- Israel's complaints about manna and water, God sending fiery serpents as judgment, Moses' intercession, the bronze serpent lifted on a pole for healing, Jesus' reference in John 3:14, victories over Sihon and Og, and the Song of the Well.",
  openGraph: { title: "Numbers 21 Chapter Guide -- Bronze Serpent and Wilderness Journey | The Vine", description: "Numbers 21: fiery serpents, the bronze serpent on a pole, Israel's victories, and the typological foreshadowing of Christ's crucifixion in John 3:14.", images: ["/api/og?title=Numbers+21+Guide"] },
  twitter: { card: "summary_large_image", title: "Numbers 21 Chapter Guide | The Vine", description: "Numbers 21: the bronze serpent lifted for healing and Christ's own interpretation in John 3:14.", images: ["/api/og?title=Numbers+21+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
