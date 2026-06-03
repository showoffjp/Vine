import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer Journal",
  description: "Record your prayers and watch God answer",
  openGraph: {
    title: "Prayer Journal — Vine",
    description: "Record your prayers and watch God answer",
    images: ["/api/og?title=Prayer+Journal"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer Journal — Vine",
    description: "Record your prayers and watch God answer",
    images: ["/api/og?title=Prayer+Journal"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
