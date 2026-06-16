import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Corinthians 7 Guide - Godly Grief and the Joy of Reconciliation - Christian Study",
  description: "A deep study guide to 2 Corinthians 7 - the call to cleanse ourselves and complete holiness in the fear of God, Paul's appeal to make room in your hearts, his restless comfort through the coming of Titus, the vital distinction between godly grief that leads to repentance and worldly grief that produces death, and the sevenfold fruit of genuine repentance.",
  openGraph: { title: "2 Corinthians 7 Guide - Godly Grief and the Joy of Reconciliation - Vine", description: "Study 2 Corinthians 7 - godly grief versus worldly grief, the comfort of God through Titus, the fruit of repentance, and joy in restored relationships.", images: ["/api/og?title=2+Corinthians+7+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Corinthians 7 Guide - Godly Grief and the Joy of Reconciliation - Vine", description: "A deep guide to 2 Corinthians 7 - godly grief that leads to repentance, the comfort of God, and joy in reconciliation.", images: ["/api/og?title=2+Corinthians+7+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
