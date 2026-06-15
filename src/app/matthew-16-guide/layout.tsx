import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matthew 16 Guide - Christian Study",
  description: "A deep guide to Matthew chapter 16 - the demand for a sign and the sign of Jonah, the leaven of the Pharisees and Sadducees, Peter's confession at Caesarea Philippi and the keys of the kingdom, and the call to take up the cross and follow Christ.",
  openGraph: { title: "Matthew 16 Guide - Vine", description: "A guide to Matthew 16 - the sign of Jonah, Peter's confession and the keys of the kingdom, and the cost of discipleship.", images: ["/api/og?title=Matthew+16+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 16 Guide - Vine", description: "A deep guide to Matthew chapter 16.", images: ["/api/og?title=Matthew+16+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
