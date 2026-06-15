import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Kings 1 Guide - Christian Study",
  description: "A deep guide to 2 Kings chapter 1 - King Ahaziah's fatal fall and idolatrous inquiry of Baal-zebub, Elijah's word of judgment, the fire from heaven that consumed two companies of soldiers, the humble third captain who was spared, and the death of Ahaziah according to the sovereign word of the Lord.",
  openGraph: { title: "2 Kings 1 Guide - Vine", description: "A guide to 2 Kings 1 - Ahaziah's idolatry, fire from heaven, and the vindicated word of the Lord through Elijah.", images: ["/api/og?title=2+Kings+1+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Kings 1 Guide - Vine", description: "A deep guide to 2 Kings chapter 1.", images: ["/api/og?title=2+Kings+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
