import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Practice of Joy",
  description: "'Rejoice in the Lord always' — written from prison. Joy in Christianity is not a feeling that depends on circumstances; it is a command addressed to the will and rooted in who God is.",
  openGraph: {
    title: "The Practice of Joy — Vine",
    description: "'Rejoice in the Lord always' — written from prison. Joy in Christianity is not a feeling that depends on circumstances; it is a command addressed to the will and rooted in who God is.",
    images: ["/api/og?title=The+Practice+of+Joy"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Practice of Joy — Vine",
    description: "'Rejoice in the Lord always' — written from prison. Joy in Christianity is not a feeling that depends on circumstances; it is a command addressed to the will and rooted in who God is.",
    images: ["/api/og?title=The+Practice+of+Joy"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
