import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anxiety & the Christian | Vine",
  description: "A biblical and pastoral guide to anxiety — Philippians 4:6-7, the difference between clinical anxiety and spiritual struggle, breath prayer, lament, and God's peace that surpasses understanding.",
  openGraph: {
    title: "Anxiety & the Christian | Vine",
    description: "A biblical and pastoral guide to anxiety — Philippians 4:6-7, the difference between clinical anxiety and spiritual struggle, breath prayer, lament, and God's peace that surpasses understanding.",
    images: ["/api/og?title=Anxiety+%26+the+Christian"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anxiety & the Christian | Vine",
    description: "A biblical and pastoral guide to anxiety — Philippians 4:6-7, the difference between clinical anxiety and spiritual struggle, breath prayer, lament, and God's peace that surpasses understanding.",
    images: ["/api/og?title=Anxiety+%26+the+Christian"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
