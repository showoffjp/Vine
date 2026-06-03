import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Holy Spirit",
  description: "The third person of the Trinity — not a force, not a feeling, but a fully divine person who convicts, regenerates, indwells, empowers, and transforms every believer into the likeness of Christ.",
  openGraph: {
    title: "The Holy Spirit — Vine",
    description: "The third person of the Trinity — not a force, not a feeling, but a fully divine person who convicts, regenerates, indwells, empowers, and transforms every believer into the likeness of Christ.",
    images: ["/api/og?title=The+Holy+Spirit"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Holy Spirit — Vine",
    description: "The third person of the Trinity — not a force, not a feeling, but a fully divine person who convicts, regenerates, indwells, empowers, and transforms every believer into the likeness of Christ.",
    images: ["/api/og?title=The+Holy+Spirit"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
