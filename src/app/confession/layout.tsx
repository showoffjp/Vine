import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confession & Repentance",
  description: "Confession is not groveling — it is clarity. And repentance is not a feeling — it is a turn.",
  openGraph: {
    title: "Confession & Repentance — Vine",
    description: "Confession is not groveling — it is clarity. And repentance is not a feeling — it is a turn.",
    images: ["/api/og?title=Confession+%26+Repentance"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Confession & Repentance — Vine",
    description: "Confession is not groveling — it is clarity. And repentance is not a feeling — it is a turn.",
    images: ["/api/og?title=Confession+%26+Repentance"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
