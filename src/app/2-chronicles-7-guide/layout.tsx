import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Chronicles 7 Guide — Christian Study",
  description: "A deep guide to 2 Chronicles 7 — fire from heaven consumes Solomon's offering, the glory of the LORD fills the temple, and God gives his covenant promise: 'If my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.'",
  openGraph: { title: "2 Chronicles 7 Guide — Vine", description: "A guide to 2 Chronicles 7 — fire from heaven, the glory of God filling the temple, and God's covenant promise to Solomon.", images: ["/api/og?title=2+Chronicles+7+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Chronicles 7 Guide — Vine", description: "A deep guide to 2 Chronicles 7 — fire from heaven and the covenant promise to heal the land.", images: ["/api/og?title=2+Chronicles+7+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
