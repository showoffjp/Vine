import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church Governance Guide",
  description: "The four models of church polity, the biblical offices of elder and deacon, how church discipline works, and why membership matters — practical ecclesiology for real churches.",
  openGraph: {
    title: "Church Governance Guide — Vine",
    description: "The four models of church polity, the biblical offices of elder and deacon, how church discipline works, and why membership matters — practical ecclesiology for real churches.",
    images: ["/api/og?title=Church+Governance+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Governance Guide — Vine",
    description: "The four models of church polity, the biblical offices of elder and deacon, how church discipline works, and why membership matters — practical ecclesiology for real churches.",
    images: ["/api/og?title=Church+Governance+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
