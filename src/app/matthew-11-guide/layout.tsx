import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matthew 11 Guide — Come to Me, All Who Labor — Christian Study",
  description: "A deep guide to Matthew 11 — John the Baptist's question from prison, Jesus' witness to John as more than a prophet, the woes on Chorazin, Bethsaida, and Capernaum, the Father revealing the kingdom to little children, and the great invitation: 'Come to me, all who labor and are heavy laden, and I will give you rest.'",
  openGraph: { title: "Matthew 11 Guide — Come to Me, All Who Labor — Vine", description: "A guide to Matthew 11 — John's question, more than a prophet, the unrepentant cities, revelation to little children, and rest for the weary in the gentle and lowly Christ.", images: ["/api/og?title=Matthew+11+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 11 Guide — Come to Me, All Who Labor — Vine", description: "A deep guide to Matthew 11 and finding rest in Christ.", images: ["/api/og?title=Matthew+11+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
