import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Great Revivals in Church History",
  description: "Eight major outpourings of the Holy Spirit from 1730 to 2023 — what preceded them, what God did, and what they produced. Revival is not manufactured. It is received.",
  openGraph: {
    title: "Great Revivals in Church History — Vine",
    description: "Eight major outpourings of the Holy Spirit from 1730 to 2023 — what preceded them, what God did, and what they produced. Revival is not manufactured. It is received.",
    images: ["/api/og?title=Great+Revivals+in+Church+History"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Revivals in Church History — Vine",
    description: "Eight major outpourings of the Holy Spirit from 1730 to 2023 — what preceded them, what God did, and what they produced. Revival is not manufactured. It is received.",
    images: ["/api/og?title=Great+Revivals+in+Church+History"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
