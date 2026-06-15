import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Luke 20 Guide - Christian Study",
  description: "A deep guide to Luke chapter 20 - Jesus challenged on his authority in the temple, the Parable of the Wicked Tenants and the rejected cornerstone, rendering to Caesar and to God, the answer to the Sadducees on the resurrection, the riddle of David's Son and Lord, and the warning to beware the scribes.",
  openGraph: { title: "Luke 20 Guide - Vine", description: "A guide to Luke 20 - authority and the wicked tenants, Caesar and the resurrection, and David's Son and Lord.", images: ["/api/og?title=Luke+20+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 20 Guide - Vine", description: "A deep guide to Luke chapter 20.", images: ["/api/og?title=Luke+20+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
