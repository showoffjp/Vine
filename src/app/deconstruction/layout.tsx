import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith Deconstruction & Reconstruction",
  description: "Many people are in the middle of a faith crisis — questioning, doubting, grieving, and uncertain where the journey leads. This guide is for the honest questioner who is not ready to give up on find…",
  openGraph: {
    title: "Faith Deconstruction & Reconstruction — Vine",
    description: "Many people are in the middle of a faith crisis — questioning, doubting, grieving, and uncertain where the journey leads. This guide is for the honest questioner who is not ready to give up on find…",
    images: ["/api/og?title=Faith+Deconstruction+%26+Reconstruction"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith Deconstruction & Reconstruction — Vine",
    description: "Many people are in the middle of a faith crisis — questioning, doubting, grieving, and uncertain where the journey leads. This guide is for the honest questioner who is not ready to give up on find…",
    images: ["/api/og?title=Faith+Deconstruction+%26+Reconstruction"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
