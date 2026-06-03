import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Race & Reconciliation",
  description: "The vision of Revelation 7 — every nation, tribe, and tongue worshipping together — is not just an end-times hope. It is a present calling. The church is meant to be a foretaste of that reconciled…",
  openGraph: {
    title: "Race & Reconciliation — Vine",
    description: "The vision of Revelation 7 — every nation, tribe, and tongue worshipping together — is not just an end-times hope. It is a present calling. The church is meant to be a foretaste of that reconciled…",
    images: ["/api/og?title=Race+%26+Reconciliation"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Race & Reconciliation — Vine",
    description: "The vision of Revelation 7 — every nation, tribe, and tongue worshipping together — is not just an end-times hope. It is a present calling. The church is meant to be a foretaste of that reconciled…",
    images: ["/api/og?title=Race+%26+Reconciliation"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
