import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Guide to Faith",
  description: "Faith and the Christian life - what biblical faith actually is, faith versus mere belief, the relationship between faith and works, faith in times of doubt, the heroes of faith, and how faith grows.",
  openGraph: { title: "Christian Guide to Faith - Vine", description: "Faith and the Christian life - what biblical faith is, faith and works, faith in doubt, the heroes of faith, and how faith grows.", images: ["/api/og?title=Christian+Faith"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Faith - Vine", description: "Faith and the Christian life.", images: ["/api/og?title=Christian+Faith"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
