import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "End Times & Eschatology",
  description: "What Christians believe about Christ's return, resurrection, judgment, and new creation — the theological essentials that unite all traditions, and the views that divide them.",
  openGraph: {
    title: "End Times & Eschatology — Vine",
    description: "What Christians believe about Christ's return, resurrection, judgment, and new creation — the theological essentials that unite all traditions, and the views that divide them.",
    images: ["/api/og?title=End+Times+%26+Eschatology"],
  },
  twitter: {
    card: "summary_large_image",
    title: "End Times & Eschatology — Vine",
    description: "What Christians believe about Christ's return, resurrection, judgment, and new creation — the theological essentials that unite all traditions, and the views that divide them.",
    images: ["/api/og?title=End+Times+%26+Eschatology"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
