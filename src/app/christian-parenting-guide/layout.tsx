import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Parenting Guide",
  description: "Raising children in the faith — the theology of Christian parenting, Deuteronomy 6 and the household of faith, discipline and grace, passing on faith without coercion, navigating screens and culture, and what research says about what actually forms lasting faith in children.",
  openGraph: { title: "Christian Parenting Guide — Vine", description: "Raising children in the faith — theology, discipline, passing on faith, and what actually works.", images: ["/api/og?title=Christian+Parenting+Guide"] },
  twitter: { card: "summary_large_image", title: "Christian Parenting Guide — Vine", description: "Raising children in the faith.", images: ["/api/og?title=Christian+Parenting+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
