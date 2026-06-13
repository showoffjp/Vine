import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Divorce Recovery Guide",
  description: "Navigating divorce as a Christian — what the Bible says about divorce and remarriage, the theology of covenant and brokenness, grief after divorce, shame and the gospel, rebuilding identity in Christ, parenting through divorce, and what faithful recovery looks like.",
  openGraph: { title: "Christian Divorce Recovery — Vine", description: "What the Bible says about divorce, healing from shame, rebuilding identity in Christ, and faithful recovery.", images: ["/api/og?title=Christian+Divorce+Recovery"] },
  twitter: { card: "summary_large_image", title: "Christian Divorce Recovery — Vine", description: "Navigating divorce as a Christian — theology, healing, and recovery.", images: ["/api/og?title=Christian+Divorce+Recovery"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
