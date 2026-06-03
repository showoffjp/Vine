import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The History of Christian Music",
  description: "From the unaccompanied Psalms of the early church to the global worship anthems of today — trace how the people of God have sung their faith across two millennia, and discover the figures, sounds,…",
  openGraph: {
    title: "The History of Christian Music — Vine",
    description: "From the unaccompanied Psalms of the early church to the global worship anthems of today — trace how the people of God have sung their faith across two millennia, and discover the figures, sounds,…",
    images: ["/api/og?title=The+History+of+Christian+Music"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The History of Christian Music — Vine",
    description: "From the unaccompanied Psalms of the early church to the global worship anthems of today — trace how the people of God have sung their faith across two millennia, and discover the figures, sounds,…",
    images: ["/api/og?title=The+History+of+Christian+Music"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
