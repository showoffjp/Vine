import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body Image & Faith",
  description: "The body is a good gift from a good Creator — the place where God's Spirit dwells, made in the divine image, destined for resurrection. A Christian theology of the body changes how we see ourselves.",
  openGraph: {
    title: "Body Image & Faith — Vine",
    description: "The body is a good gift from a good Creator — the place where God's Spirit dwells, made in the divine image, destined for resurrection. A Christian theology of the body changes how we see ourselves.",
    images: ["/api/og?title=Body+Image+%26+Faith"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Image & Faith — Vine",
    description: "The body is a good gift from a good Creator — the place where God's Spirit dwells, made in the divine image, destined for resurrection. A Christian theology of the body changes how we see ourselves.",
    images: ["/api/og?title=Body+Image+%26+Faith"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
