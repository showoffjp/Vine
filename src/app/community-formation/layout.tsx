import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Christian Community",
  description: "The Christian faith was never designed to be lived alone. Community is not the optional enhancement to individual faith — it is the environment in which the faith grows and the place where it becom…",
  openGraph: {
    title: "Building Christian Community — Vine",
    description: "The Christian faith was never designed to be lived alone. Community is not the optional enhancement to individual faith — it is the environment in which the faith grows and the place where it becom…",
    images: ["/api/og?title=Building+Christian+Community"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Christian Community — Vine",
    description: "The Christian faith was never designed to be lived alone. Community is not the optional enhancement to individual faith — it is the environment in which the faith grows and the place where it becom…",
    images: ["/api/og?title=Building+Christian+Community"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
