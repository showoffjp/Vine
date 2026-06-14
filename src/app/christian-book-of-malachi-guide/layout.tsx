import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Malachi Guide — Christian Study",
  description: "A deep guide to the Book of Malachi — God's declaration of love to a doubting Israel, the rebuke of corrupt worship and blemished sacrifices, the condemnation of broken faith and divorce, the robbing of God in tithes, the promise of the messenger who prepares the way, and the sun of righteousness rising before 400 years of silence.",
  openGraph: { title: "Book of Malachi Guide — Vine", description: "A guide to Malachi — God's love, corrupt worship, broken faith, the messenger of the covenant, and the sun of righteousness.", images: ["/api/og?title=Book+of+Malachi+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Malachi Guide — Vine", description: "A deep guide to the Book of Malachi.", images: ["/api/og?title=Book+of+Malachi+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
