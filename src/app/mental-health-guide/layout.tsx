import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mental Health & the Christian",
  description: "A biblical theology of mental health, guidance for specific conditions, real resources, and crisis information. The church can and must do better at walking with those who suffer mentally.",
  openGraph: {
    title: "Mental Health & the Christian — Vine",
    description: "A biblical theology of mental health, guidance for specific conditions, real resources, and crisis information. The church can and must do better at walking with those who suffer mentally.",
    images: ["/api/og?title=Mental+Health+%26+the+Christian"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mental Health & the Christian — Vine",
    description: "A biblical theology of mental health, guidance for specific conditions, real resources, and crisis information. The church can and must do better at walking with those who suffer mentally.",
    images: ["/api/og?title=Mental+Health+%26+the+Christian"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
