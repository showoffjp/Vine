import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Simplicity",
  description: "Simplicity is a spiritual discipline — the intentional removal of clutter so that what matters most can occupy its proper place.",
  openGraph: {
    title: "Christian Simplicity — Vine",
    description: "Simplicity is a spiritual discipline — the intentional removal of clutter so that what matters most can occupy its proper place.",
    images: ["/api/og?title=Christian+Simplicity"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Simplicity — Vine",
    description: "Simplicity is a spiritual discipline — the intentional removal of clutter so that what matters most can occupy its proper place.",
    images: ["/api/og?title=Christian+Simplicity"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
