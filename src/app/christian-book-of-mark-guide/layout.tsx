import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Mark Guide - Christian Study",
  description: "A deep guide to the Gospel of Mark - the fast-paced gospel of action, Jesus the suffering servant, the messianic secret, the call to discipleship and the way of the cross, the passion narrative, and the abrupt ending at the empty tomb.",
  openGraph: { title: "Book of Mark Guide - Vine", description: "A guide to Mark - the gospel of action, Jesus the servant, the messianic secret, discipleship, and the cross.", images: ["/api/og?title=Mark+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Mark Guide - Vine", description: "A deep guide to the Gospel of Mark.", images: ["/api/og?title=Mark+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
