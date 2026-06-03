import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Recovery Guide",
  description: "Recovery is not about getting your life back together. It is about discovering, perhaps for the first time, a life built on the grace of God — who frees the captive, restores the broken, and turns…",
  openGraph: {
    title: "Christian Recovery Guide — Vine",
    description: "Recovery is not about getting your life back together. It is about discovering, perhaps for the first time, a life built on the grace of God — who frees the captive, restores the broken, and turns…",
    images: ["/api/og?title=Christian+Recovery+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Recovery Guide — Vine",
    description: "Recovery is not about getting your life back together. It is about discovering, perhaps for the first time, a life built on the grace of God — who frees the captive, restores the broken, and turns…",
    images: ["/api/og?title=Christian+Recovery+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
