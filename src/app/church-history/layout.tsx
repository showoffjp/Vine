import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church History",
  description: "2,000 years of faith, councils, revivals, and reformations",
  openGraph: {
    title: "Church History — Vine",
    description: "2,000 years of faith, councils, revivals, and reformations",
    images: ["/api/og?title=Church+History"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Church History — Vine",
    description: "2,000 years of faith, councils, revivals, and reformations",
    images: ["/api/og?title=Church+History"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
