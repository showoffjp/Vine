import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Exodus Guide — Christian Study",
  description: "A deep guide to the Book of Exodus — slavery in Egypt and the call of Moses, the plagues and the Passover, the crossing of the Red Sea, the giving of the Law at Sinai, the golden calf, and the tabernacle. How Exodus shapes the biblical theology of redemption.",
  openGraph: { title: "Book of Exodus Guide — Vine", description: "A guide to Exodus — Moses, the plagues, Passover, the Red Sea, Sinai, the golden calf, and the tabernacle.", images: ["/api/og?title=Book+of+Exodus+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Exodus Guide — Vine", description: "A deep guide to the Book of Exodus.", images: ["/api/og?title=Book+of+Exodus+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
