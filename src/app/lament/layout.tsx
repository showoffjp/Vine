import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Practice of Lament",
  description: "One-third of the Psalms are laments. God invites honest grief — not polished praise that denies pain but raw, trusting conversation with the God who is present in the dark.",
  openGraph: {
    title: "The Practice of Lament — Vine",
    description: "One-third of the Psalms are laments. God invites honest grief — not polished praise that denies pain but raw, trusting conversation with the God who is present in the dark.",
    images: ["/api/og?title=The+Practice+of+Lament"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Practice of Lament — Vine",
    description: "One-third of the Psalms are laments. God invites honest grief — not polished praise that denies pain but raw, trusting conversation with the God who is present in the dark.",
    images: ["/api/og?title=The+Practice+of+Lament"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
