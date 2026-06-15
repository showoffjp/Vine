import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matthew 9 Guide - Christian Study",
  description: "A deep guide to Matthew chapter 9 - Jesus' authority to forgive sins, the call of Matthew the tax collector, the new wineskins parable, the raising of Jairus' daughter, the healing of the bleeding woman and the blind, and the compassion that sees a plentiful harvest with few workers.",
  openGraph: { title: "Matthew 9 Guide - Vine", description: "A guide to Matthew 9 - forgiveness, the call of Matthew, new wineskins, miracles of healing, and the plentiful harvest.", images: ["/api/og?title=Matthew+9+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 9 Guide - Vine", description: "A deep guide to Matthew chapter 9.", images: ["/api/og?title=Matthew+9+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
