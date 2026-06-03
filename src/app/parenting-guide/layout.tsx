import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Parenting Guide",
  description: "Biblical principles, the best books, stage-by-stage guidance, and real resources for raising children in the faith. Parenting is discipleship — and the stakes are eternal.",
  openGraph: {
    title: "Christian Parenting Guide — Vine",
    description: "Biblical principles, the best books, stage-by-stage guidance, and real resources for raising children in the faith. Parenting is discipleship — and the stakes are eternal.",
    images: ["/api/og?title=Christian+Parenting+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Parenting Guide — Vine",
    description: "Biblical principles, the best books, stage-by-stage guidance, and real resources for raising children in the faith. Parenting is discipleship — and the stakes are eternal.",
    images: ["/api/og?title=Christian+Parenting+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
