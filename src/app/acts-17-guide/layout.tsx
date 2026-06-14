import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Acts 17 Guide — Paul at Mars Hill — Christian Study",
  description: "A deep guide to Acts 17 — Paul’s brilliant contextualization of the gospel to Greek philosophers at the Areopagus in Athens, his proclamation of the Unknown God, and the call to repentance grounded in the resurrection of Jesus Christ.",
  openGraph: { title: "Acts 17 Guide — Paul at Mars Hill — Vine", description: "A guide to Acts 17 — Paul in Athens, the Unknown God, the Areopagus address, and the resurrection of Christ.", images: ["/api/og?title=Acts+17+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 17 Guide — Paul at Mars Hill — Vine", description: "A deep guide to Acts 17 and Paul’s Mars Hill sermon.", images: ["/api/og?title=Acts+17+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
