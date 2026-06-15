import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matthew 21 Guide - Christian Study",
  description: "A deep guide to Matthew chapter 21 - the Triumphal Entry into Jerusalem, the cleansing of the temple as a house of prayer, the cursing of the barren fig tree and the power of believing prayer, the question of Jesus' authority, and the parables of the Two Sons and the Wicked Tenants that open Passion Week.",
  openGraph: { title: "Matthew 21 Guide - Vine", description: "A guide to Matthew 21 - the Triumphal Entry, the cleansing of the temple, the barren fig tree, and the parables of judgment.", images: ["/api/og?title=Matthew+21+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 21 Guide - Vine", description: "A deep guide to Matthew chapter 21.", images: ["/api/og?title=Matthew+21+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
