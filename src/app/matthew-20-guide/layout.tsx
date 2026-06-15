import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matthew 20 Guide - Christian Study",
  description: "A deep guide to Matthew chapter 20 - the Parable of the Laborers in the Vineyard and God's sovereign generosity, the third passion prediction, the request of the mother of James and John and Jesus' teaching that greatness is servanthood, and the healing of two blind men near Jericho.",
  openGraph: { title: "Matthew 20 Guide - Vine", description: "A guide to Matthew 20 - the laborers in the vineyard, true greatness as servanthood, and the healing of two blind men.", images: ["/api/og?title=Matthew+20+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 20 Guide - Vine", description: "A deep guide to Matthew chapter 20.", images: ["/api/og?title=Matthew+20+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
