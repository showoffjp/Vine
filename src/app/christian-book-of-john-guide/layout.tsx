import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of John Guide — Christian Study",
  description: "A deep guide to the Gospel of John — the prologue and the Word made flesh (1:1-18), the seven signs, the I AM sayings, the Farewell Discourse (John 14-17), the crucifixion and resurrection, and John's distinctive theology of belief, life, and love.",
  openGraph: { title: "Book of John Guide — Vine", description: "A deep guide to the Gospel of John — the Word made flesh, the seven signs, I AM sayings, and John's theology of belief and life.", images: ["/api/og?title=Book+of+John+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of John Guide — Vine", description: "A deep guide to the Gospel of John.", images: ["/api/og?title=Book+of+John+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
