import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 35: The Highway of Holiness and the Joy of the Redeemed | Vine",
  description:
    "A comprehensive chapter guide to Isaiah 35 -- the blossoming desert, healing of the blind and lame, streams in the wilderness, and the Way of Holiness on which the redeemed return to Zion with everlasting joy. Covers Hebrew terms sason, simchah, derek, ge'ulim, and pduyim.",
  openGraph: {
    title: "Isaiah 35: The Highway of Holiness | Vine",
    description: "A deep guide to Isaiah 35 -- the desert blossoms, the blind see, the lame leap, and the ransomed of the LORD return with everlasting joy.",
    images: ["/api/og?title=Isaiah+35+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 35: The Highway of Holiness and the Joy of the Redeemed | Vine",
    description: "A guide to Isaiah 35 -- how it shapes Christian hope and finds its fulfillment beginning in Jesus (Matthew 11:4-5).",
    images: ["/api/og?title=Isaiah+35+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
