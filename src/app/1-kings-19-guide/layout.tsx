import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Kings 19 Guide — The Still Small Voice — Christian Study",
  description: "An in-depth guide to 1 Kings 19 — Elijah's flight from Jezebel, his collapse under the juniper tree, the angel's provision of food and water, the forty-day journey to Horeb, and God meeting Elijah not in wind or earthquake or fire but in a still small voice. A study in divine gentleness, prophetic burnout, and the grace of being recommissioned.",
  openGraph: { title: "1 Kings 19 Guide — The Still Small Voice — Vine", description: "Elijah's burnout in the wilderness, God's gentle restoration, and the still small voice at Mount Horeb.", images: ["/api/og?title=1+Kings+19+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 19 Guide — The Still Small Voice — Vine", description: "An in-depth guide to 1 Kings 19, Elijah's burnout, and the still small voice of God.", images: ["/api/og?title=1+Kings+19+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
