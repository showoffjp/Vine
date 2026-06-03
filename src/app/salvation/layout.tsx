import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Gospel",
  description: "There are no magic words. Speak from your heart. This is a guide.",
  openGraph: {
    title: "The Gospel — Vine",
    description: "There are no magic words. Speak from your heart. This is a guide.",
    images: ["/api/og?title=The+Gospel"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Gospel — Vine",
    description: "There are no magic words. Speak from your heart. This is a guide.",
    images: ["/api/og?title=The+Gospel"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
