import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Great Prayer Warriors of History",
  description: "The men and women who took prayer seriously enough to let it reshape their lives — and through whom God moved nations, opened closed countries, and fed thousands of orphans.",
  openGraph: {
    title: "Great Prayer Warriors of History — Vine",
    description: "The men and women who took prayer seriously enough to let it reshape their lives — and through whom God moved nations, opened closed countries, and fed thousands of orphans.",
    images: ["/api/og?title=Great+Prayer+Warriors+of+History"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Prayer Warriors of History — Vine",
    description: "The men and women who took prayer seriously enough to let it reshape their lives — and through whom God moved nations, opened closed countries, and fed thousands of orphans.",
    images: ["/api/og?title=Great+Prayer+Warriors+of+History"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
