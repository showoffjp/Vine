import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aging with Grace — Vine",
  description: "Gray hair is a crown of glory, and the righteous still bear fruit in old age. A theological and practical guide to aging with grace — Psalm 71, Caleb at 85, purpose in retirement, mentoring, and legacy.",
  openGraph: {
    title: "Aging with Grace — Vine",
    description: "Gray hair is a crown of glory, and the righteous still bear fruit in old age. A theological and practical guide to aging with grace — Psalm 71, Caleb at 85, purpose in retirement, mentoring, and legacy.",
    images: ["/api/og?title=Aging+with+Grace"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aging with Grace — Vine",
    description: "Gray hair is a crown of glory, and the righteous still bear fruit in old age. A theological and practical guide to aging with grace — Psalm 71, Caleb at 85, purpose in retirement, mentoring, and legacy.",
    images: ["/api/og?title=Aging+with+Grace"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
