import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mark 10 Guide — Servanthood and the Question of Greatness",
  description: "A deep Christian study guide to Mark 10 — Jesus blessing children, the rich young ruler, the servant leadership teaching, and blind Bartimaeus. Explore the radical inversion of greatness in the kingdom of God and the Son of Man who came to serve.",
  openGraph: { title: "Mark 10 Guide — The Vine", description: "A guide to Mark 10 — children, the rich young ruler, servant leadership, and Bartimaeus.", images: ["/api/og?title=Mark+10+Guide"] },
  twitter: { card: "summary_large_image", title: "Mark 10 Guide — The Vine", description: "A deep guide to Mark 10 — greatness, wealth, servanthood, and healing.", images: ["/api/og?title=Mark+10+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
