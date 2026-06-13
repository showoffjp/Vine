import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Reformed Theology Guide",
  description: "An introduction to Reformed theology — the legacy of John Calvin, the five points of Calvinism (TULIP), covenant theology, the sovereignty of God, the doctrines of grace, and the major debates between Calvinism and Arminianism. A fair, substantive overview.",
  openGraph: { title: "Reformed Theology Guide — Vine", description: "An introduction to Reformed theology — Calvin, TULIP, covenant theology, God's sovereignty, and the Calvinism-Arminianism debate.", images: ["/api/og?title=Reformed+Theology+Guide"] },
  twitter: { card: "summary_large_image", title: "Reformed Theology Guide — Vine", description: "An introduction to Reformed theology.", images: ["/api/og?title=Reformed+Theology+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
