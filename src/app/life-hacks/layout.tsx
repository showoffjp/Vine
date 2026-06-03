import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Better. Live Biblical.",
  description: "Scripture has been giving life advice for 3,500 years. We just made it easier to apply. Practical faith for your money, relationships, mind, and mornings.",
  openGraph: {
    title: "Live Better. Live Biblical. — Vine",
    description: "Scripture has been giving life advice for 3,500 years. We just made it easier to apply. Practical faith for your money, relationships, mind, and mornings.",
    images: ["/api/og?title=Live+Better.+Live+Biblical."],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Better. Live Biblical. — Vine",
    description: "Scripture has been giving life advice for 3,500 years. We just made it easier to apply. Practical faith for your money, relationships, mind, and mornings.",
    images: ["/api/og?title=Live+Better.+Live+Biblical."],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
