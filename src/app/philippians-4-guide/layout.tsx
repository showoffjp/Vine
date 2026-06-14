import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Philippians 4 Guide — Christian Study",
  description: "A deep guide to Philippians 4 — rejoice in the Lord always, be anxious for nothing but in everything by prayer and supplication with thanksgiving present your requests to God, the peace of God that surpasses all understanding, thinking on whatever is true, and the secret of contentment in Christ who gives strength.",
  openGraph: { title: "Philippians 4 Guide — Vine", description: "A guide to Philippians 4 — rejoice always, be anxious for nothing, the peace of God, and the secret of contentment.", images: ["/api/og?title=Philippians+4+Guide"] },
  twitter: { card: "summary_large_image", title: "Philippians 4 Guide — Vine", description: "A deep guide to Philippians 4 on anxiety, peace, and contentment.", images: ["/api/og?title=Philippians+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
