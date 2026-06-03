import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Covenant Marriage",
  description: "Marriage is not a contract that terminates when obligations are unfulfilled. It is a covenant — a binding commitment that reflects and participates in God's own unconditional commitment to his people.",
  openGraph: {
    title: "Covenant Marriage — Vine",
    description: "Marriage is not a contract that terminates when obligations are unfulfilled. It is a covenant — a binding commitment that reflects and participates in God's own unconditional commitment to his people.",
    images: ["/api/og?title=Covenant+Marriage"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Covenant Marriage — Vine",
    description: "Marriage is not a contract that terminates when obligations are unfulfilled. It is a covenant — a binding commitment that reflects and participates in God's own unconditional commitment to his people.",
    images: ["/api/og?title=Covenant+Marriage"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
