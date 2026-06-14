import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Luke 10 Guide — The Good Samaritan — Christian Study",
  description: "A deep guide to Luke 10 — the sending of the seventy disciples, the parable of the Good Samaritan and what it means to love your neighbor, and the contrasting responses of Mary and Martha at the feet of Jesus.",
  openGraph: { title: "Luke 10 Guide — The Good Samaritan — Vine", description: "Study Luke 10: the seventy sent out, the Good Samaritan parable, and Mary and Martha's contrasting responses to Jesus.", images: ["/api/og?title=Luke+10+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 10 Guide — The Good Samaritan — Vine", description: "A guide to Luke 10 — mission, mercy, and the one thing necessary.", images: ["/api/og?title=Luke+10+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
