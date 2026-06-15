import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Genesis 43 Guide - Christian Study",
  description: "A deep guide to Genesis 43 - as the famine deepens, Judah pledges himself for Benjamin, the brothers return to Egypt, Joseph restores Simeon and hosts a feast, weeping at the sight of his brother as the family moves toward reconciliation.",
  openGraph: { title: "Genesis 43 Guide - Vine", description: "A guide to Genesis 43 - Judah's pledge, the brothers received at Joseph's house, and the feast where Benjamin's portion is five times over.", images: ["/api/og?title=Genesis+43+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 43 Guide - Vine", description: "A deep guide to Genesis 43.", images: ["/api/og?title=Genesis+43+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
