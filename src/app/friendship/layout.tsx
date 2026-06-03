import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Friendship",
  description: "'It is not good for man to be alone.' Friendship is not a luxury — it is a creation-given need, a spiritual discipline, and a witness to a watching world.",
  openGraph: {
    title: "Christian Friendship — Vine",
    description: "'It is not good for man to be alone.' Friendship is not a luxury — it is a creation-given need, a spiritual discipline, and a witness to a watching world.",
    images: ["/api/og?title=Christian+Friendship"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Friendship — Vine",
    description: "'It is not good for man to be alone.' Friendship is not a luxury — it is a creation-given need, a spiritual discipline, and a witness to a watching world.",
    images: ["/api/og?title=Christian+Friendship"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
