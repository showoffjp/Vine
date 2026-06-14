import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ecclesiastes 12 Guide — Christian Study",
  description: "A deep guide to Ecclesiastes 12 — the call to remember your Creator in the days of your youth, the haunting allegory of old age and death, the spirit returning to God who gave it, and the book's final verdict: fear God and keep his commandments, for this is the whole duty of man.",
  openGraph: { title: "Ecclesiastes 12 Guide — Vine", description: "A guide to Ecclesiastes 12 — remember your Creator, the allegory of old age, the spirit returns to God, and the epilogue on fearing God.", images: ["/api/og?title=Ecclesiastes+12+Guide"] },
  twitter: { card: "summary_large_image", title: "Ecclesiastes 12 Guide — Vine", description: "A deep guide to Ecclesiastes 12 — remember your Creator, old age, and the whole duty of man.", images: ["/api/og?title=Ecclesiastes+12+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
