import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Practice of Hospitality",
  description: "Philoxenia: love of the stranger. Not a personality trait for the naturally social — a command for all believers. The table you set is a small echo of the one Christ has set for us.",
  openGraph: {
    title: "The Practice of Hospitality — Vine",
    description: "Philoxenia: love of the stranger. Not a personality trait for the naturally social — a command for all believers. The table you set is a small echo of the one Christ has set for us.",
    images: ["/api/og?title=The+Practice+of+Hospitality"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Practice of Hospitality — Vine",
    description: "Philoxenia: love of the stranger. Not a personality trait for the naturally social — a command for all believers. The table you set is a small echo of the one Christ has set for us.",
    images: ["/api/og?title=The+Practice+of+Hospitality"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
