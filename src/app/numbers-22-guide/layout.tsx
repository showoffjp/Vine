import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Numbers 22 Chapter Guide — Christian Study",
  description: "A deep guide to Numbers 22 — Balak king of Moab's fear of Israel, the summoning of Balaam the diviner, God's command not to curse what he has blessed, the Angel of the Lord blocking the road with drawn sword, and the donkey who spoke with human voice to rebuke the prophet's madness.",
  openGraph: { title: "Numbers 22 Chapter Guide — Vine", description: "A guide to Numbers 22 — Balak, Balaam, the talking donkey, and God's sovereignty over those who would curse his people.", images: ["/api/og?title=Numbers+22+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Numbers 22 Chapter Guide — Vine", description: "A deep guide to Numbers 22 — Balaam, the talking donkey, and the Angel of the Lord.", images: ["/api/og?title=Numbers+22+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
