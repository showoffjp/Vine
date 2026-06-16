import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2 John: Walking in Truth and Love, Guarding Against False Teachers | Vine",
  description:
    "A comprehensive guide to 2 John -- the shortest NT book, covering the elder's greeting to the elect lady, the call to walk in truth and love, the warning against those who deny the incarnation of Jesus Christ, instructions on refusing hospitality to false teachers, and the closing hope for face-to-face fellowship.",
  openGraph: {
    title: "2 John Guide -- Walking in Truth and Love | Vine",
    description: "Guide to 2 John: truth and love held together, the antichrist spirit that denies the incarnation, discernment about false teachers, and abiding in the teaching of Christ.",
    images: ["/api/og?title=2+John+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "2 John Guide -- Vine",
    description: "A deep guide to the Second Epistle of John: truth, love, the incarnation, and the test of the antichrist spirit.",
    images: ["/api/og?title=2+John+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
