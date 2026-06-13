import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Blended Family Guide",
  description: "Building a blended family on faith — the unique challenges of stepfamilies, biblical models of complex families, step-parenting with grace, loyalty conflicts and grief, co-parenting with an ex, and the long, patient work of becoming one family.",
  openGraph: { title: "Christian Blended Family Guide — Vine", description: "Building a blended family on faith — stepfamily challenges, step-parenting with grace, loyalty conflicts, and co-parenting.", images: ["/api/og?title=Christian+Blended+Family+Guide"] },
  twitter: { card: "summary_large_image", title: "Christian Blended Family Guide — Vine", description: "Building a blended family on faith.", images: ["/api/og?title=Christian+Blended+Family+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
