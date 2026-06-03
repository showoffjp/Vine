import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Mental Health Resources",
  description: "The church is not called to choose between the gospel and mental health care — it is called to offer both. These resources take Scripture and psychological reality seriously at the same time.",
  openGraph: {
    title: "Christian Mental Health Resources — Vine",
    description: "The church is not called to choose between the gospel and mental health care — it is called to offer both. These resources take Scripture and psychological reality seriously at the same time.",
    images: ["/api/og?title=Christian+Mental+Health+Resources"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Mental Health Resources — Vine",
    description: "The church is not called to choose between the gospel and mental health care — it is called to offer both. These resources take Scripture and psychological reality seriously at the same time.",
    images: ["/api/og?title=Christian+Mental+Health+Resources"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
