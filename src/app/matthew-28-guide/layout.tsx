import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matthew 28 Chapter Guide — Christian Study",
  description: "A deep guide to Matthew 28 — the resurrection of Jesus, the empty tomb, the Great Commission to go and make disciples of all nations, and the promise that Christ is with us always to the end of the age.",
  openGraph: { title: "Matthew 28 Chapter Guide — Vine", description: "A guide to Matthew 28 — the resurrection, the Great Commission, and the promise of Christ's presence to the end of the age.", images: ["/api/og?title=Matthew+28+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 28 Chapter Guide — Vine", description: "A deep guide to Matthew 28 — the resurrection of Jesus and the Great Commission.", images: ["/api/og?title=Matthew+28+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
