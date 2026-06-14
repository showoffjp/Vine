import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Second Epistle of John Guide — Christian Study",
  description: "A deep guide to 2 John — the elder writes to the elect lady and her children, the joy of those walking in truth, the command to love one another, the warning against deceivers who deny that Jesus Christ has come in the flesh, and the call to abide in the teaching of Christ.",
  openGraph: { title: "Second Epistle of John Guide — Vine", description: "A guide to 2 John — truth and love, the warning against deceivers, and abiding in the teaching of Christ.", images: ["/api/og?title=Second+Epistle+of+John+Guide"] },
  twitter: { card: "summary_large_image", title: "Second Epistle of John Guide — Vine", description: "A deep guide to the Second Epistle of John.", images: ["/api/og?title=Second+Epistle+of+John+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
