import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Bioethics",
  description: "From abortion to AI, from end-of-life care to genetic engineering — bioethics is where the theology of the image of God meets the hardest questions of modern medicine and technology.",
  openGraph: {
    title: "Christian Bioethics — Vine",
    description: "From abortion to AI, from end-of-life care to genetic engineering — bioethics is where the theology of the image of God meets the hardest questions of modern medicine and technology.",
    images: ["/api/og?title=Christian+Bioethics"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Bioethics — Vine",
    description: "From abortion to AI, from end-of-life care to genetic engineering — bioethics is where the theology of the image of God meets the hardest questions of modern medicine and technology.",
    images: ["/api/og?title=Christian+Bioethics"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
