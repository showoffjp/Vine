import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Theology of Money",
  description: "What the Bible actually says about wealth, generosity, debt, and the spiritual danger of loving money — from Genesis to Revelation.",
  openGraph: {
    title: "A Theology of Money — Vine",
    description: "What the Bible actually says about wealth, generosity, debt, and the spiritual danger of loving money — from Genesis to Revelation.",
    images: ["/api/og?title=A+Theology+of+Money"],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Theology of Money — Vine",
    description: "What the Bible actually says about wealth, generosity, debt, and the spiritual danger of loving money — from Genesis to Revelation.",
    images: ["/api/og?title=A+Theology+of+Money"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
