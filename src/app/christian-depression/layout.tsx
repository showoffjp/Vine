import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depression & the Christian | Vine",
  description: "A theological and pastoral guide to depression — biblical figures who struggled, clinical vs. spiritual dryness, lament psalms, when to seek counseling, and God's presence in the darkest places.",
  openGraph: {
    title: "Depression & the Christian | Vine",
    description: "A theological and pastoral guide to depression — biblical figures who struggled, clinical vs. spiritual dryness, lament psalms, when to seek counseling, and God's presence in the darkest places.",
    images: ["/api/og?title=Depression+%26+the+Christian"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Depression & the Christian | Vine",
    description: "A theological and pastoral guide to depression — biblical figures who struggled, clinical vs. spiritual dryness, lament psalms, when to seek counseling, and God's presence in the darkest places.",
    images: ["/api/og?title=Depression+%26+the+Christian"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
