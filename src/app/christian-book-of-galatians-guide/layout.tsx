import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Galatians Guide — Christian Study",
  description: "A deep guide to Paul's Letter to the Galatians — the gospel of justification by faith, Paul's defense of his apostleship, the conflict with Peter at Antioch, faith vs. works of the law, freedom in Christ, and the fruit of the Spirit. The charter of Christian liberty.",
  openGraph: { title: "Book of Galatians Guide — Vine", description: "A guide to Galatians — justification by faith, freedom in Christ, faith vs. law, and the fruit of the Spirit.", images: ["/api/og?title=Book+of+Galatians+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Galatians Guide — Vine", description: "A deep guide to the Book of Galatians.", images: ["/api/og?title=Book+of+Galatians+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
