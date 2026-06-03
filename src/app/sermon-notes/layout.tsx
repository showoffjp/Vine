import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermon Notes",
  description: "Take structured notes during sermons — scripture reference, key points, personal application.",
  openGraph: {
    title: "Sermon Notes — Vine",
    description: "Take structured notes during sermons — scripture reference, key points, personal application.",
    images: ["/api/og?title=Sermon+Notes"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sermon Notes — Vine",
    description: "Take structured notes during sermons — scripture reference, key points, personal application.",
    images: ["/api/og?title=Sermon+Notes"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
