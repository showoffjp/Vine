import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Christian Parenting",
  description: "Children are a heritage from the Lord — entrusted to us, not owned by us. Christian parenting is stewardship, formation, and ultimately the work of pointing a life toward God.",
  openGraph: {
    title: "Theology of Christian Parenting — Vine",
    description: "Children are a heritage from the Lord — entrusted to us, not owned by us. Christian parenting is stewardship, formation, and ultimately the work of pointing a life toward God.",
    images: ["/api/og?title=Theology+of+Christian+Parenting"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theology of Christian Parenting — Vine",
    description: "Children are a heritage from the Lord — entrusted to us, not owned by us. Christian parenting is stewardship, formation, and ultimately the work of pointing a life toward God.",
    images: ["/api/og?title=Theology+of+Christian+Parenting"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
