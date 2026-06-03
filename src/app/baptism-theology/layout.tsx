import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baptism",
  description: "Few doctrines reveal theological commitments more sharply. What does the water signify? Who should receive it? What does it accomplish?",
  openGraph: {
    title: "Baptism — Vine",
    description: "Few doctrines reveal theological commitments more sharply. What does the water signify? Who should receive it? What does it accomplish?",
    images: ["/api/og?title=Baptism"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baptism — Vine",
    description: "Few doctrines reveal theological commitments more sharply. What does the water signify? Who should receive it? What does it accomplish?",
    images: ["/api/og?title=Baptism"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
