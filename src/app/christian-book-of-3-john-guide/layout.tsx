import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Third Epistle of John Guide — Christian Study",
  description: "A deep guide to 3 John — the elder writes to beloved Gaius, the joy that he walks in the truth, his faithful hospitality to traveling missionaries for the sake of the Name, the proud ambition of Diotrephes, the good testimony of Demetrius, and the call to imitate good and not evil.",
  openGraph: { title: "Third Epistle of John Guide — Vine", description: "A guide to 3 John — Gaius, hospitality to missionaries, the pride of Diotrephes, and imitating good.", images: ["/api/og?title=Third+Epistle+of+John+Guide"] },
  twitter: { card: "summary_large_image", title: "Third Epistle of John Guide — Vine", description: "A deep guide to the Third Epistle of John.", images: ["/api/og?title=Third+Epistle+of+John+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
