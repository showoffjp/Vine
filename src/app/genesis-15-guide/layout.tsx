import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Genesis 15 Chapter Guide — Christian Study",
  description: "A deep guide to Genesis 15 — God appears to Abram in a vision as shield and great reward, takes him outside to count the stars, credits his faith as righteousness, and seals the Abrahamic covenant alone as a smoking firepot and flaming torch passing between the pieces in the darkness.",
  openGraph: { title: "Genesis 15 Chapter Guide — Vine", description: "A guide to Genesis 15 — the stars, faith credited as righteousness, the covenant ceremony, and the smoking firepot and flaming torch that seal God's promise to Abram.", images: ["/api/og?title=Genesis+15+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 15 Chapter Guide — Vine", description: "A deep guide to Genesis 15 — God's covenant with Abram, the stars, and the smoking firepot.", images: ["/api/og?title=Genesis+15+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
