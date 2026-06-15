import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Luke 17 Guide - Christian Study",
  description: "A deep guide to Luke chapter 17 - Jesus on stumbling blocks and the duty of forgiveness, faith like a mustard seed and the unworthy servants, the healing of the ten lepers and the grateful Samaritan, and the coming of the kingdom and the days of the Son of Man.",
  openGraph: { title: "Luke 17 Guide - Vine", description: "A guide to Luke 17 - forgiveness and faith, the ten lepers, and the coming of the kingdom.", images: ["/api/og?title=Luke+17+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 17 Guide - Vine", description: "A deep guide to Luke chapter 17.", images: ["/api/og?title=Luke+17+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
