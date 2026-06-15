import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Daniel 2 Chapter Guide - Nebuchadnezzar's Dream of the Statue | The Vine",
  description: "A deep study guide to Daniel 2 covering Nebuchadnezzar's troubling dream, Daniel and his friends seeking mercy from the God of heaven, the great statue of gold, silver, bronze, and iron, the stone cut without hands that becomes a mountain, the four world kingdoms, and the everlasting kingdom of God.",
  openGraph: {
    title: "Daniel 2 Chapter Guide - The Vine",
    description: "Explore Daniel 2 - the dream of the statue, the four kingdoms, the stone cut without hands, and the kingdom that shall never be destroyed.",
    images: ["/api/og?title=Daniel+2+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel 2 Chapter Guide - The Vine",
    description: "A deep study guide to Daniel 2.",
    images: ["/api/og?title=Daniel+2+Guide"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
