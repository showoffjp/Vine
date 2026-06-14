import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Philemon Guide — Christian Study",
  description: "A deep guide to the Book of Philemon — Paul's short personal letter from prison, the runaway slave Onesimus who became a believer, Paul's tender appeal of love rather than command, the transformation of a master-slave relationship into brotherhood in Christ, and the gospel's power to reconcile.",
  openGraph: { title: "Book of Philemon Guide — Vine", description: "A guide to Philemon — Paul's appeal for Onesimus, the runaway slave turned brother, and the gospel of reconciliation.", images: ["/api/og?title=Book+of+Philemon+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Philemon Guide — Vine", description: "A deep guide to the Book of Philemon.", images: ["/api/og?title=Book+of+Philemon+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
