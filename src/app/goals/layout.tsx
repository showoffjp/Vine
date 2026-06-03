import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Goals",
  description: "Track your spiritual disciplines and growth goals.",
  openGraph: {
    title: "My Goals — Vine",
    description: "Track your spiritual disciplines and growth goals.",
    images: ["/api/og?title=My+Goals"],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Goals — Vine",
    description: "Track your spiritual disciplines and growth goals.",
    images: ["/api/og?title=My+Goals"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
