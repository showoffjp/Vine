import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Philosophy",
  description: "The greatest Christian minds — Plantinga, Lewis, Craig, Schaeffer, Chesterton — and the arguments they have made for the rationality of Christian faith. Philosophy has always been the handmaid of t…",
  openGraph: {
    title: "Christian Philosophy — Vine",
    description: "The greatest Christian minds — Plantinga, Lewis, Craig, Schaeffer, Chesterton — and the arguments they have made for the rationality of Christian faith. Philosophy has always been the handmaid of t…",
    images: ["/api/og?title=Christian+Philosophy"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Philosophy — Vine",
    description: "The greatest Christian minds — Plantinga, Lewis, Craig, Schaeffer, Chesterton — and the arguments they have made for the rationality of Christian faith. Philosophy has always been the handmaid of t…",
    images: ["/api/og?title=Christian+Philosophy"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
