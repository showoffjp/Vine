import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baptism Guide",
  description: "Understanding, preparing for, and celebrating baptism",
  openGraph: {
    title: "Baptism Guide — Vine",
    description: "Understanding, preparing for, and celebrating baptism",
    images: ["/api/og?title=Baptism+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baptism Guide — Vine",
    description: "Understanding, preparing for, and celebrating baptism",
    images: ["/api/og?title=Baptism+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
