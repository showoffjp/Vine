import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grief & Loss",
  description: "A gentle, honest space for those walking through loss. Stories from real people, a private journal, and resources that don't pretend grief is simple.",
  openGraph: {
    title: "Grief & Loss — Vine",
    description: "A gentle, honest space for those walking through loss. Stories from real people, a private journal, and resources that don't pretend grief is simple.",
    images: ["/api/og?title=Grief+%26+Loss"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grief & Loss — Vine",
    description: "A gentle, honest space for those walking through loss. Stories from real people, a private journal, and resources that don't pretend grief is simple.",
    images: ["/api/og?title=Grief+%26+Loss"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
