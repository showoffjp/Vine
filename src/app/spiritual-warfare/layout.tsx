import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Warfare",
  description: "\"For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world.\"",
  openGraph: {
    title: "Spiritual Warfare — Vine",
    description: "\"For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world.\"",
    images: ["/api/og?title=Spiritual+Warfare"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiritual Warfare — Vine",
    description: "\"For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world.\"",
    images: ["/api/og?title=Spiritual+Warfare"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
