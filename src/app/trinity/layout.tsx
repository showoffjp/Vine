import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Holy Trinity",
  description: "One God in three persons — Father, Son, and Holy Spirit. Not a mathematical puzzle to be solved, but the living reality at the center of all Christian worship, prayer, and mission.",
  openGraph: {
    title: "The Holy Trinity — Vine",
    description: "One God in three persons — Father, Son, and Holy Spirit. Not a mathematical puzzle to be solved, but the living reality at the center of all Christian worship, prayer, and mission.",
    images: ["/api/og?title=The+Holy+Trinity"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Holy Trinity — Vine",
    description: "One God in three persons — Father, Son, and Holy Spirit. Not a mathematical puzzle to be solved, but the living reality at the center of all Christian worship, prayer, and mission.",
    images: ["/api/og?title=The+Holy+Trinity"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
