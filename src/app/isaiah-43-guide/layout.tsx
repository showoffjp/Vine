import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Isaiah 43 Chapter Guide - Fear Not, I Have Redeemed You | The Vine",
  description: "A deep guide to Isaiah 43 -- God's magnificent oracle of redemption calling Israel by name, promising to be with them through waters and fire, announcing a new exodus surpassing the first, declaring 'You are my witnesses,' and blotting out transgressions for his own sake.",
  openGraph: { title: "Isaiah 43 Chapter Guide - Fear Not, I Have Redeemed You | The Vine", description: "Explore Isaiah 43 -- the divine promise of presence through waters and fire, the new exodus, Israel as God's witnesses, and grace that forgives for God's own sake.", images: ["/api/og?title=Isaiah+43+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 43 Chapter Guide - Fear Not, I Have Redeemed You | The Vine", description: "A deep guide to Isaiah 43 and God's magnificent oracle of redemption.", images: ["/api/og?title=Isaiah+43+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
